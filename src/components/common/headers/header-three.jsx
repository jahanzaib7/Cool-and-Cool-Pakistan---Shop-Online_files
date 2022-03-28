import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import MobCartContainer from "./../../../containers/MobCartContainer";
import TopBarDark from "./common/topbar-dark";
import {filterCountry,
        changeCurrency,
        fetchMenu,
        getAllProducts ,
        fetchImages,
       recieveHomeBanner,
       fetchHomeBanner,
       fetchFAQ,
       fetchOrigin,
       getDeals,
       getStoreSetting,
       getPrivatePolicy,
       getSocialLink,
       getDealsBanner ,
       getContactDetail,
       fetchSideDetails,clearCart
    } from '../../../actions'
import {connect} from "react-redux";
import LogoImage from "./common/logo";
import LogoBlock from "../../layouts/common/logo-block"
import Autosuggest from 'react-autosuggest';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import NavBarMob from "./common/navbar-mob";
import Navbar from 'react-bootstrap/Navbar'
import Header2 from './header2';

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    const getSuggestionValue = suggestion => suggestion.name;
    
    // Use your imagination to render suggestions.
    const renderSuggestion = suggestion => {
        if(suggestion.hasOwnProperty("DOTD")){
return     <Link to={`/deals/product/${encodeURI(suggestion.name)}`}>
<div class="row">
    <div class="col-sm-3 m-0 p-0 form-inline ">
    <LazyLoadImage
    effect="blur"
    src={suggestion.pictures[0]}
        class="img-fluid" 
        style={{margin:' 0 auto'}}
    />

    
    </div>
    <div class="col-sm-9 form-inline">
        {suggestion.name}
    </div>
</div>
</Link> ;
        }else{
            return     <Link to={`/product/product/${encodeURI(suggestion.name)}`}>
<div class="row">
    <div class="col-sm-3 m-0 p-0 form-inline ">
    <LazyLoadImage
    effect="blur"
    src={suggestion.pictures[0]}
        class="img-fluid" 
        style={{margin:' 0 auto'}}
    />

    
    </div>
    <div class="col-sm-9 form-inline">
        {suggestion.name}
    </div>
</div>
</Link> ;
            
        }

    }

 




class HeaderThree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading:false,
            searchTerm:'',
            value: '',
            suggestions: []
        }
    }


        // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = value => {
            const inputValue = value.trim().toLowerCase();
            let dataArray = this.props.products.concat(this.props.deals);
            const inputLength = inputValue.length;
            return inputLength === 0 ? [] : dataArray.filter(lang =>
                lang.name.toLowerCase().includes(inputValue) && this.props.country === lang.country
            );
        };
        
    /*=====================
         Pre loader
         ==========================*/
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style= "display: none";
        }, 2000);
      
        store.dispatch(fetchOrigin());
        store.dispatch(fetchMenu());
        store.dispatch(fetchImages());
        store.dispatch(fetchHomeBanner());
        store.dispatch(fetchFAQ());
        store.dispatch(getAllProducts());
        store.dispatch(getDeals());
        store.dispatch(getStoreSetting());
        store.dispatch(getPrivatePolicy());
        store.dispatch(getSocialLink());
        store.dispatch(getDealsBanner());
        store.dispatch(getContactDetail());
        store.dispatch(fetchSideDetails());
    
    }


    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll);
    
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        // let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        // if (number >= 300) {
        //     if (window.innerWidth < 576) {
        //         document.getElementById("sticky").classList.remove('fixed');
        //     }else
        //         document.getElementById("sticky").classList.add('fixed');
        // } else {
        //     document.getElementById("sticky").classList.remove('fixed');
        // }
    }

    changeLanguage(lang) {
        store.dispatch(IntlActions.setLocale(lang))
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
    openNav() {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
        }
    }
    openSearch() {
        document.getElementById("search-overlay").style.display = "block";
    }

    closeSearch() {
        document.getElementById("search-overlay").style.display = "none";
    }

    load = ()=>{
     
        this.setState({isLoading: true});
        fetch().then(()=>{
            // deal with data fetched
            this.setState({isLoading: false})
        })
    };
    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      };

    componentDidUpdate(prevprops,prevstate){
  
     if( prevstate.searchTerm !== this.state.searchTerm){
      
     }
        
    }
 
    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue,
          searchTerm:newValue
        });
      };

      // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };



    render() {
        const{user} = this.props;
        const { value, suggestions } = this.state;
           // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Search products.......',
            value,
            onChange: this.onChange
        };
        const handleSubmit = async event => {
            event.preventDefault();
            // custSignIn(formData);
           
        
            this.props.history.push({
                pathname: '/Search',
                    state: {searchTerm:this.state.searchTerm}
            });
        
          }

          


        return (
            <div>
                 <ToastContainer />
                <Header2/>

                                    {/* {this.state.isLoading ? <Pace color="#27ae60"/> : null} */}
                 
                    {/*Top Header Component*/}
                    
                </div>
              
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user.user,
    products :state.data.products,
    country:state.filters.country,
    cartList:state.cartList.cart,
    deals :state.data.deals
    
});
export default connect(mapStateToProps,
    { filterCountry,changeCurrency }
)(HeaderThree);