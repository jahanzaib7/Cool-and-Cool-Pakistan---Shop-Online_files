import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import SpecialProducts from "./special-products"
import BlogSection from "../common/blogsection"
import HeaderTwo from "../../common/headers/header-two"
import ThemeSettings from "../../common/theme-settings"
import FooterOne from "../../common/footers/footer-one";

class Furniture extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color5.css` );
    }

    render(){
        return (
            <div>
                <HeaderTwo logoName={'logo/1.png'} />
                <Helmet>
                    <title>MultiKart | Furniture Store</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                <section class="p-0 small-slider">
                    <Slider class="slide-1 home-slider">
                        <div>
                            <div class="home home12 text-left">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>furniture sofa</h4>
                                                    <h1>harmony sofa</h1><a href="#" class="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="home home13 text-left">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>furniture sofa</h4>
                                                    <h1>harmony chair</h1><a href="#" class="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*Collection Banner section*/}
                <section class="banner-furniture ratio_45">
                    <div class="container-fluid">
                        <div class="row partition3">
                            <div class="col-md-4">
                                <a href="#">
                                    <div class="collection-banner p-right text-right">
                                        <div class="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/furniture/2banner1.jpg`} alt=""
                                                 class="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div class="contain-banner banner-3">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>sofa</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href="#">
                                    <div class="collection-banner p-right text-right">
                                        <div class="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/furniture/2banner2.jpg`} alt=""
                                                 class="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div class="contain-banner banner-3">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>new arrival</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-4">
                                <a href="#">
                                    <div class="collection-banner p-right text-right">
                                        <div class="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/furniture/2banner3.jpg`} alt=""
                                                 class="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div class="contain-banner banner-3">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>chair</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Collection Banner section end*/}

                {/*Special Products Start*/}
                <SpecialProducts type={'furniture'} />
                {/*Special Products End*/}

                {/*Parallax banner*/}
                <section class="p-0">
                    <div class="full-banner parallax parallax-banner3  text-center p-center">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="banner-contain">
                                        <h2>2018</h2>
                                        <h3>interior design in home</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner end*/}


                {/* Blog Section Section*/}
                <section class="blog blog-2 section-b-space ratio3_2">
                    <div class="container ">
                        <div class="row">
                            <div class="col">
                                <div class="title1">
                                    <h4>Recent Story</h4>
                                    <h2 class="title-inner1">from the blog</h2>
                                    <hr role="tournament6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSection />
                </section>
                {/* Blog Section End*/}

                <ThemeSettings/>

                <FooterOne logoName={'logo/1.png'} />
            </div>
        )
    }
}


export default Furniture;