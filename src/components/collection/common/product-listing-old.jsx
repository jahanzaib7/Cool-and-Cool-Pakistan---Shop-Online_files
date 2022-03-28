import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import ReactPaginate from 'react-paginate';
import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare,changeCountry,changeCurrency } from '../../../actions'
import {getVisibleproducts} from '../../../services';
import ProductListItem from "./product-list-item";
import {getTopCollection} from '../../../services';

class ProductListing extends Component {

    constructor (props) {
        super (props)

        this.state = { limit: 20,
                     hasMoreItems: true,
                    offset: 0,
                    data:[]};

    }

    componentWillMount(){
        this.setState({
            pageCount: Math.ceil(this.props.products.length / this.state.limit),
            data: this.props.products.slice(0, this.state.limit),
          });
    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.category !== this.props.category) {
            window.location.reload(false);
          }
    }
 

    fetchMoreItems = (data) => {
     
        var  selected = data.selected ;
        let offset = Math.ceil(selected * this.state.limit);

        this.setState({ offset: offset });
          this.setState({ 
            data: this.props.products.slice(offset, offset+this.state.limit),
        });



    }

    render (){
        const {products, addToCart, symbol, addToWishlist, addToCompare} = this.props;
        const{data} = this.state;
    
        return (
            <div>
                <div class="product-wrapper-grid">
                    <div class="container-fluid">
                        {products.length > 0 ?
                            <div>
                                <div class="row">
                                    { data.map((product, index) =>
                                        <div class={`${this.props.colSize===3?'col-xl-3 col-md-6 col-grid-box cat-product':'col-lg-'+this.props.colSize}`} key={index}>
                                        <ProductListItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => addToWishlist(product)}
                                                         onAddToCartClicked={addToCart} key={index}/>
                                        </div>)
                                    }
                                   
                                </div>
                                <div class="row d-flex justify-content-center mt-4">
                                           <ReactPaginate
                                           previousclass={'page-link dis page-a'}
                                           nextclass={'page-link nex '}
                                           nextLinkclass={'page-a'}
                                           previousLinkclass={'page-a'}
                                           pageLinkclass={'page-a'}
                                            previousLabel={'previous'}
                                            nextLabel={'next'}
                                            breakLabel={'...'}
                                            breakclass={'break-me'}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.fetchMoreItems}
                                            containerclass={'pagination'}
                                            pageclass={'page-link'}
                                            activeclass={'actives'}
                                            />
                                </div>
                            </div>
                            :
                            <div class="row">
                                <div class="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} class="img-fluid mb-4" />
                                    <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>
                                    <p>Please check if you have misspelt something or try searching with other words.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/`} class="btn btn-solid">continue shopping</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => ({
    products: getVisibleproducts(state.data, state.filters, ownProps.search),
    topproducts: getTopCollection(state.data.products),
    symbol: state.data.symbol,
    country:state.data.country
})

export default connect(
    mapStateToProps, {addToCart, addToWishlist, addToCompare}
)(ProductListing)