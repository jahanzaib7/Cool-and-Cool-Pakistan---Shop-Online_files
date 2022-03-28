import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'

import {getBestSeller, getMensWear, getWomensWear} from '../../../services/index'
import {addToCart, addToWishlist, addToCompare} from "../../../actions/index";
import ProductItem from './product-item';

class SpecialProducts extends Component {
    render (){

        const {bestSeller,mensWear,womensWear, symbol, addToCart, addToWishlist, addToCompare} = this.props
        return (
            <div>
                <div class="title1 section-t-space">
                    <h4>exclusive products</h4>
                    <h2 class="title-inner1">special products</h2>
                </div>
                <section class="section-b-space p-t-0">
                    <div class="container">
                        <Tabs class="theme-tab">
                            <TabList class="tabs tab-title">
                                <Tab>New Products</Tab>
                                <Tab>Mens Wear</Tab>
                                <Tab>Womens Wear</Tab>
                            </TabList>

                            <TabPanel>
                                <div class="no-slider row">
                                    { bestSeller.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class="no-slider row">
                                    { mensWear.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div class=" no-slider row">
                                    { womensWear.map((product, index ) =>
                                        <ProductItem product={product} symbol={symbol}
                                                     onAddToCompareClicked={() => addToCompare(product)}
                                                     onAddToWishlistClicked={() => addToWishlist(product)}
                                                     onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bestSeller: getBestSeller(state.data.products),
    mensWear: getMensWear(state.data.products),
    womensWear: getWomensWear(state.data.products),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (SpecialProducts);