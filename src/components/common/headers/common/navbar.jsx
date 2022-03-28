import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'
// import * as url from '../../../../constants/Endpoints'
import {connect} from 'react-redux'
class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClose: { right: '0px',display: 'flex',flexWrap: 'wrap' },
            backnav:{margin:'0px auto',display:'none'},
            navMenuisClosed: true,
        }
    }

    componentWillMount() {

        if (window.innerWidth < 750) {
            this.setState({ navClose: { right: '-410px',display: 'none',flexWrap: 'wrap' },backnav:{display:'block',margin:'0px auto'} })
        }
        if (window.innerWidth < 1199) {
            this.setState({ navClose: { right: '-300px',display: 'none',flexWrap: 'wrap' },backnav:{display:'block',margin:'0px auto'} })
        }
    }

    openNav() {
    if(this.state.navMenuisClosed){
        this.setState({  navClose: { right: '0px',display: 'flex',flexWrap: 'wrap' },backnav:{display:'block',margin:'0px auto'},navMenuisClosed:false})
    }else{
        this.setState({  navClose: { right: '0px',display: 'none',flexWrap: 'wrap' },backnav:{display:'none',margin:'0px auto'},navMenuisClosed:true })
    }
       
    }
    closeNav() {
        this.setState({  navClose: { right: '0px',display: 'none',flexWrap: 'wrap' },backnav:{display:'none',margin:'0px auto'},navMenuisClosed:true  })
    }

    onMouseEnterHandler() {
        if (window.innerWidth > 1199) {
            document.querySelector("#main-menu").classList.add("hover-unset");
        }
    }

    handleSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;

        if(event.target.nextElementSibling.classList.contains('opensubmenu'))
            event.target.nextElementSibling.classList.remove('opensubmenu')
        else{
            document.querySelectorAll('.nav-submenu').forEach(function (value) {
                value.classList.remove('opensubmenu');
            });
            document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
            event.target.nextElementSibling.classList.add('opensubmenu')
        }
    }

    handleMegaSubmenu = (event) => {
        if (event.target.classList.contains('sub-arrow'))
            return;
            
        if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
            event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
        else{
            document.querySelectorAll('.menu-content').forEach(function (value) {
                value.classList.remove('opensubmegamenu');
            });
            event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
        }
    }

    render() {
        const { translate,items,user} = this.props;

        return (
            <div>
                <div class="main-navbar">
                    <div id="mainnav" >
                        <div class="toggle-nav" onClick={this.openNav.bind(this)} >
                            {/* <i class="fa fa-bars sidebar-bar"></i> */}
                        </div>
                        <ul class="nav-menu" style={this.state.navClose}>
                       <Link to="/" class="general-menu active"> <li >
                          HOME
                        </li>
                        </Link>
                        <Link to="/about-us" class="general-menu" >  <li>
                          ABOUT US
                        </li>
                        </Link>
                        {(Object.keys(user).length > 0)?    
                            <Link to="/dashboard" class="general-menu" > <li>
                            MY ACCOUNT
                            </li>
                            </Link>
                        :
                            <Link to="/login" class="general-menu" > <li>
                            LOGIN
                            </li>
                            </Link>
                        }
                     
                        <Link to="/Deals-select" class="general-menu"  > 
                        <li>
                         DEALS
                         {/* <ul class="submenu">
                         <div class="arrow-up"></div>
                                <div class=" row subdeal">
                                    <li class="general-menu "><Link  class="general-menu " to={`/deals`} >DEALS AND OFFERS</Link></li>
                                    <li  class="general-menu "><Link  class="general-menu " to={`deals/dotd`} >DEAL OF THE DAY</Link></li>
                                </div>
                        </ul> */}
                        </li>
                        </Link>
                        <Link to="/faq" class="general-menu" > <li>
                            FAQ
                        </li>
                        </Link>
                        <Link to="/contact" class="general-menu" > <li>
                            CONTACT
                        </li>
                        </Link>
                        </ul>
                        <ul class="nav-menu" style={this.state.navClose}>
                            <li onClick={this.closeNav.bind(this)} style ={this.state.backnav}>
                         
                                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/back.png`} class=" nav-link img-fluid" style={{
                                                                                     
                                                                                        width: '15px',
                                                                                        height: '15px',
                                                                                        margin: '0 auto',
                                                                                        display:'block',
                                                                                        padding:'0%',

                                        }}/>
                                 <p style={{    padding: '5px',
                                                    fontSize:'10px',
                                                    fontWeight: '600',
                                                    }}>Back</p>  
                                 
                            </li>


                            {
                               items.map((menu, index ) =>
                                <li key={index} style={{width:'85px', textAlign:'right'}}>
                                 
                                    <Link to={`/Category/${menu.name}`} class="nav-link">
                                        {/* <img alt="" src={`${url.temp_url}${menu.image_url}`} class="img-fluid" style={{ */}
                                        <img alt="" src={`${menu.category_icon_path}`} class="img-fluid" style={{
                                                                                     
                                                                                        width: '50px',
                                                                                        height: '50px',
                                                                                        margin: '0 auto',
                                                                                        display:'block',
                                                                                        padding:'5%',

                                        }}/>
                                      <p style={{    padding: '5px',
                                                    fontSize:'10px',
                                                    fontWeight: '600',
                                                    lineHeight: '1.3' }}>{menu.name}</p>  
                                    </Link>
                                    
                                </li>
                               )
                            }
                        
                         
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    items: state.data.menu,
    user: state.user.user

    
})

export default connect(mapStateToProps)(withTranslate(NavBar));