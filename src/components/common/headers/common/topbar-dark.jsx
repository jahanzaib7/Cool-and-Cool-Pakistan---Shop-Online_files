import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store from '../../../../store';
import {clearCart} from '../../../../actions'
import {connect} from 'react-redux';
import {filterCountry,changeCurrency} from '../../../../actions';
import Swal from 'sweetalert2'
class TopBarDark extends Component {

    componentDidUpdate(){

    }
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    changedata(country,symbol){
        (this.props.cartList.length > 0) ?
        Swal.fire({
            title: 'Changing country will empty your cart',
            text: "Are you sure you want to change country?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                this.props.filterCountry(country);
                this.props.changeCurrency(symbol);
                store.dispatch(clearCart([]));
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Coutry Changed!',
                        showConfirmButton: false,
                        toast: true,
                        timer: 1500
                    })
            }
          }) 
          : (() => {
            this.props.filterCountry(country);
            this.props.changeCurrency(symbol);
          })();
    this.props.history.push('/')
    }
    render() {
        const {country} = this.props;
        return (
            
            <div class="top-header top-header-dark3">
    

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                          
                        </div>
                        <div class="col-lg-6 text-right hide-for-mob">
                            <ul class="header-dropdown">
                             
                                <li class="onhover-dropdown mobile-account" style={{    padding: '5px 20px',
                                                                                            border: '1px solid #ffffff6b',
                                                                                            color: '#fff',
                                                                                            fontSize: '9px',
                                                                                            textTransform: 'uppercase',
                                                                                            letterSpacing: '1px'
                                                                                        }}>
                                    <i class="fa fa-flag" aria-hidden="true"></i> {country}
                                    <ul class="onhover-show-div">
                                        <li>
                                            <a href={null} onClick={() =>this.changedata('UAE','AED')}>
                                                UAE
                                            </a>
                                        </li>
                                        <li>
                                            <a href={null} onClick={()  =>this.changedata('Pakistan','Rs.')}>
                                                PAKISTAN
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({

    filters: state.filters,
    symbol: state.data.symbol,
    country: state.filters.country,
    cartList:state.cartList.cart
})

export default connect(mapStateToProps, {filterCountry,changeCurrency})(TopBarDark);
