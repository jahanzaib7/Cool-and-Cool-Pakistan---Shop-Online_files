import React, {Component} from 'react';
import NetflixLoader from './ImageGrid.jsx';


import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import $ from 'jquery';
import Pagination from "react-js-pagination";


import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare,changeCurrency } from '../../../actions'
import {getVisibleproducts,getProducts} from '../../../services';
import ProductListItem from "./product-list-item";
import {getTopCollection} from '../../../services';


class ProductListing extends Component {

    constructor (props) {
        super (props)

        this.state = {
            limit: 20,
            hasMoreItems: true, 
            activePage: 1,
            totalPages:this.props.products.length/20,
           };
    }

    componentWillMount(){

     
        this.fetchMoreItems();
    }


    
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    $('.product-wrapper-grid').hide();
    $( ".Loader" ).fadeIn( "slow", function() {       
        var body = $("html, body");
            body.stop().animate({scrollTop:$('.collection-product-wrapper').offset().top - 20 }, 500, 'swing', function() { 
                $( ".Loader" ).fadeOut( "slow", function() {
                    $( ".product-wrapper-grid" ).fadeIn( "slow", function() {
                        // Animation complete
                    });
                });
            });
      });
  
 





  }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.category !== this.props.category) {
            window.location.reload(false);
          }

    }

    fetchMoreItems = () => {
        if (this.state.limit >= this.props.products.length) {
            this.setState({ hasMoreItems: false });
            return;
        }
        // a fake async api call

            this.setState({
                limit: this.state.limit + 20
            });



    }

    render (){
        const {products, addToCart, symbol, addToWishlist, addToCompare} = this.props;
        const MyListLoader = () => <NetflixLoader />
        return (
            <div>
            <div  class="Loader" style={{marginLeft: '5%', display:'none'}}>
            <MyListLoader>
                
            </MyListLoader>
            </div>
                <div class="product-wrapper-grid" > 
                    <div class="container-fluid">
                        {products[this.state.activePage-1] !== undefined ?
                            <div class="row">
                                { products[this.state.activePage-1].map((product, index) =>
                                    <div class={`${this.props.colSize===3?'col-xl-3 col-md-6 col-grid-box cat-product':'col-lg-'+this.props.colSize}`} key={index}>
                                        <ProductListItem 
                                            product={product} symbol={symbol}
                                            onAddToCompareClicked={() => addToCompare(product)}
                                            onAddToWishlistClicked={() => addToWishlist(product)}
                                            onAddToCartClicked={addToCart} key={index}
                                        />
                                    </div>)
                                }
                            </div>
                            :
                            <div class="row">
                                <div class="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} class="img-fluid mb-4" />
                                    <h3>End Reached !</h3>
                                
                                    <Link to={`${process.env.PUBLIC_URL}/`} class="btn btn-solid">continue shopping</Link>
                                </div>
                            </div>
                        }
                              
                        

                        <div>
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.totalPages}
                                    totalItemsCount={products.length}
                                    pageRangeDisplayed={this.state.totalPages+1}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass="pagination justify-content-center"
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    products: getProducts(state.data, state.filters, ownProps.search),
    topproducts: getTopCollection(state.data.products),
    symbol: state.data.symbol,
    country:state.data.country
})

export default connect(
    mapStateToProps, {addToCart, addToWishlist, addToCompare}
)(ProductListing)