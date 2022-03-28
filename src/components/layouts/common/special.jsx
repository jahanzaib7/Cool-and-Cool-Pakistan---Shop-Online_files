import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import {getSingleItem, getSpecialCollection} from '../../../services/index'
import {
    addToCart,
    addToWishlist,
    addToCompare,
    incrementQty,
    decrementQty,
    removeFromCart
} from "../../../actions/index";
import ProductItem from './special-product-item';

class Special extends Component {

    render (){

        const {product, symbol, addToCart, addToWishlist, addToCompare, incrementQty, decrementQty, removeFromCart} = this.props;

        return (
            <div>
                {/*Paragraph*/}
                <section class="section-b-space addtocart_count">
                    <div class="full-box">
                        <div class="container">
                            <div class="title4">
                                <h2 class="title-inner4">special products</h2>
                                <div class="line"><span></span></div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="theme-card center-align">
                                        <div class="offer-slider">
                                            <div class="sec-1">
                                                <div class="product-box2">
                                                    <div class="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[0].id}`} >
                                                            <img
                                                                class="img-fluid blur-up lazyload"
                                                                src={product[0].pictures[0]} alt="" />
                                                        </Link>
                                                        <div class="media-body align-self-center">
                                                            <div class="rating"><i class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[0].id}`} >
                                                                <h6>{product[0].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[0].price-(product[0].price*product[0].discount/100)}
                                                                <del><span class="money">{symbol}{product[0].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box2">
                                                    <div class="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[1].id}`} >
                                                            <img
                                                                class="img-fluid blur-up lazyload"
                                                                src={product[1].pictures[0]} alt="" />
                                                        </Link>
                                                        <div class="media-body align-self-center">
                                                            <div class="rating"><i class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[1].id}`} >
                                                                <h6>{product[1].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[1].price-(product[1].price*product[1].discount/100)}
                                                                <del><span class="money">{symbol}{product[1].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 center-slider">
                                    <div>
                                        <div class="offer-slider">
                                            <div>
                                                <ProductItem product={product[2]} symbol={symbol}
                                                             onAddToCompareClicked={() => addToCompare(product[2])}
                                                             onAddToWishlistClicked={() => addToWishlist(product[2])}
                                                             onAddToCartClicked={() => addToCart(product[2], 1)}
                                                             onIncrementClicked={() => incrementQty(product[2], 1)}
                                                             onDecrementClicked={() => decrementQty(product[2].id)}
                                                             onRemoveFromCart={() => removeFromCart(product[2])}  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="theme-card center-align">
                                        <div class="offer-slider">
                                            <div class="sec-1">
                                                <div class="product-box2">
                                                    <div class="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[3].id}`} >
                                                            <img
                                                                class="img-fluid blur-up lazyload"
                                                                src={product[3].pictures[0]} alt="" />
                                                        </Link>
                                                        <div class="media-body align-self-center">
                                                            <div class="rating"><i class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[3].id}`} >
                                                                <h6>{product[3].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[3].price-(product[3].price*product[3].discount/100)}
                                                                <del><span class="money">{symbol}{product[3].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-box2">
                                                    <div class="media">
                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[4].id}`} >
                                                            <img
                                                                class="img-fluid blur-up lazyload"
                                                                src={product[4].pictures[0]} alt="" />
                                                        </Link>
                                                        <div class="media-body align-self-center">
                                                            <div class="rating"><i class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i> <i
                                                                class="fa fa-star"></i></div>
                                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product[4].id}`} >
                                                                <h6>{product[4].name}</h6>
                                                            </Link>
                                                            <h4>{symbol}{product[4].price-(product[4].price*product[4].discount/100)}
                                                                <del><span class="money">{symbol}{product[4].price}</span></del>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

const mapStateToProps = (state, Ownprops) => ({
    product: getSpecialCollection(state.data.products, Ownprops.type),
    symbol: state.data.symbol
})

export default connect(mapStateToProps,
    {
        addToCart,
        addToWishlist,
        addToCompare,
        incrementQty,
        decrementQty,
        removeFromCart
    }) (Special);