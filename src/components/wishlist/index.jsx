import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Breadcrumb from '../common/breadcrumb';
import {addToCartAndRemoveWishlist, removeFromWishlist} from '../../actions'

class wishList extends Component {


    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){

        const {Items, symbol} = this.props;
console.log(Items);
        return (
            <div>
                <Breadcrumb title={'Wishlist'} />
                {Items.length>0 ?
                <section class="wishlist-section section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                            <table class="table cart-table table-bordered table-responsive-xs">
                                <thead class="table-dark" style={{height:46}}>
                                    <tr class="table-head">
                                        <th scope="col"  className='text-light'>image</th>
                                        <th scope="col"  className='text-light'>product name</th>
                                        <th scope="col"  className='text-light'>price</th>
                                        <th scope="col"  className='text-light'>availability</th>
                                        <th scope="col"  className='text-light'>action</th>
                                    </tr>
                                    </thead>
                                    {Items.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                        <img style={{height:80, width:80}} src={item.variants?
                                                                    item.variants[0].images
                                                                    :(typeof(item.pictures) == "object" ? item.pictures[0] : item.pictures)} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>{item.name}</Link>
                                                    <div class="mobile-cart-content row">
                                                        <div class="col-xs-3">
                                                            <p>in stock</p>
                                                        </div>
                                                        <div class="col-xs-3">
                                                            {
                                                                item.discount ?
                                                            <h2 class="td-color">{symbol}{item.price-(item.price*item.discount/100)}
                                                            <del><span class="money">{symbol}{item.price}</span></del></h2>
:
                                                            <h2 class="td-color text-dark my-3">{symbol}  {item.price}</h2>
                                                            }
                                                            
                                                        </div>
                                                        <div class="col-xs-3">
                                                            <h2 class="td-color">
                                                                {/* <a href="javascript:void(0)" class="icon" onClick={() => this.props.removeFromWishlist(item)}> */}
                                                                    {/* <i class="fa fa-times"></i> */}
                                                                {/* </a> */}
                                                                <DeleteIcon className='mx-3 text-dark' onClick={() => this.props.removeFromWishlist(item)}/>
                                                                <ShoppingCartIcon className='mx-3 text-dark' onClick={() => this.props.addToCartAndRemoveWishlist(item, 1)} />

                                                                {/* <a href="javascript:void(0)" class="cart" onClick={() => this.props.addToCartAndRemoveWishlist(item, 1)}> */}
                                                                    {/* <i class="fa fa-shopping-cart"></i> */}
                                                                {/* </a> */}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                {
                                                                item.discount ?
                                                    <h2>{symbol}{item.price-(item.price*item.discount/100)}
                                                     <del><span class="money">{symbol}{item.price}</span></del></h2>
                                                     :
                                                    <h2>{symbol}{item.price}</h2>
                                                }
                                                     </td>
                                               
                                                <td >
                                                    <p>in stock</p>
                                                </td>
                                                <td>
                                                    {/* <a href="javascript:void(0)" class="icon" onClick={() => this.props.removeFromWishlist(item)}> */}
                                                        {/* <i class="fa fa-times"></i> */}
                                                    {/* </a> */}
                                                    <DeleteIcon className='mx-3' onClick={() => this.props.removeFromWishlist(item)}/>
                                                    <ShoppingCartIcon className='mx-3' onClick={() => this.props.addToCartAndRemoveWishlist(item, 1)} />

                                                    {/* <a href="javascript:void(0)" class="cart" onClick={() => this.props.addToCartAndRemoveWishlist(item, 1)}> */}
                                                        {/* <i class="fa fa-shopping-cart"></i> */}
                                                    {/* </a> */}
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div class="row wishlist-buttons">
                            <div class="col-12">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} class="btn btn-solid">continue shopping</Link>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-wishlist.png`} class="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>WhishList is Empty</strong>
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
    Items: state.wishlist.list,
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps,
    {addToCartAndRemoveWishlist, removeFromWishlist}
)(wishList)