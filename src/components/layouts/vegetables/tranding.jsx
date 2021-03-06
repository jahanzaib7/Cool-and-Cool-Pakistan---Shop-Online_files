import React, { Component } from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import {getTopCollection, getTrendingCollection} from '../../../services'
import {Product4} from '../../../services/script'
import {
    addToCart,
    addToWishlist,
    addToCompare,
    incrementQty,
    decrementQty,
    removeFromCart
} from "../../../actions";
import ProductItem from '../common/special-product-item';

class Tranding extends Component {

    render (){

        const {items, symbol, addToCart, addToWishlist, addToCompare, incrementQty, decrementQty, removeFromCart, type} = this.props;

        return (
            <div>
                {/*Paragraph*/}
                <section class="section-b-space addtocart_count ratio_square">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="title4">
                                    <h2 class="title-inner4">trending products</h2>
                                    <div class="line"><span></span></div>
                                </div>
                                <Slider {...Product4} class="product-4 product-m no-arrow">
                                    { items.map((product, index ) =>
                                        <div key={index}>
                                            <ProductItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => addToWishlist(product)}
                                                         onAddToCartClicked={() => addToCart(product, 1)}
                                                         onIncrementClicked={() => incrementQty(product, 1)}
                                                         onDecrementClicked={() => decrementQty(product.id)}
                                                         onRemoveFromCart={() => removeFromCart(product)}
                                                         key={index} />
                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    items: getTrendingCollection(state.data.products, ownProps.type),
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
    }) (Tranding);