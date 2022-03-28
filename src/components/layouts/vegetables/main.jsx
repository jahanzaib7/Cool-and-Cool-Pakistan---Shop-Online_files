import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import {Slider3} from "../../../services/script"
import Trading from "./tranding"
import Special from "../common/special"
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"
import HeaderTwo from "../../common/headers/header-two"
import FooterOne from "../../common/footers/footer-one"
import ThemeSettings from "../../common/theme-settings"

class Vegetables extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `#` );
    }
    render(){
        return (
            <div>
                <Helmet>
                    <title>MultiKart | Vegetable Store</title>
                </Helmet>
                <HeaderTwo logoName={'logo.png'} />
                <section class="p-0">
                    <Slider class="slide-1 home-slider">
                        <div>
                            <div class="home home39 text-center">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="slider-contain">
                                                    <div>
                                                        <h4>save 10%</h4>
                                                        <h1>fresh vegetables</h1><a href="#" class="btn btn-solid">shop
                                                        now</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div>
                            <div class="home home38 text-center">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col">
                                                <div class="slider-contain">
                                                    <div>
                                                        <h4>save upto 10%</h4>
                                                        <h1>fresh vegetables</h1><a href="#" class="btn btn-solid">shop
                                                        now</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Slider>
                </section>

                {/*collection banner layout*/}
                <section class="banner-padding absolute-banner pb-0">
                    <div class="container absolute-bg">
                        <div class="service p-0">
                            <div class="row">
                                <div class="col-md-4 service-block">
                                    <div class="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                        <div class="media-body">
                                            <h4>free shipping</h4>
                                            <p>free shipping world wide</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 service-block">
                                    <div class="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                        <div class="media-body">
                                            <h4>24 X 7 service</h4>
                                            <p>online service for new customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 service-block">
                                    <div class="media">
                                        <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                        <div class="media-body">
                                            <h4>festival offer</h4>
                                            <p>new online special festival offer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner layout end*/}

                {/*product section Start*/}
                <Trading type={'vegetable'} />
                {/*product section End*/}

                {/*Parallax banner*/}
                <section class="p-0">
                    <div class="full-banner parallax-banner15 parallax text-left p-left">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="banner-contain">
                                        <h2>2018</h2>
                                        <h3>food market</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner end*/}

                {/*product-box slider*/}
                <Special type={'vegetable'} />
                {/*product-box slider end*/}

                {/*Blog Section*/}
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="title4">
                                <h4>recent story</h4>
                                <h2 class="title-inner4">from the blog</h2>
                                <div class="line"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="blog section-b-space pt-0 ratio2_3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <Slider {...Slider3} class="slide-3 no-arrow">
                                    <div class="col-md-12">
                                        <a href="#">
                                            <div class="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/1.jpg`}
                                                         class="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr class="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <a href="#">
                                            <div class="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/2.jpg`}
                                                         class="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr class="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <a href="#">
                                            <div class="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/3.jpg`}
                                                         class="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr class="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <a href="#">
                                            <div class="classic-effect">
                                                <div>
                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/vegetables/blog/4.jpg`}
                                                         class="img-fluid blur-up lazyload bg-img" alt="" />
                                                </div>
                                                <span></span>
                                            </div>
                                        </a>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <a href="#">
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit,</p>
                                            </a>
                                            <hr class="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog Section End*/}
                <ThemeSettings/>
                <FooterOne logoName={'logo.png'} />
            </div>
        )
    }
}


export default Vegetables