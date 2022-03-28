import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "./common/filter";
import FilterBar from "./common/filter-bar";
import ProductListing from "./common/product-listing";
import StickyBox from "react-sticky-box";
import { connect } from 'react-redux';
import {getTopCollection,getCategory} from '../../services';
import { filterBrand } from '../../actions'



class CollectionRightSidebar extends Component {

    state = {
        layoutColumns:3
    }
    componentDidMount() {

        var categories = [];
       
        categories.push(this.props.match.params.id);
        this.props.filterBrand(categories);
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color18.css` );
    }

    LayoutViewClicked(colums) {
        this.setState({
            layoutColumns:colums
        })
    }

    openFilter = () => {
        
        document.querySelector(".collection-filter").style = "left: -15px";
    }
    
    render (){
        const {category,catDetails} = this.props;
        
   
        return (
            
            <div >
{/* 
                <Breadcrumb title={'Collection'}/> */}

                <section class="section-b-space section-b-space j-box pets-box ratio_square " style={{paddingTop:'40px'}}>
                    <div class="collection-wrapper">
                        <div class="container">
                            <div class="row">
                            <div class="col-sm-12">
                                                    <div class="top-banner-wrapper">
                                                     
                                                        <div class="top-banner-content small-section">
                                                            <div class="title1 title5">
                                                                <h2 class="title-inner1" style={{letterSpacing:'5px', fontSize:'20px'}}>{category}</h2>
                                                                <hr role="tournament6" />
                                                                
                                                            </div>
                                                            {/* <div class="row align-items-center">
                                                                
                                                            </div>
                                                           */}
                                                             <div class="row justify-content-center">
                                                      
                                                                <div class="col-8">
                                                                {/* <p class="text-center">{catDetails[0].Description}</p> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                <div class="collection-content col">
                                    <div class="page-main-content">
                                        <div class="">
                                            <div class="row">
                                           
                                                <div class="col-sm-12">
                                                  
                                                    <div class="collection-product-wrapper">
                                                        <div class="product-top-filter">
                                                            <div class="container-fluid p-0">
                                                                <div class="row">
                                                                    <div class="col-xl-12">
                                                                        <div class="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                class="filter-btn btn btn-theme"><i
                                                                                class="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-12">
                                                                        <FilterBar onLayoutViewClicked={(colmuns) => this.LayoutViewClicked(colmuns)}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                
                                                        <ProductListing category={this.props.category} colSize={this.state.layoutColumns}/>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-3 collection-filter">

                                    <StickyBox offsetTop={20} offsetBottom={20}>
                                        <div>
                                            <Filter {...this}/>
                                            <NewProduct/>
                                        
                                        </div>
                                    </StickyBox>
                                    {/*side-bar banner end here*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
    category:ownProps.match.params.id,
    topproducts: getTopCollection(state.data.products),
    symbol: state.data.symbol,
    catDetails:getCategory(state.data.menu,ownProps.match.params.id)
}
}

export default connect(
    mapStateToProps,{filterBrand})(CollectionRightSidebar)

