import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBarWhite from "./common/topbar-white";
import {changeCurrency} from '../../../actions'
import {connect} from "react-redux";
import LogoImage from "./common/logo";

class HeaderFour extends Component {

    constructor(props) {
        super(props);

		this.state = {
			isLoading:false
		}
    }

    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
	}

    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

	load = ()=>{
		this.setState({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			this.setState({isLoading: false})
		})
	};
	
	render() {

		return (
			<div>
				<header >
					{this.state.isLoading ? <Pace color="#27ae60"/> : null}
					<div class="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<TopBarWhite/>

					<div class="container-fluid">
						<div class="row">
							<div class="col-sm-12">
								<div class="main-menu">
									<div class="menu-left">
										<div class="navbar">
											<a href="javascript:void(0)" onClick={this.openNav}>
												<div class="bar-style"> <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar/>
										</div>
										<div class="brand-logo">
                                            <LogoImage logo={this.props.logoName} />
										</div>
									</div>
									<div class="menu-right pull-right">
										{/*Top Navigation Bar Component*/}
										<NavBar/>

										<div>
											<div class="icon-nav">
												<ul>
													<li class="onhover-div mobile-search">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={this.openSearch} class="img-fluid" alt="" />
															<i class="fa fa-search" onClick={this.openSearch}></i></div>
													</li>
													<li class="onhover-div mobile-setting">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} class="img-fluid" alt="" />
															<i class="fa fa-cog"></i></div>
														<div class="show-div setting">
															<h6>language</h6>
															<ul>
																<li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>
																<li><a href={null} onClick={() => this.changeLanguage('fn')}>French</a> </li>
															</ul>
															<h6>currency</h6>
															<ul class="list-inline">
																<li><a href={null} onClick={() => this.props.changeCurrency('???')}>euro</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('???')}>rupees</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('??')}>pound</a> </li>
																<li><a href={null} onClick={() => this.props.changeCurrency('$')}>doller</a> </li>
															</ul>
														</div>
													</li>
													{/*Header Cart Component */}
													<CartContainer/>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

                <div id="search-overlay" class="search-overlay">
                    <div>
                        <span class="closebtn" onClick={this.closeSearch} title="Close Overlay">??</span>
                        <div class="overlay-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
			)
	}
}

export default connect(null,
    { changeCurrency }
)(HeaderFour);