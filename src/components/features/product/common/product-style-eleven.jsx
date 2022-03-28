import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductStyleEleven extends Component {

    constructor(props){
        super(props)

        this.state = {
            image: ''
        }
    }

    onClickHandle(img) {
        this.setState({ image : img} );
    }


    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;

        let RatingStars = []
        for(var i = 0; i < product.rating; i++) {
            RatingStars.push(<i class="fa fa-star" key={i}></i>)
        }

        return (

            <div class="product-box">
                <div class="img-wrapper">
                    <div class="front">
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} >
                            <img src={`${
                                product.variants?
                                    this.state.image?this.state.image:product.variants[0].images
                                    :product.pictures[0]
                                }`}
                            class="img-fluid"
                            alt="" />
                        </Link>
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

export default ProductStyleEleven;