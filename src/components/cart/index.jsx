import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


// import Breadcrumb from "../common/breadcrumb";
import {getCartTotal} from "../../services";
import {removeFromCart, incrementQty, decrementQty} from '../../actions'
import DeleteIcon from '@mui/icons-material/Delete';
import { color } from '@mui/material/node_modules/@mui/system';

class cartComponent extends Component {

    constructor (props) {
        super (props)
    }

    render (){
      
        const {cartItems, symbol, total} = this.props;
        console.log(cartItems);
        console.log(total);
        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Wovista | Cart List Page</title>
                 
                </Helmet>
                {/*SEO Support End */}

       

                {cartItems.length>0 ?
                <section class="cart-section section-b-space">
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table cart-table table-bordered table-responsive-xs">
                                <thead class="table-dark" style={{height:46}}>
                                    <tr class="table-head">
                                        <th scope="col" className='text-light'>image</th>
                                        <th scope="col"className='text-light'>product name</th>
                                        <th scope="col"className='text-light'>price</th>
                                        <th scope="col"className='text-light'>quantity</th>
                                        <th scope="col"className='text-light'>action</th>
                                        <th scope="col"className='text-light'>total</th>
                                    </tr>
                                    </thead>
                                    {cartItems.map((item, index) => {
                                        return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>
                                                {item.hasOwnProperty("DOTD")  ?
                                                     <Link to={`${process.env.PUBLIC_URL}/deals/product/${encodeURI(item.name)}`}>
                                                     <img style={{height:80, width:80}} src={item.variants?
                                                               item.variants[0].images
                                                               :(typeof(item.pictures) == "object" ? item.pictures[0] : item.pictures)} alt="" />
                                                 </Link>   : 
                                                      <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(item.name)}`}>
                                                      <img style={{height:80, width:80}} src={item.variants?
                                                                item.variants[0].images
                                                                :(typeof(item.pictures) == "object" ? item.pictures[0] : item.pictures)} alt="" />
                                                  </Link>}
                                          
                                                </td>
                                                <td>
                                                    
                                                    
                                                {item.hasOwnProperty("DOTD")  ?
                                                     <Link to={`${process.env.PUBLIC_URL}/deals/product/${encodeURI(item.name)}`}>
                               
                                                 </Link>   : 
                                                      <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(item.name)}`}>
                                                {
                                                    item.name
                                                }
                                                  </Link>}
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
                                                            <h2 class="td-color">{symbol} {(item.discount) ? item.price-(item.price*item.discount/100) : item.price}</h2>
                                                        </div>
                                                        <div class="col-xs-3">
                                                            {/* <h2 class="td-color"> */}
                                                            <DeleteIcon onClick={() => this.props.removeFromCart(item)}/>
                                                                {/* <a href="#" class="icon" onClick={() => this.props.removeFromCart(item)}> */}
                                                                    {/* <i class="icon-close"></i> */}
                                                                {/* </a> */}
                                                            {/* </h2> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h2>{symbol} {(item.discount) ? item.price-(item.price*item.discount/100) : item.price}</h2></td>
                                                <td>
                                                    <div class="qty-box">
                                                        <div class="input-group">
                                                            <span class="input-group-prepend">
                                                                <button type="button" class="btn quantity-left-minus" onClick={() => this.props.decrementQty(item.id)} data-type="minus" data-field="">
                                                                 <p class="">-</p>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.qty} readOnly={true} class="form-control input-number" />

                                                            <span class="input-group-prepend">
                                                            <button class="btn quantity-right-plus" onClick={() => this.props.incrementQty(item, 1)}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <p class="">+</p>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>{(item.qty >= item.stock)? 'out of Stock' : ''}
                                                </td>
                                                <td>
                                                    {/* <button class="icon" onClick={() => this.props.removeFromCart(item)}> */}
                                                    {/* </button> */}
                                                    <DeleteIcon onClick={() => this.props.removeFromCart(item)}/>
                                                </td>
                                                <td><h2 class="td-color" style={{color:"orange",}}>
                                                    {symbol}{item.sum}
                                                    </h2></td>
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
                                <a onClick={()=>{this.props.history.goBack()}} class="btn btn-solid" style={{borderRadius:6}}>continue shopping</a>
                            </div>
                            <div class="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} class="btn btn-solid" style={{borderRadius:6}}>check out</Link>
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