import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

import {Slider3} from "../../../services/script"

class BlogSection extends Component {
    render (){

        return (
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <Slider {...Slider3} class="slide-3 no-arrow ">
                                <div>
                                    <div class="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div class="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} class="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr class="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div class="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} class="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr class="style1"/>
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div class="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`} class="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr class="style1"/>
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="col-md-12">
                                    <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                        <div class="classic-effect">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`} class="img-fluid" alt="" />
                                                <span></span>
                                        </div>
                                    </Link>
                                    <div class="blog-details">
                                        <h4>25 January 2018</h4>
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                        <hr class="style1"/>
                                            <h6>by: John Dio , 2 Comment</h6>
                                    </div>
                                </div>
                                </div>
                                <div>
                                    <div class="col-md-12">
                                        <Link to={`${process.env.PUBLIC_URL}/blog/details`} >
                                            <div class="classic-effect">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} class="img-fluid" alt="" />
                                                    <span></span>
                                            </div>
                                        </Link>
                                        <div class="blog-details">
                                            <h4>25 January 2018</h4>
                                            <Link to={`${process.env.PUBLIC_URL}/blog/details`} ><p>Lorem ipsum dolor sit consectetur adipiscing elit, </p></Link>
                                            <hr class="style1" />
                                                <h6>by: John Dio , 2 Comment</h6>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
        )
    }
}

export default BlogSection;