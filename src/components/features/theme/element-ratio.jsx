import React, {Component} from 'react';
import Slider from "react-slick";

import Breadcrumb from "../../common/breadcrumb";
import {Product4} from "../../../services/script";

class ElementRatio extends Component {
    render() {
        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'Title'}/>

                <section class=" ratio_asos section-b-space">
                    <div class="title2">
                        <h2 class="title-inner2">Ratio ASOS</h2>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <Slider {...Product4} class="product-4 product-m no-arrow">
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html">
                                                    <img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/27.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="back">
                                                <a href="product-page(no-sidebar).html">
                                                    <img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/28.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button
                                                    data-toggle="modal"
                                                    data-target="#addtocart"
                                                    title="Add to cart">
                                                    <i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href="#"
                                                    data-toggle="modal"
                                                    data-target="#quick-view"
                                                    title="Quick View">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating"><i class="fa fa-star"></i> <i
                                                class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                                                class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul class="color-variant">
                                                <li class="bg-light0"></li>
                                                <li class="bg-light1"></li>
                                                <li class="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="lable-block"><span class="lable3">new</span> <span
                                                class="lable4">on sale</span></div>
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/1.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="back">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/2.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                                    <i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating"><i class="fa fa-star"></i> <i
                                                class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                                                class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul class="color-variant">
                                                <li class="bg-light0"></li>
                                                <li class="bg-light1"></li>
                                                <li class="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/33.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="back">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/34.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                                    <i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i class="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#"
                                                    data-toggle="modal"
                                                    data-target="#quick-view"
                                                    title="Quick View">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul class="color-variant">
                                                <li class="bg-light0"></li>
                                                <li class="bg-light1"></li>
                                                <li class="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="lable-block"><span class="lable3">new</span> <span
                                                class="lable4">on sale</span></div>
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/35.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="back">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/pro3/36.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart" title="Add to cart">
                                                    <i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist">
                                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                                </a>
                                                <a href="#"
                                                    data-toggle="modal"
                                                    data-target="#quick-view"
                                                    title="Quick View">
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </a>
                                                <a href="compare.html" title="Compare">
                                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                            <ul class="color-variant">
                                                <li class="bg-light0"></li>
                                                <li class="bg-light1"></li>
                                                <li class="bg-light2"></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ratio_square gym-product light-layout section-b-space">
                    <div class="title2">
                        <h2 class="title-inner2">Ratio Square</h2>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <Slider {...Product4} class="no-slider row">
                                    <div class="product-box ">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/1.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    class="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i class="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box ">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/2.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    class="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i class="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box ">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/3.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    class="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i class="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box ">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/gym/pro/4.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button data-toggle="modal" data-target="#addtocart"
                                                        title="Add to cart"><i class="fa fa-shopping-cart"></i>
                                                </button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i
                                                    class="fa fa-heart" aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view"
                                                   title="Quick View"><i class="fa fa-search"
                                                                         aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ratio_portrait metro-section portfolio-section section-b-space">
                    <div class="title2">
                        <h2 class="title-inner2">Ratio Portrait</h2>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <Slider {...Product4} class="product-4 product-m no-arrow">
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/1.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button title="Add to cart"><i class="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/2.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button title="Add to cart"><i class="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/3.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button title="Add to cart"><i class="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img
                                                    src={`${process.env.PUBLIC_URL}/assets/images/fashion/pro/4.jpg`}
                                                    class="img-fluid blur-up lazyload bg-img" alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <button title="Add to cart"><i class="fa fa-shopping-cart"></i></button>
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <a href="product-page(no-sidebar).html">
                                                <h6>Slim Fit Cotton Shirt</h6>
                                            </a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="ratio_landscape game-product light-layout section-b-space">
                    <div class="title2">
                        <h2 class="title-inner2">Ratio Landscape</h2>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <Slider {...Product4} class="product-4 product-m no-arrow">
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/11.jpg`}
                                                                                             class="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div class="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="lable-block">
                                                <span class="lable3">new</span>
                                                <span class="lable4">on sale</span>
                                            </div>
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/12.jpg`}
                                                                                             class="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div class="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00 <del>$600.00</del></h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/13.jpg`}
                                                                                             class="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div class="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                            <div class="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="lable-block">
                                                <span class="lable3">new</span>
                                                <span class="lable4">on sale</span>
                                            </div>
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/14.jpg`}
                                                                                             class="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div class="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                    <div class="product-box">
                                        <div class="img-wrapper">
                                            <div class="lable-block">
                                                <span class="lable3">new</span>
                                                <span class="lable4">on sale</span>
                                            </div>
                                            <div class="front">
                                                <a href="product-page(no-sidebar).html"><img src={`${process.env.PUBLIC_URL}/assets/images/game/pro/15.jpg`}
                                                                                             class="bg-img img-fluid blur-up lazyload"
                                                                                             alt="" /></a>
                                            </div>
                                            <div class="cart-info cart-wrap">
                                                <a href="javascript:void(0)" title="Add to Wishlist"><i class="fa fa-heart"
                                                                                                        aria-hidden="true"></i></a>
                                                <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                                                    class="fa fa-search" aria-hidden="true"></i></a>
                                                <a href="compare.html" title="Compare"><i class="fa fa-refresh"
                                                                                          aria-hidden="true"></i></a>
                                            </div>
                                            <div class="add-button" data-toggle="modal" data-target="#addtocart">add to
                                                cart
                                            </div>
                                        </div>
                                        <div class="product-detail">
                                            <div class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <a href="product-page(no-sidebar).html"><h6>Slim Fit Cotton Shirt</h6></a>
                                            <h4>$500.00</h4>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section class="section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <h5 class="card-header">Ratio Classes</h5>
                                    <div class="card-body">
                                        <h5>If you use image as background than add class ".bg-img" in image and add below class
                                            in parent.</h5>
                                        <h5>.ratio_40 - 40%</h5>
                                        <h5>.ratio_45 - 45%</h5>
                                        <h5>.ratio2_1 - 50%</h5>
                                        <h5>.ratio2_3 - 60%</h5>
                                        <h5>.ratio3_2 - 66.66%</h5>
                                        <h5>.ratio_landscape - 75%</h5>
                                        <h5>.ratio_square - 100%</h5>
                                        <h5>.ratio_asos - 127.77%</h5>
                                        <h5>.ratio_portrait - 150%</h5>
                                        <h5>.ratio1_2 - 200%</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
            </div>
        )
    }
}


export default ElementRatio;