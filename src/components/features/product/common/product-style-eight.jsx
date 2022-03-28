import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductStyleEight extends Component {

    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;

        return (

            <div class="product-box">
                <div class="img-wrapper">
                    <div class="front">
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img
                            src={product.variants?
                                product.variants[0].images
                                :product.pictures[0]}
                            class="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div class="cart-info cart-wrap">
                        <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                        <a href="javascript:void(0)" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)" data-toggle="modal"
                           data-target="#quick-view"
                           title="Quick View">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </a>
                        <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>
                            <i class="fa fa-refresh" aria-hidden="true"></i></Link>
                    </div>
                </div>
                <div class="product-detail">
                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                        <h6>{product.name}</h6>
                    </Link>
                    <h4>{symbol}{product.price-(product.price*product.discount/100)}</h4>
                </div>
            </div>
        )
    }
}

export default ProductStyleEight;