import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


import Breadcrumb from "../common/breadcrumb";
import {getCartTotal} from "../../services";
import {removeFromCart, incrementQty, decrementQty} from '../../actions'

class cartComponent extends Component {

    constructor (props) {
        super (props)
    }

    render (){
      
        const {cartItems, symbol, total} = this.props;

        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Woovista</title>
                 
                </Helmet>
                {/*SEO Support End */}

       

                {cartItems.length>0 ?
                <section class="cart-section section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr class="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">action</th>
                                        <th scope="col">total</th>
                                    </tr>
                                    </thead>
                                    {cartItems.map((item, index) => {
                                        return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                        <img src={item.variants?
                                                                  item.variants[0].images
                                                                  :item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>{item.name}</Link>
                                                    <div class="mobile-cart-content row">
                                                        <div class="col-xs-3">
                                                            <div class="qty-box">
                                                                <div class="input-group">
                                                                    <input type="text" name="quantity"
                                                                           class="form-control input-number" defaultValue={item.qty} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-3">
                                                            <h2 class="td-color">{symbol}{item.price-(item.price*item.discount/100)}</h2>
                                                        </div>
                                                        <div class="col-xs-3">
                                                            <h2 class="td-color">
                                                                <a href="#" class="icon" onClick={() => this.props.removeFromCart(item)}>
                                                                    <i class="icon-close"></i>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h2>{symbol}{item.price-(item.price*item.discount/100)}</h2></td>
                                                <td>
                                                    <div class="qty-box">
                                                        <div class="input-group">
                                                            <span class="input-group-prepend">
                                                                <button type="button" class="btn quantity-left-minus" onClick={() => this.props.decrementQty(item.id)} data-type="minus" data-field="">
                                                                 <i class="fa fa-angle-left"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.qty} readOnly={true} class="form-control input-number" />

                                                            <span class="input-group-prepend">
                                                            <button class="btn quantity-right-plus" onClick={() => this.props.incrementQty(item, 1)}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <i class="fa fa-angle-right"></i>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>{(item.qty >= item.stock)? 'out of Stock' : ''}
                                                </td>
                                                <td>
                                                    <a href="#" class="icon" onClick={() => this.props.removeFromCart(item)}>
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </td>
                                                <td><h2 class="td-color">{symbol}{item.sum}</h2></td>
                                            </tr>
                                        </tbody> )
                                    })}
                                </table>
                                <table class="table cart-table table-responsive-md">
                                    <tfoot>
                                    <tr>
                                        <td>total price :</td>
                                        <td><h2>{symbol} {total} </h2></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div class="row cart-buttons">
                            <div class="col-6">
                                <a onClick={()=>{this.props.history.goBack()}} class="btn btn-solid">continue shopping</a>
                            </div>
                            <div class="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} class="btn btn-solid">check out</Link>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section class="cart-section section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div >
                                    <div class="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} class="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Cart is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    {removeFromCart, incrementQty, decrementQty}
)(cartComponent)