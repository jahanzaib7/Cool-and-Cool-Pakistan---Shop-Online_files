import React, {Component} from 'react';
import store from '../../store';
import {clearCart} from '../../actions'
import {SendContact} from '../../actions'
import { connect } from 'react-redux'
import {getCartTotal,getAppliedVAT,getVatTotal} from "../../services";
class orderSuccess extends Component {

    constructor (props) {
        super (props)

    }
    componentDidMount(){
        store.dispatch(clearCart([]));
    }

    render (){

        const {payment, items, symbol, orderTotal,vat,subtotal} = this.props.location.state;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var current = new Date();
        let CheckDate = current.toLocaleDateString("en-US", options).toString()
        var next5days = new Date(this.props.orderStatusRef.DeliveryDate);
        let deliveryDate = next5days.toLocaleDateString("en-US", options).toString()
        const {country} = this.props;
        return (
            (payment)?
            <div>
                <section class="section-b-space light-layout">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="success-text">
                                    <i class="fa fa-check-circle" aria-hidden="true"></i>
                                    <h2>Thank you</h2>
                                    <p>Your Order has been Placed Successfully</p>
                                    <p>Transaction ID: {payment}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="product-order">
                                    <h3>your order details</h3>
                                    {items.map((item, index) => {
                                    return <div class="row product-order-detail" key={index}>
                                                <div class="col">
                                                    <img src={item.variants?
                                                        item.variants[0].images
                                                        :item.pictures[0]} alt="" class="" />
                                                </div>
                                                <div class="col order_detail">
                                                    <div>
                                                        <h4>product name</h4>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div class="col order_detail">
                                                    <div>
                                                        <h4>quantity</h4>
                                                        <h5>{item.qty}</h5>
                                                    </div>
                                                </div>
                                                <div class="col order_detail">
                                                    <div>
                                                        <h4>Discount</h4>
                                                        <h5>{symbol} {item.applieddiscount}</h5>
                                                    </div>
                                                </div>
                                                <div class="col order_detail">
                                                    <div>
                                                        <h4>price</h4>
                                                        <h5>{symbol}{item.sum}</h5>
                                                    </div>
                                                </div>
                                            </div>




                                    })}
                                    <div class="total-sec">
                                        <ul>
                                            <li>subtotal <span>{symbol}{subtotal}</span></li>
                                            <li>{this.props.settings[country][0].Name} <span>{symbol}{this.props.settings[country][0].Value}</span></li>
                                            <li>{this.props.settings[country][1].Name} <span>{symbol}{vat}</span></li>
                                        </ul>
                                    </div>
                                    <div class="final-total">
                                        <h3>total <span>{symbol}{orderTotal}</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row order-success-sec">
                                    <div class="col-sm-6">
                                        <h4>Order Summary</h4>
                                        <ul class="order-detail">
                                           
                                            <li>Order ID: {payment}</li> 
                                            <li>Order Date: {CheckDate}</li>
                                            <li>Order Total: {symbol}{orderTotal}</li>
                                        </ul>
                                    </div>
                                
                                    {/* <div class="col-sm-12 payment-mode">
                                        <h4>payment method</h4>
                                        <p>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net
                                            banking acceptance subject to device availability.</p>
                                    </div> */}
                                    <div class="col-md-12">
                                        <div class="delivery-sec">
                                            <h3>expected date of delivery</h3>
                                            <p>Your order will be delivered to you within 2 business days.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            :
            <section class="p-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="error-section">
                                <h1>{payment.Message}</h1>
                                <h2>page not found</h2>
                                <a href="index.html" class="btn btn-solid">back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart),
    user:state.user.user,
    country:state.filters.country,
    orderRef:state.user.orderRef,
    settings:state.data.settings,
    vatincluded:getAppliedVAT(state.data.settings[state.filters.country][1].Value,getCartTotal(state.cartList.cart),state.data.settings[state.filters.country][0].Value),
    totalDiscount : getVatTotal(state.data.settings[state.filters.country][1].Value,state.cartList.cart),
    orderStatusRef: state.user.orderStatus
})

export default connect(
    mapStateToProps
)(orderSuccess);