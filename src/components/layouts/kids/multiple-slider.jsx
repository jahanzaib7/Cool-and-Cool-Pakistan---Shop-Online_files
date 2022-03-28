import React, {Component} from 'react';
import Slider from "react-slick"
import {connect} from "react-redux";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import MultiSliderItem from "./multi-slider-item"
import {
    getBestSellerProducts,
    getNewProducts,
} from "../../../services";


class MultipleSlider extends Component {


    render (){
        const {newProducts, featureProducts, bestSeller, onSell, symbol} = this.props;
        return (
            <div>
                <section class="">
                    <div class="container">
                        <div class="row multiple-slider">
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">new products</h5>
                                    <MultiSliderItem items={newProducts} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">feature products</h5>
                                    <MultiSliderItem items={featureProducts} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">best seller</h5>
                                    <MultiSliderItem items={bestSeller} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="theme-card">
                                    <h5 class="title-border">on Sell</h5>
                                    <MultiSliderItem items={onSell} NoOfProducts={3} symbol={symbol} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    newProducts: getNewProducts(state.data.products, ownProps.type),
    featureProducts: getNewProducts(state.data.products, ownProps.type).reverse(),
    bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
    onSell: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps
)(MultipleSlider)