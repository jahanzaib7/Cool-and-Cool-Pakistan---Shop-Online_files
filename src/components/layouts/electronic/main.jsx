import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';

// Import custom components
import HeaderFour from "../../common/headers/header-four"
import SpecialProducts from "./special-products"
import FooterOne from "../../common/footers/footer-one";
import ThemeSettings from "../../common/theme-settings"

class Electronic extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color7.css` );
    }

    render(){

        return (
            <div class="container-fluid layout-8">
                <Helmet>
                    <title>MultiKart | Electronic Store</title>
                </Helmet>
                <HeaderFour logoName={'logo/3.png'} />
                <section class="p-0 padding-bottom-cls">
                    <Slider class="slide-1 home-slider">
                        <div>
                            <div class="home home15">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>save 30%</h4>
                                                    <h1>electronic</h1>
                                                    <a href="#" class="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="home home16">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>save upto 30%</h4>
                                                    <h1>headphone</h1>
                                                    <a href="#" class="btn btn-outline btn-classic">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                <div class="layout-8-bg">
                    {/*About Section*/}
                    <section class="banner-goggles ratio2_3">
                        <div class="container-fluid">
                            <div class="row partition3">
                                <div class="col-md-4">
                                    <a href="#">
                                        <div class="collection-banner">
                                            <div class="img-part">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/sub1.jpg`}
                                                     class="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <div class="contain-banner banner-3">
                                                <div>
                                                    <h4>10% off</h4>
                                                    <h2>speaker</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-4">
                                    <a href="#">
                                        <div class="collection-banner">
                                            <div class="img-part">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/sub2.jpg`}
                                                     class="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <div class="contain-banner banner-3">
                                                <div>
                                                    <h4>10% off</h4>
                                                    <h2>earplug</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-md-4">
                                    <a href="#">
                                        <div class="collection-banner">
                                            <div class="img-part">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/sub3.jpg`}
                                                     class="img-fluid blur-up lazyload bg-img" alt="" />
                                            </div>
                                            <div class="contain-banner banner-3">
                                                <div>
                                                    <h4>50% off</h4>
                                                    <h2>best deal</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*About Section End*/}

                    {/*Product slider*/}
                    <SpecialProducts type={'electronics'} />
                    {/*Product slider End*/}
                </div>
                <div class="footer-white">
                    <FooterOne logoName={'logo/3.png'} />
                </div>

                <ThemeSettings />
            </div>
        )
    }
}


export default Electronic;