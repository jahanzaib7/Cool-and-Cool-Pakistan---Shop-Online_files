import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import {SlideUpDown} from "../../../services/script"
import LogoImage from "../headers/common/logo"

class FooterThree extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }


    render () {

        return <footer class="footer-light">
            <div class="dark-layout">
                <div class="container">
                    <section class="section-b-space border-b">
                        <div class="row footer-theme2">
                            <div class="col-lg-3">
                                <div class="footer-title footer-mobile-title">
                                    <h4>about</h4>
                                </div>
                                <div class="footer-contant">
                                    <div class="footer-logo">
                                        <LogoImage logo={this.props.logoName} />
                                    </div>
                                    <p>Cool & Cool a leading international FMCG brand, is known for its exceptional reputation followed by delivering trustworthy and reliable premium quality products. Established in 2004 and marketed by ABC International Ltd.</p>
                                </div>
                                
                            </div>
                            <div class="col-lg-6 subscribe-wrapper">
                                <div class="subscribe-block">
                                    <h2>newsletter</h2>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control"
                                                   id="exampleFormControlInput3" placeholder="Enter your email"/>
                                            <button type="submit" class="btn btn-solid">subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="footer-title">
                                    <h4>store information</h4>
                                </div>
                                <div class="footer-contant">
                                    <ul class="contact-details">
                                        <li>Multikart Demo Store, Demo store India 345-659</li>
                                        <li>Call Us: 123-456-7898</li>
                                        <li>Email Us: <a href="#">Support@Fiot.com</a></li>
                                        <li>Fax: 123456</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="dark-layout">
                <div class="container">
                    <section class="small-section">
                        <div class="row footer-theme2">
                            <div class="col p-set">
                                <div class="footer-link">
                                    <div class="footer-title">
                                        <h4>my account</h4>
                                    </div>
                                    <div class="footer-contant">
                                        <ul>
                                            <li><Link
                                                to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>womens</Link>
                                            </li>
                                            <li><Link
                                                to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>clothing</Link>
                                            </li>
                                            <li><Link
                                                to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>accessories</Link>
                                            </li>
                                            <li><Link
                                                to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>featured</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="footer-link-b">
                                    <div class="footer-title">
                                        <h4>why we choose</h4>
                                    </div>
                                    <div class="footer-contant">
                                        <ul>
                                            <li><a href="#">shipping & return</a></li>
                                            <li><a href="#">secure shopping</a></li>
                                            <li><a href="#">gallary</a></li>
                                            <li><a href="#">affiliates</a></li>
                                            <li><a href="#">contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="sub-footer darker-subfooter">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="footer-end">
                                <p><i class="fa fa-copyright" aria-hidden="true"></i> 2017-18 themeforest powered by
                                    pixelstrap</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-md-6 col-sm-12">
                            <div class="payment-card-bottom">
                                <ul>
                                    <li>
                                        <Link to={'https://www.facebook.com/'}>
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'https://plus.google.com/'}>
                                            <i class="fa fa-google-plus" aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to={'https://twitter.com'}>
                                            <i class="fa fa-twitter" aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to={'https://instagram.com'}>
                                            <i class="fa fa-instagram" aria-hidden="true"></i></Link>
                                    </li>
                                    <li>
                                        <Link to={'https://rss.com/'}>
                                            <i class="fa fa-rss" aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    }
}

export default FooterThree;