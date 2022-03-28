import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';


class ProductStyleFive extends Component {

    constructor(props){
        super(props)

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onClickHandle(img) {
        this.setState({ image : img} );
    }

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
        const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
        const {open} = this.state;

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
                                this.state.image?this.state.image:product.variants[0].images
                                :product.pictures[0]}
                            class="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div class="back">
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img
                            src={
                                product.variants?
                                    this.state.image?this.state.image:product.variants[0].images
                                    :product.pictures[0]
                            }
                            class="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div class="cart-box">
                        <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        </button>
                        <a href="javascript:void(0)" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)" data-toggle="modal"
                           data-target="#quick-view"
                           title="Quick View"
                           onClick={this.onOpenModal} ><i class="fa fa-search" aria-hidden="true"></i></a>
                        <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>
                            <i class="fa fa-refresh" aria-hidden="true"></i></Link>
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
                        {product.variants?
                        <ul class="color-variant">
                            {product.variants.map((vari, i) => {
                                return (
                                    <li class={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                            })}
                        </ul>:''}
                    </div>
                </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content quick-view-modal">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-lg-6  col-xs-12">
                                        <div class="quick-view-img">
                                            <img src={product.variants?
                                                this.state.image?this.state.image:product.variants[0].images
                                                :product.pictures[0]} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6 rtl-text">
                                        <div class="product-right">
                                            <h2> {product.name} </h2>
                                            <h3>{symbol}{product.price-(product.price*product.discount/100)}
                                                <del><span class="money">{symbol}{product.price}</span></del>
                                            </h3>
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
            </div>
        )
    }
}

export default ProductStyleFive;