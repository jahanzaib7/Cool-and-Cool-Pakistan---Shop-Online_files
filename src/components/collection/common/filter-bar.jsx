import React, {Component} from 'react';
import { connect } from 'react-redux'
import {filterSort} from '../../../actions'
import {getVisibleproducts} from '../../../services';

class FilterBar extends Component {

    //List Layout View
    listLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:0";
        document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-12');
        });
        setTimeout(function(){
            document.querySelector(".product-wrapper-grid").style = "opacity: 1";
        }, 500);
    }

    //Grid Layout View
    gridLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:1";
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-3');
        });
    }

    // Layout Column View
    LayoutView = (colSize) =>{
        if(!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-lg-'+colSize);
            });
        }

        this.props.onLayoutViewClicked(colSize);
    }

    render (){
        return (
            <div class="product-filter-content">
                <div class="collection-view" style={{border:'0px', padding:'0px'}}>
                <h5 class="search-sort text-left">Showing Products 1-{this.props.products.length} Result</h5>
                
                </div>
             <div class="row align-items-start">
                <div class="col product-page-filter" style={{border:'0px'}}>
                    <select class="search-sort" onChange={(e) => this.props.filterSort(e.target.value)}>
                        <option value="">Default Sorting</option>
                        <option value="HighToLow">Price: High to Low</option>
                        <option value="LowToHigh">Price: Low to High</option>
                        <option value="Newest">Newest Items</option>
                        <option value="AscOrder">Sort By Name: A To Z</option>
                        <option value="DescOrder">Sort By Name: Z To A</option>
                    </select>
                </div>
                </div>
            
      
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: getVisibleproducts(state.data, state.filters),
    filters: state.filters
})

export default connect(mapStateToProps, {filterSort})(FilterBar);