import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import { connect } from "react-redux";
// import { FiShoppingCart } from "react-icons/fi";
import "./proCard.css"
import pro from "../../../assets/images/pro.png"
import { FiHeart } from "react-icons/fi";
import { FaRandom } from "react-icons/fa";



import { getRelatedItems } from "../../../services";
import { toast } from 'react-toastify';


class ProductItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            cartModalopen: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }

    onClickHandle(img) {
        this.setState({ image: img });
    }
    onOpenModal = () => {
        if (window.innerWidth < 750) {
            this.setState({ open: false });
        } else { this.setState({ open: true }); }

    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    onOpenCartModal = () => {
        if (window.innerWidth < 750) {
            this.setState({ cartModalopen: false });
            this.props.onAddToCartClicked();
        } else {
            this.setState({ cartModalopen: true });
            this.props.onAddToCartClicked();
        }

    };
    onCloseCartModal = () => {
        this.setState({ cartModalopen: false });
    };

    minusQty = () => {
        if (this.state.quantity > 1) {
            this.setState({ stock: 'InStock' })
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    plusQty = () => {
        if (this.props.product.stock >= this.state.quantity) {
            this.setState({ quantity: this.state.quantity + 1 })
        } else {
            this.setState({ stock: 'Out of Stock !' })
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render() {
        const notify= ()=>
        // toast("Added wishlist");
        toast('Added wishlist', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            bodyClassName:'toastStyle',
            });
        const { product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked, relatedItems } = this.props;


        let RatingStars = []
        for (var i = 0; i < product.rating; i++) {
            RatingStars.push(<i class="fa fa-star" key={i}></i>)
        }
        return (
            <div>
                {/* <div class="product-box"> */}


        

<div class="card shadown" style={{margin:"10px"}} data-sku="sku9999">

<div style={{display:"flex", justifyContent:"space-between"}}>

	<button onClick={onAddToWishlistClicked} className="add-to-favorites"  type="button" form="favorites" data-plugin="toggle-class-target" data-target=".card" data-class="loved-it" data-flag="_parents">
		<span class="accessibility-text">Added To Favourites</span>
		{/* <svg class="icon-heart" xmlns="http://www.w3.org/2000/svg"> */}
			<FiHeart style={{fontSize:20}}/>		
            {/* \</svg> */}
	</button>
  
	<button onClick={onAddToCompareClicked} className="add-to-favorites" type="button" form="favorites" data-plugin="toggle-class-target" data-target=".card" data-class="loved-it" data-flag="_parents">
		<span class="accessibility-text">Compare Items</span>
		{/* <svg class="icon-heart" xmlns="http://www.w3.org/2000/svg"> */}
			<FaRandom style={{fontSize:20}}/>		
            {/* \</svg> */}
	</button>

    </div>




	<a class="product-link img" href="#">
		<div class="holder-product-img">		
        <Link to={`${process.env.PUBLIC_URL}/product/product/${product.id}`} >


			<img class="product-img loaded" src={`${product.pictures}`}

					 alt="Product Images"
					//  loading="lazy" 
					//  onload="this.classList.add('loaded');"
			/>
</Link>

		</div>
	</a>
	<h3 class="product-title">
		<a class="product-link title" href="#">
        <Link to={`${process.env.PUBLIC_URL}/product/product/${product.name}`}>
                                <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily:"Poppins" }}>{product.category}</h6>
                                <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily:"Poppins" }}>{product.name}</h6>
                            </Link>
		</a>
	</h3>
	<p class="product-price">

    {product.discount > 0 ?
                                <h4>{symbol}{product.price - (product.price * product.discount / 100)}
                                  <span class="of">
			<span class="accessibility-text">De</span>
	
                {symbol}{product.price}</span>

                                </h4> :
                                <h4>
                             <span class="by">
                             <span class="accessibility-text">por</span>
                         {symbol}{product.price}
                         </span>  </h4>}


		{/* <span class="of">
			<span class="accessibility-text">De</span>R$ 2.813,99
		</span>
		<span class="by">
			<span class="accessibility-text">por</span>R$ 2.599,00
		</span> */}
		{/* <span class="payment">
			em até <strong class="payment-type">10x de R$ 259,90</strong> sem juros
		</span> */}
		<button class="add-to-cart" onClick={() => this.onOpenCartModal()} type="button" form="cart" data-plugin="toggle-class-target" data-target=".card" data-class="added-to-cart" data-flag="_parents">
			<svg class="icon-check" xmlns="http://www.w3.org/2000/svg">
				<path d="M17 1L6 12L1 7"/>
			</svg>Add To Cart
		</button>

       

	</p>
</div>















                        {/* <div class="lable-block">
                            {(product.new == true)? <span class="lable3">new</span> : ''}
                            {(product.sale == true)? <span class="lable4">on sale</span> : ''}

                        </div> */}

                    {/* <div class="img-wrapper">
                        <div class="front" >
                            <Link to={`${process.env.PUBLIC_URL}/product/product/${product.id}`} >

                                <img src={`${product.pictures
                                    }`}
                                    class="img-fluid lazyload bg-img"
                                    alt=""

                                />
                            </Link>
                        </div>
                        <div class="cart-info cart-wrap">
                            <button title="Add to cart" onClick={() => this.onOpenCartModal()}>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            </button>
                            <a href="javascript:void(0)" title="Add to Wishlist"
                                class="hide-for-mob"
                                onClick={onAddToWishlistClicked}>
                                <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="javascript:void(0)" data-toggle="modal"
                                data-target="#quick-view"
                                title="Quick View"
                                class="hide-for-mob"
                                onClick={this.onOpenModal}><i class="fa fa-search" aria-hidden="true"></i></a>
                            <Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" class="hide-for-mob"
                                onClick={onAddToCompareClicked}>
                                <i class="fa fa-refresh" aria-hidden="true"></i></Link>
                        </div>
                    </div> */}












                    {/* <div class="product-detail " style={{ background: 'rgb(255 255 255 / 0%)' }}>
                        <div>
                           
                            <Link to={`${process.env.PUBLIC_URL}/product/product/${product.name}`}>
                                <h6 style={{ fontSize: '12px', letterSpacing: '0px' }}>{product.category}</h6>
                                <h6 style={{ fontSize: '12px', letterSpacing: '0px' }}>{product.name}</h6>
                            </Link>
                            {product.discount > 0 ?
                                <h4>{symbol}{product.price - (product.price * product.discount / 100)}
                                    <del><span class="money">{symbol}{product.price}</span></del>
                                </h4> :
                                <h4>{symbol}{product.price}
                                </h4>}

                        </div>
                    </div> */}



                    {/*Quick-view modal popup Start*/}
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content quick-view-modal">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-6  col-xs-12">
                                            <div class="quick-view-img">
                                                <img src={`${product.variants ?
                                                        this.state.image ? this.state.image : product.variants[0].images
                                                        : product.pictures[0]
                                                    }`} alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 rtl-text">
                                            <div class="product-right">
                                                <h2> {product.name} </h2>
                                                <h3>{symbol}{product.price}</h3>
                                                {product.variants ?
                                                    <ul class="color-variant">
                                                        {product.variants.map((vari, i) =>
                                                            <li class={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)
                                                        }
                                                    </ul> : ''}
                                                <div class="border-product">
                                                    <h6 class="product-title">product details</h6>
                                                    <p>{product.shortDetails}</p>
                                                </div>
                                                <div class="product-description border-product">
                                                    {product.size ?
                                                        <div class="size-box">
                                                            <ul>
                                                                {product.size.map((size, i) => {
                                                                    return <li key={i}><a href="#">{size}</a></li>
                                                                })}
                                                            </ul>
                                                        </div> : ''}
                                                    <h6 class="product-title">quantity</h6>
                                                    <div class="qty-box">
                                                        <div class="input-group">
                                                            <span class="input-group-prepend">
                                                                <button type="button" class="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                                                    <i class="fa fa-angle-left"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeQty} class="form-control input-number" />
                                                            <span class="input-group-prepend">
                                                                <button type="button" class="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                                                    <i class="fa fa-angle-right"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-buttons">
                                                    <button class="btn btn-solid" onClick={() => onAddToCartClicked(product, this.state.quantity)} >add to cart</button>
                                                    <Link to={`${process.env.PUBLIC_URL}/product/product/${product.id}`} class="btn btn-solid">view detail</Link>
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
                                                            <img src={`${product.variants ?
                                                                    this.state.image ? this.state.image : product.variants[0].images
                                                                    : product.pictures[0]
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
                                                                <Link to={'/cart'} class="view-cart btn btn-solid">Your
                                                                    cart</Link>
                                                                <Link to={'/checkout'} class="checkout btn btn-solid">Check
                                                                    out</Link>
                                                                <a href="#" class="continue btn btn-solid" onClick={this.onCloseCartModal}>Continue
                                                                    shopping</a>
                                                            </div>

                                                            <div class="upsell_payment">
                                                                <img src="assets/images/payment_cart.png"
                                                                    class="img-fluid blur-up lazyload" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="product-section">
                                                        <div class="col-12 product-upsell text-center">
                                                            <h4>Customers who bought this item also.</h4>
                                                        </div>
                                                        <div class="row" id="upsell_product">
                                                            {relatedItems.map((item, i) =>
                                                                <div class="product-box col-sm-3 col-6" key={i}>
                                                                    <div class="img-wrapper">
                                                                        <div class="front">
                                                                            <Link to={`${process.env.PUBLIC_URL}/product/product/${item.name}`} >
                                                                                <img src={`${item.variants ?
                                                                                        item.variants[0].images
                                                                                        : item.pictures[0]
                                                                                    }`} alt="" class="img-fluid mb-1" />
                                                                            </Link>
                                                                        </div>
                                                                        <div class="product-detail">
                                                                            <h6 style={{ fontSize: '12px', letterSpacing: '0px' }}><Link to={`${process.env.PUBLIC_URL}/product/product/${item.name}`} >
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


                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    relatedItems: getRelatedItems(state.data.products, ownProps.product.category, state.filters.country),
    symbol: state.data.symbol
})

export default connect(mapStateToProps)(ProductItem);


