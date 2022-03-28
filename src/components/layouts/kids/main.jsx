import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import ThemeSettings from "../../common/theme-settings";

// Import custom components
import TopCollection from "../common/collection"
import HeaderOne from "../../common/headers/header-one"
import FooterOne from "../../common/footers/footer-one"
import Instagram from "../common/instagram"
import LogoBlock from "../common/logo-block"
import MultiSlider from "./multiple-slider";

class Kids extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color10.css` );
    }
    render(){

        return (
            <div>
                <Helmet>
                    <title>MultiKart | Kids Store</title>
                </Helmet>
                <HeaderOne logoName={'logo/6.png'}/>

                <section class="p-0">
                    <Slider class="slide-1 home-slider">
                        <div>
                            <div class="home home21 text-center p-right">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>for kids</h4>
                                                    <h1>spring collection</h1><a href="#" class="btn btn-solid">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="home home22 text-center">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>30% off</h4>
                                                    <h1>lowest price</h1><a href="#" class="btn btn-solid">shop now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*collection banner layout*/}
                <section class="banner-padding absolute-banner pb-0 ratio2_1">
                    <div class="container absolute-bg">
                        <div class="row partition2">
                            <div class="col-md-6">
                                <a href="#">
                                    <div class="collection-banner p-right text-center">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/2.jpg`}
                                                 class="img-fluid  bg-img" alt="" />
                                        </div>
                                        <div class="contain-banner">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>outfits</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <a href="#">
                                    <div class="collection-banner p-right text-center">
                                        <div>
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/kids/1.jpg`}
                                                 class="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div class="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>toys</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner layout end*/}

                {/*Product slider*/}
                <TopCollection type={'kids'} />
                {/*Product slider End*/}

                {/*Parallax banner*/}
                <section class="p-0">
                    <div class="full-banner parallax parallax-banner11 text-center p-left">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div class="banner-contain">
                                            <h2>2018</h2>
                                            <h3>top trends</h3>
                                            <h4>special offer</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>
                {/*Parallax banner end*/}

                {/*Product Slider*/}
                <MultiSlider type={'kids'} />
                {/*Product Slider End*/}

                {/*Instagram Section*/}
                <Instagram />
                {/*Instagram Section End*/}

                {/* Logo Block Section*/}
                <LogoBlock />
                {/* Logo Block Section End*/}

                <FooterOne logoName={'logo/6.png'}/>

                <ThemeSettings />
            </div>
        )
    }
}


export default Kids;