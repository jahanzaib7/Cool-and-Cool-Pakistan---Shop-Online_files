import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ThemeSettings from "../../common/theme-settings"

// Import custom components
import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../../services/script"
import TopCollection from "../common/collection"
import NewProduct from "../../common/new-product"
import Instagram from "../common/instagram"
import HeaderOne from "../../common/headers/header-one"
import FooterOne from "../../common/footers/footer-one"
import BlogSection from "../common/blogsection";

class Beauty extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color3.css` );
    }

    render(){

        return (
            <div>
                <Helmet>
                    <title>MultiKart | Beauty Store</title>
                </Helmet>
                <HeaderOne logoName={'layout3/logo.png'}/>
                <section class="p-0">
                    <Slider class="slide-1 home-slider">
                        <div>
                            <div class="home home34">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>welcome to beauty</h4>
                                                    <h1>beauty products</h1><a href="#" class="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="home home35">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <div class="slider-contain">
                                                <div>
                                                    <h4>save 30% off</h4>
                                                    <h1>beauty products</h1><a href="#" class="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>


                {/*About Section*/}
                <section class="beauty-about">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-5 col-lg-6 col-md-12 offset-xl-1 text-center">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/about-us.jpg`} alt="" class="img-fluid blur-up lazyload" />
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-12">
                                <div class="about-section">
                                    <div>
                                        <h2>about us</h2>
                                        <div class="about-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam.sit voluptatem
                                                accusantium doloremque laudantium,totam rem aperiam.</p>
                                        </div>
                                        <div class="service small-section pb-0">
                                            <div class="row">
                                                <div class="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                                    <h5>free shipping</h5>
                                                </div>
                                                <div class="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                                    <h5>24 X 7 service</h5>
                                                </div>
                                                <div class="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                                    <h5>festival offer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Section End*/}

                {/*Product slider*/}
                <TopCollection type={'beauty'} />
                {/*Product slider End*/}

                {/*Video Section*/}
                <section class="video-section pt-0">
                    <div class="title1">
                        <h4>special offer</h4>
                        <h2 class="title-inner1">product tutorial</h2>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                <a href="javascript:void(0)" onClick={this.onOpenModal}>
                                    <div class="video-img">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/video_1.jpg`} alt="" class="img-fluid blur-up lazyload" />
                                        <div class="play-btn">
                                            <span><i class="fa fa-play" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </a>
                                <Modal
                                    open={this.state.open}
                                    onClose={this.onCloseModal}
                                    id="video"
                                    class="modal fade video-modal" center>
                                    <iframe src="https://www.youtube.com/embed/FRIDLxM8Roc"
                                            allowFullScreen></iframe>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Video Section End*/}

                {/*Product slider*/}
                <TopCollection type={'beauty'} />
                {/*Product slider End*/}

                {/*Blog Section*/}
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="title1">
                                <h4>Recent Story</h4>
                                <h2 class="title-inner1">from the blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="blog p-t-0 ratio3_2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <BlogSection />
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog Section end*/}


                {/*Instagram Section*/}
                <div class="section-b-space">
                    <Instagram type="watch" />
                </div>
                {/*Instagram Section End*/}

                <FooterOne logoName={'layout3/logo.png'}/>

                <ThemeSettings />
            </div>
        )
    }
}


export default Beauty;