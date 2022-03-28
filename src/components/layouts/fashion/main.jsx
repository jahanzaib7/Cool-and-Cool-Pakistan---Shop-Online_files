import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

// Import custom components
import TopCollection from './top-collection';
import SpecialProducts from "../common/products";
import BlogSection from "../common/blogsection";
import Instagram from "../common/instagram";
import LogoBlock from "../common/logo-block";
import {
    svgFreeShipping,
    svgservice,
    svgoffer
} from "../../../services/script"


class Fashion extends Component {

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `#` );
    }

	render() {
		return (
			<div>
                <Helmet>
                    <title>MultiKart | Fashion Store</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*Home Slider*/}
                <section class="p-0">
                    <Slider  class="slide-1 home-slider">
                        <div>
                            <div class="home home1 text-center">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>men fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} class="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="home home2 text-center">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>welcome to fashion</h4>
                                                    <h1>women fashion</h1>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} class="btn btn-solid">shop now</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>
                {/*Home Section End*/}

                {/*collection banner*/}
                <section class="pb-0">
                    <div class="container">
                        <div class="row partition2">
                            <div class="col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
                                    <div class="collection-banner p-right text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner1.jpg`} class="img-fluid" alt=""/>
                                            <div class="contain-banner">
                                                <div>
                                                    <h4>save 30%</h4>
                                                    <h2>men</h2>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}>
                                    <div class="collection-banner p-right text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`} class="img-fluid" alt=""/>
                                            <div class="contain-banner">
                                                <div>
                                                    <h4>save 60%</h4>
                                                    <h2>women</h2>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*collection banner end*/}

                <TopCollection type={'women'} />

                {/*Parallax banner*/}
                <section class="p-0">
                    <div class="full-banner parallax-banner1 parallax text-center p-left">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="banner-contain">
                                        <h2>2018</h2>
                                        <h3>fashion trends</h3>
                                        <h4>special offer</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Parallax banner End*/}

                <SpecialProducts />

                {/*service layout*/}
                <div class="container">
                    <section class="service border-section small-section ">
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
                    </section>
                </div>
                {/*Blog Section end*/}
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="title1 section-t-space">
                                <h4>Recent Story</h4>
                                <h2 class="title-inner1">from the blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="blog p-t-0">
                    <BlogSection />
                </section>
                {/*Blog Section End*/}

                <Instagram />

                {/*logo section*/}
                <LogoBlock />
                {/*logo section end*/}



			</div>
			)


	}
}

export default Fashion;