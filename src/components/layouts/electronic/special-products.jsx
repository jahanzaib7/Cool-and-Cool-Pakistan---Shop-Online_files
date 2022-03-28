import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from 'react-redux'

import {getBestSeller, getBestSellerProducts, getMensWear, getNewProducts, getWomensWear} from '../../../services/index'
import {addToCart, addToWishlist, addToCompare} from "../../../actions/index";
import ProductItem from './product-item';

class SpecialProducts extends Component {
    render (){

        const {bestSeller,newProducts, featuredProducts, symbol, addToCart, addToWishlist, addToCompare} = this.props

        return (
                <section class="section-b-space ratio_square">
                    <div class="container-fluid">
                        <div class="title2">
                            <h4>new collection</h4>
                            <h2 class="title-inner2">trending products</h2>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="theme-tab layout7-product">
                                    <Tabs class="theme-tab">
                                        <TabList  class="tabs tab-title">
                                            <Tab>NEW ARRIVAL</Tab>
                                            <Tab>FEATURED </Tab>
                                            <Tab>SPECIAL</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div class="no-slider row">
                                                { newProducts.map((product, index ) =>
                                                    <ProductItem product={product} symbol={symbol}
                                                                 onAddToCompareClicked={() => addToCompare(product)}
                                                                 onAddToWishlistClicked={() => addToWishlist(product)}
                                                                 onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                                }
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div class="no-slider row">
                                                { featuredProducts.map((product, index ) =>
                                                    <ProductItem product={product} symbol={symbol}
                                                                 onAddToCompareClicked={() => addToCompare(product)}
                                                                 onAddToWishlistClicked={() => addToWishlist(product)}
                                                                 onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                                }
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div class=" no-slider row">
                                                { bestSeller.map((product, index ) =>
                                                    <ProductItem product={product} symbol={symbol}
                                                                 onAddToCompareClicked={() => addToCompare(product)}
                                                                 onAddToWishlistClicked={() => addToWishlist(product)}
                                                                 onAddToCartClicked={() => addToCart(product, 1)} key={index} /> )
                                                }
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    bestSeller: getBestSellerProducts(state.data.products, ownProps.type),
    newProducts: getNewProducts(state.data.products, ownProps.type),
    featuredProducts: getBestSellerProducts(state.data.products, ownProps.type).reverse(),
    symbol: state.data.symbol
})

export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (SpecialProducts);