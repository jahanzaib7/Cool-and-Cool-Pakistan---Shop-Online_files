import React, {Component} from 'react';
import Slider from "react-slick"
import {connect} from "react-redux";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import ProductMultiSlider from "./common/product-multi-slider"
import {
    getBestSellerProducts,
    getNewProducts,
    getVisibleproducts
} from "../../../services";
import {addToCart, addToCompare, addToWishlist} from "../../../actions";
import ProductStyleTwo from "./common/product-style-two";


class ElementMultipleSlider extends Component {


    render (){
        const {newProducts, featureProducts, bestSeller, onSell, newWatches, bestSellerWatches, symbol} = this.props;

        return (
            <div>
                <Breadcrumb parent={'Elements'} title={'product Slider'}/>

                <section class="">
                    <div class="container">
                        <div class="row multiple-slider">
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">new products</h5>
                                    <ProductMultiSlider items={newProducts} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">feature products</h5>
                                    <ProductMultiSlider items={featureProducts} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">best seller</h5>
                                    <ProductMultiSlider items={bestSeller} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">on Sell</h5>
                                    <ProductMultiSlider items={onSell} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ratio_square section-b-space">
                    <div class="container">
                        <div class="row partition3 partition_3">
                            <div class="col-lg-4">
                                <div class="theme-card card-border">
                                    <h5 class="title-border">new product</h5>
                                    <ProductMultiSlider items={newWatches} NoOfProducts={4} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-4 center-slider border-0">
                                <div>
                                    <div class="title2">
                                        <h4>on sale</h4>
                                        <h2 class="title-inner2">season sale</h2>
                                        <Slider class="offer-slider slide-1">
                                            { newWatches.slice(2, 5).map((product, index) =>
                                                <div key={index}>
                                                    <ProductStyleTwo product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => addToWishlist(product)}
                                                         onAddToCartClicked={addToCart} key={index}/>
                                                </div>)}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="theme-card card-border">
                                    <h5 class="title-border">feature product</h5>
                                    <ProductMultiSlider items={bestSellerWatches} NoOfProducts={4} symbol={symbol} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    newProducts: getVisibleproducts(state.data, state.filters),
    featureProducts: getVisibleproducts(state.data, state.filters),
    bestSeller: getVisibleproducts(state.data, state.filters),
    onSell: getVisibleproducts(state.data, state.filters),
    newWatches:getNewProducts(state.data.products, 'watch'),
    bestSellerWatches:getBestSellerProducts(state.data.products, 'watch'),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {addToCart, addToWishlist, addToCompare}
)(ElementMultipleSlider)