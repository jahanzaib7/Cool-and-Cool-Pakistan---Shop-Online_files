import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {connect} from "react-redux";
import {getTrendingTagCollection} from "../../../services";

import SideImageItem from "../common/side-image-item"

class Trending extends Component {

    render (){
            const {titan, reebok, rolex, unisex, symbol} = this.props;
        return (
            <div>
                {/*Paragraph*/}
                <section class="p-0">
                    <div class="tab-bg">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col">
                                    <div class="title4">
                                        <h2 class="title-inner4">trending products</h2>
                                        <div class="line"><span></span></div>
                                    </div>
                                    <Tabs class="theme-tab">
                                        <TabList  class="tabs tab-title">
                                            <Tab>UNISEX WATCHES</Tab>
                                            <Tab>TITANIUM WATCHES</Tab>
                                            <Tab>REEBOK WATCHES</Tab>
                                            <Tab>ROLEX WATCHES</Tab>
                                        </TabList>
                                        <div class="tab-content-cls">
                                            <TabPanel class="tab-content">
                                                <div class="row product-tab">
                                                    {unisex.map((item, i) =>
                                                        <div class="tab-box" key={i}>
                                                            <SideImageItem product={item} symbol={symbol}  />
                                                        </div>
                                                    )}
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="tab-content">
                                                <div class="row product-tab">
                                                    {titan.map((item, i) =>
                                                        <div class="tab-box" key={i}>
                                                            <SideImageItem product={item} symbol={symbol}  />
                                                        </div>
                                                    )}
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="tab-content">
                                                <div class="row product-tab">
                                                    {reebok.map((item, i) =>
                                                        <div class="tab-box" key={i}>
                                                            <SideImageItem product={item} symbol={symbol}  />
                                                        </div>
                                                    )}
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="tab-content">
                                                <div class="row product-tab">
                                                    {rolex.map((item, i) =>
                                                        <div class="tab-box" key={i}>
                                                            <SideImageItem product={item} symbol={symbol}  />
                                                        </div>
                                                    )}
                                                </div>
                                            </TabPanel>
                                        </div>
                                    </Tabs>
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
    titan: getTrendingTagCollection(state.data.products, ownProps.type, 'titan'),
    reebok: getTrendingTagCollection(state.data.products, ownProps.type, 'reebok'),
    rolex: getTrendingTagCollection(state.data.products, ownProps.type, 'rolex'),
    unisex: getTrendingTagCollection(state.data.products, ownProps.type, 'unisex'),
    symbol: state.data.symbol
})
export default connect(mapStateToProps) (Trending);