import React, {Component} from 'react';
import store from '../../store';
import {clearCart} from '../../actions'

class orderFailed extends Component {

    constructor (props) {
        super (props)

    }
    componentDidMount(){
        store.dispatch(clearCart([]));
    }

    render (){

        const {payment, items, symbol, orderTotal} = this.props.location.state;
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var current = new Date();
        var next5days = new Date(Date.now() + 5 * 86400000);
        let CheckDate = current.toLocaleDateString("en-US", options).toString()
        let deliveryDate = next5days.toLocaleDateString("en-US", options).toString()

        return (
           
            <section class="p-0">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="error-section">
                                <h4>{payment.Message}</h4>
                               
                                <a href="index.html" class="btn btn-solid">back to home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default orderFailed