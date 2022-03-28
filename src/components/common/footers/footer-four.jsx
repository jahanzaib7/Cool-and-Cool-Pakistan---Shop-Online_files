import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { SlideUpDown } from "../../../services/script"
import LogoImage from "../headers/common/logo"
import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

class FooterFour extends Component {
 
    constructor(props) {
        super(props)
        

    }
    componentDidMount() {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('slide-up');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
                
            });
            
        }
        
    }


    render() {
        const { socialLinks, country } = this.props;
        return (
            <footer class="footer-style" style={{bottom:0, width:"100%", left:0,}}>
                <div class="white-layout" >
                    <div class="container">
                        <section class="small-section">

                        </section>
                    </div>
                </div>




                <footer>
<hr   style={{ borderTop: "1px solid #fc9a19", color:"#fc9a19"}} />
                    <div class="content">
                        <div class="top">
                            <div class="logo-details">
                                <LogoImage logo={this.props.logoName} />
                            </div>
                            <div class="media-icons">
          
          <a href="https://www.facebook.com/wovista/"><FaFacebookF className="fab" /></a>
          <a href="#"><FaTwitter className="fab" /></a>
          <a href="#"><FaInstagram className="fab" /></a>
          {/* <a href="#"><FaLinkedinIn className="fab" /></a> */}
          <a href="#"><FaYoutube className="fab" /></a>
 
        </div>
                        </div>
                        <div class="link-boxes">
                           
                            <ul class="box">
                                <li class="link_name">New Arrival</li>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/Category/Mens`}><li><a>Mens</a></li></Link><br />
                               <Link to={`${process.env.PUBLIC_URL}/Category/Womens`}> <li><a >Womens</a></li></Link><br />
                                <Link to={`${process.env.PUBLIC_URL}/Category/Kids`}><li><a >Kids</a></li></Link><br />
                               <Link to={`${process.env.PUBLIC_URL}/Category/Misc`}> <li><a >Misc</a></li></Link>
                            </ul>
                            <ul class="box">
                               <Link to={`${process.env.PUBLIC_URL}/`}><li class="link_name">Account</li></Link> 
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li><a href="/">Profile</a></li></Link>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li><a href="/">My account</a></li></Link>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li><a href="/">Prefrences</a></li></Link>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li><a href="/">Purchase</a></li></Link>
                            </ul>
                            <ul class="box">
                                <li class="link_name">Company</li>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/about-us`}><li><a>About</a></li></Link><br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li><a>Shop</a></li></Link><br />
                               <Link to={`${process.env.PUBLIC_URL}/contact`}><li><a>Contact</a></li></Link> <br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li><a>Home</a></li></Link>
                            </ul>
                            <ul class="box input-box">
                                <li class="link_name">Subscribe</li>
                                <li><input type="text" placeholder="Enter your email" required="required"
                                    onChange={this.handle_change} /></li>
                                <li><input type="button" value="Subscribe" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="bottom-details" style={{backgroundColor:"#fee6c6"}}>
                        <div class="bottom_text">
                            <span class="copyright_text">Copyrighted by Wovista. | All Rights Reserved.</span>
                            <span class="policy_terms">
                                <a href="#">Privacy policy</a>
                                <a href="#">Terms & condition</a>
                            </span>
                        </div>
                    </div>
                </footer>




            </footer>
        )
    }
}


const mapStateToProps = (state) => ({
    socialLinks: state.data.socialLinks,
    country: state.filters.country

})


export default connect(mapStateToProps)(FooterFour);