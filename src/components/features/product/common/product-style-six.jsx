import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductStyleSix extends Component {

    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;

        let RatingStars = []
        for(var i = 0; i < product.rating; i++) {
            RatingStars.push(<i class="fa fa-star" key={i}></i>)
        }

        return (

            <div class="product-box product-wrap">
                <div class="img-wrapper">
                    <div class="lable-block">
                        {(product.new == true)? <span class="lable3">new</span> : ''}
                        {(product.sale == true)? <span class="lable4">on sale</span> : ''}
                    </div>
                    <div class="front">
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img
                            src={product.variants?
                                product.variants[0].images
                                :product.pictures[0]}
                            class="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div class="cart-info cart-wrap">
                        <a href="javascript:void(0)" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                            Add To Cart
                        </button>
                        <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>
                            <i class="fa fa-refresh" aria-hidden="true"></i></Link>
                        <a class="mobile-quick-view" href="javascript:void(0)" data-toggle="modal" data-target="#quick-view"
                           title="Quick View"><i class="fa fa-search" aria-hidden="true"></i></a>
                    </div>
                    <div class="quick-view-part">
                        <a href="javascript:void(0)" data-toggle="modal"
                           data-target="#quick-view"
                           title="Quick View"
                        ><i class="fa fa-search" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div class="product-detail  text-center">
                    <div>
                        <div class="rating">
                            {RatingStars}
                        </div>
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                            <h6>{product.name}</h6>
                        </Link>
                        <h4>{symbol}{product.price-(product.price*product.discount/100)}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductStyleSix;