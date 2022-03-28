import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {getTopCollection} from "../../services";


class NewProduct extends Component {
    render (){
        const {items, symbol} = this.props;

        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, 3));
          
        }
    
        return (
        
            <div class="theme-card">
                <h5 class="title-border">Popular Item</h5>
                <Slider class="offer-slider slide-1">
                    {arrays.map((products, index) =>
           
                        <div key={index}>
                            {products.map((product, i) =>
                           
                                <div class="media" key={i}>
                                    <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(product.name)}`}><img class="img-fluid" src={`${product.pictures[0]}`} alt="" /></Link>
                                    <div class="media-body align-self-center">
                                  
                                        <Link to={`${process.env.PUBLIC_URL}/product/product/${encodeURI(product.name)}`}>
                                            <h6 style={{
                                                        fontSize:'14px',
                                                        fontWeight: '300',
                                                        width: '100%'
                                                    }}>
                                                        {product.name}
                                            </h6>
                                        </Link>
                                        {product.discount > 0 ?  
                                            <h4 style={{fontSize: '12px',color:'#fc9918'}}>1x {symbol}{product.price-(product.price*product.discount/100)}
                                                <del><span class="money">{symbol}{product.price}</span></del>
                                            </h4> : 
                                            <h4 style={{fontSize: '12px',color:'#fc99185'}}>1x {symbol}{product.price}</h4> 
                                        
                                        }
                                    
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: getTopCollection(state.data.products,state.filters.country),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, null)(NewProduct);
