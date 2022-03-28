import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import {connect} from "react-redux";



import {getRelatedItems} from "../../../services";


class ProductItem extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            cartModalopen:false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onClickHandle(img) {
        this.setState({ image : img} );
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    onOpenCartModal = () => {
        this.setState({ cartModalopen: true });
        this.props.onAddToCartClicked();
    };
    onCloseCartModal = () => {
        this.setState({ cartModalopen: false });
    };

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.product.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render() {
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked, relatedItems} = this.props;


        let RatingStars = []
        for(var i = 0; i < product.rating; i++) {
            RatingStars.push(<i class="fa fa-star" key={i}></i>)
        }
        return (
            <div>
                <div class="product-box">
                    <div class="img-wrapper">
                        <div class="lable-block">
                            {(product.new == true)? <span class="lable3">new</span> : ''}
                            {(product.sale == true)? <span class="lable4">on sale</span> : ''}

                        </div>
                        <div class="front">
                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} >
                                <img src={`${
                                    product.variants?
                                        this.state.image?this.state.image:product.variants[0].images
                                        :product.pictures[0]
                                    }`}
                                class="img-fluid lazyload bg-img"
                                alt="" />
                            </Link>
                        </div>
                        <div class="cart-info cart-wrap">
                            <button title="Add to cart" onClick={() => this.onOpenCartModal()}>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            </button>
                            <a href="javascript:void(0)" title="Add to Wishlist" onClick={onAddToWishlistClicked}>
                                <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="javascript:void(0)" data-toggle="modal"
                               data-target="#quick-view"
                               title="Quick View"
                               onClick={this.onOpenModal}><i class="fa fa-search" aria-hidden="true"></i></a>
                            <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>
                                <i class="fa fa-refresh" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                    <div class="product-detail ">
                        <div>
                            <div class="rating">
                                {RatingStars}
                            </div>
                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                                <h6>{product.name}</h6>
                            </Link>
                            <h4>{symbol}{product.price-(product.price*product.discount/100)}
                                <del><span class="money">{symbol}{product.price}</span></del>
                            </h4>
                        </div>
                    </div>

                    {/*Quick-view modal popup Start*/}
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content quick-view-modal">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6  col-xs-12">
                                            <div class="quick-view-img">
                                                <img src={`${
                                                    product.variants?
                                                        this.state.image?this.state.image:product.variants[0].images
                                                        :product.pictures[0]
                                                    }`} alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 rtl-text">
                                            <div class="product-right">
                                                <h2> {product.name} </h2>
                                                <h3>{symbol}{product.price}</h3>
                                                {product.variants?
                                                <ul class="color-variant">
                                                    {product.variants.map((vari, i) =>
                                                        <li class={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                                    }
                                                </ul>:''}
                                                <div class="border-product">
                                                    <h6 class="product-title">product details</h6>
                                                    <p>{product.shortDetails}</p>
                                                </div>
                                                <div class="product-description border-product">
                                                    {product.size?
                                                    <div class="size-box">
                                                        <ul>
                                                            {product.size.map((size, i) => {
                                                                return <li key={i}><a href="#">{size}</a></li>
                                                            })}
                                                        </ul>
                                                    </div>:''}
                                                    <h6 class="product-title">quantity</h6>
                                                    <div class="qty-box">
                                                        <div class="input-group">
                                                                  <span class="input-group-prepend">
                                                                    <button type="button" class="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                                                     <i class="fa fa-angle-left"></i>
                                                                    </button>
                                                                  </span>
                                                            <input type="text" name="quantity" value={this.state.quantity}  onChange={this.changeQty} class="form-control input-number" />
                                                            <span class="input-group-prepend">
                                                                    <button type="button" class="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                                                    <i class="fa fa-angle-right"></i>
                                                                    </button>
                                                                   </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-buttons">
                                                    <button  class="btn btn-solid" onClick={() => onAddToCartClicked(product, this.state.quantity)} >add to cart</button>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} class="btn btn-solid">view detail</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    {/*Quick-view modal popup End*/}

                    {/* Add to cart modal popup start */}
                    <Modal open={this.state.cartModalopen} onClose={this.onCloseCartModal} center class="cart-modal">
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body modal1">
                                    <div class="container-fluid p-0">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="modal-bg addtocart">
                                                    <div class="media">
                                                        <a href="#">
                                                            <img src={`${
                                                                product.variants?
                                                                    this.state.image?this.state.image:product.variants[0].images
                                                                    :product.pictures[0]
                                                                }`} alt="" class="img-fluid blur-up lazyload pro-img" />
                                                        </a>
                                                        <div class="media-body align-self-center text-center">
                                                            <a href="#">
                                                                <h6>
                                                                    <i class="fa fa-check"></i>Item
                                                                    <span>{product.name}</span>
                                                                    <span> successfully added to your Cart</span>
                                                                </h6>
                                                            </a>
                                                            <div class="buttons">
                                                                <a href="#" class="view-cart btn btn-solid">Your
                                                                    cart</a>
                                                                <a href="#" class="checkout btn btn-solid">Check
                                                                    out</a>
                                                                <a href="#" class="continue btn btn-solid">Continue
                                                                    shopping</a>
                                                            </div>

                                                            <div class="upsell_payment">
                                                                <img src="assets/images/payments.png"
                                                                     class="img-fluid blur-up lazyload" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product-section">
                                                        <div class="col-12 product-upsell text-center">
                                                            <h4>Customers who bought this item also.</h4>
                                                        </div>
                                                        <div class="row" id="upsell_product">
                                                            {relatedItems.map((item,i) =>
                                                                <div class="product-box col-sm-3 col-6" key={i}>
                                                                    <div class="img-wrapper">
                                                                        <div class="front">
                                                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`} >
                                                                                <img src={`${
                                                                                    item.variants?
                                                                                        item.variants[0].images
                                                                                        :item.pictures[0]
                                                                                    }`} alt="" class="img-fluid blur-up lazyload mb-1" />
                                                                            </Link>
                                                                        </div>
                                                                        <div class="product-detail">
                                                                            <h6><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`} >
                                                                                    <span>{item.name}</span>
                                                                            </Link></h6>
                                                                            <h4><span>{symbol}{item.price}</span></h4>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    {/*Add to cart modal popup End*/}


                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    relatedItems: getRelatedItems(state.data.products, ownProps.product.category),
    symbol: state.data.symbol
})

export default connect(mapStateToProps) (ProductItem);