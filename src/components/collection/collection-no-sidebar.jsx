import React, {Component} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';

// import custom Components
import ProductListing from './common/product-listing'
import Breadcrumb from "../common/breadcrumb";
import FilterBar from "./common/filter-bar";


class CollectionNoSideBar extends Component {

    state = {
        layoutColumns:3
    }

    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }

    render(){
        return (
            <div>
                <Breadcrumb title={'Collection'} />

                {/*Section Start*/}
                <section class="section-b-space">
                    <div class="collection-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="collection-content col">
                                    <div class="page-main-content">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="top-banner-wrapper">
                                                        <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`}
                                                                         class="img-fluid" alt=""/></a>
                                                        <div class="top-banner-content small-section">
                                                            <h4>fashion</h4>
                                                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                                        </div>
                                                    </div>
                                                    <div class="collection-product-wrapper">
                                                        <div class="product-top-filter">
                                                            <div class="container-fluid p-0">
                                                                <div class="row">
                                                                    <div class="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="product-wrapper-grid">
                                                            <div class="container-fluid">
                                                                <div class="row">
                                                                    <ProductListing colSize={this.state.layoutColumns}/>
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
                        </div>
                    </div>
                </section>
                {/*Section End*/}

            </div>
        )
    }
}

export default CollectionNoSideBar;