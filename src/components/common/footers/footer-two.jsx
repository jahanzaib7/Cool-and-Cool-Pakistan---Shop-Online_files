import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoImage from "../headers/common/logo"
import { SlideUpDown } from "../../../services/script";

class FooterTwo extends Component {

    componentDidMount() {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }

    render() {

        return (
            <footer class="footer-light pet-layout-footer">
                <div class="white-layout">
                    <div class="container">
                        <section class="small-section">
                            <div class="row footer-theme2">
                                <div class="col">
                                    <div class="footer-link link-white">
                                        <div class="footer-brand-logo">
                                            <LogoImage logo={this.props.logoName} />
                                        </div>
                                        <div class="social-white">
                                            <ul>
                                                <li>
                                                    <Link to={'https://www.facebook.com/'} ><i class="fa fa-facebook" aria-hidden="true"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={'https://plus.google.com/'} ><i class="fa fa-google-plus" aria-hidden="true"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={'https://twitter.com'}><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={'https://instagram.com'}><i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                                </li>
                                                <li>
                                                    <Link to={'https://rss.com/'}><i class="fa fa-rss" aria-hidden="true"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="footer-title footer-mobile-title">
                                            <h4>my account</h4>
                                        </div>
                                        <div class="footer-contant">
                                            <ul>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >womens</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >clothing</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >accessories</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >featured</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >service</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >cart</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >my order</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >FAQ</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >new product</Link></li>
                                                <li><Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} >featured product</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div class="sub-footer black-subfooter">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-md-6 col-sm-12">
                                <div class="footer-end">
                                    <p><i class="fa fa-copyright" aria-hidden="true"></i> 2018-19 themeforest
                                        powered by pixelstrap</p>
                                </div>
                            </div>
                            <div class="col-xl-6 col-md-6 col-sm-12">
                                <div class="payment-card-bottom">
                                    <ul>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterTwo;