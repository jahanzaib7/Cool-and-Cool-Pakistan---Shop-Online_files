import shop from '../api/shop'

import * as types from '../constants/ActionTypes'

import store from "../store";
import { ToastContainer, toast } from 'react-toastify';

import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import filter from '../components/collection/common/filter';


export const fetchProductsBegin = () => ({
    type: types.FETCH_PRODUCTS_BEGIN
});



export const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const recieveHomeBanner = banners =>({
    type:types.FETCH_HOME_BANNER,
    banners
})

export const recieveFAQ = faq =>({
    type:types.FETCH_FAQ,
    faq
})
export const receiveMenu = menu => ({
    type: types.FETCH_MENU,
    menu
})



export const recieveSliderimages = images => ({
    type: types.FETCH_SLIDER_IMAGE,
    images
})


export const getAllProducts = () => dispatch => {
    dispatch(fetchProductsBegin());
    shop.getProducts(products => {
        dispatch(receiveProducts(products));

        return products;
    })
}


export const fetchMenu =() => dispatch =>{

    shop.getMenu(menu => {
        dispatch(receiveMenu(menu));

        return menu;
    });

}
export const fetchImages =() => dispatch =>{

    shop.getSliderimages(images =>{

        dispatch(recieveSliderimages(images));
        return images;
    });

}

export const fetchHomeBanner = () => dispatch =>{
    shop.getHomebanner(banner =>{
        dispatch(recieveHomeBanner(banner));
  
        return banner;
    });
}

export const fetchFAQ = () => dispatch =>{
   
    shop.getfaq(e =>{
    
        dispatch(recieveFAQ(e));
  
        return e;
    });
}

export const fetchSingleProduct = productId => ({
    type: types.FETCH_SINGLE_PRODUCT,
    productId
})


export const fetchOrigin = () => dispatch=>{
    var domain = window.location.hostname.split(".");
  // var len= domain.lastIndexOf(".");
   //console.log(len);
   //console.log(domain);
    if (domain[2] === "pk") {
        dispatch(filterCountry('Pakistan'));
        dispatch(changeCurrency('Rs'));
    }else{
        dispatch(filterCountry('UAE'));
        dispatch(changeCurrency('AED'));
    }
}



//it seems that I should probably use this as the basis for "Cart"
export const addToCart = (product, qty) => (dispatch) => {
    // toast.success("Item Added to Cart");

    dispatch(addToCartUnsafe(product, qty))

}
export const addToCartAndRemoveWishlist = (product, qty) => (dispatch) => {
    // toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty));
    dispatch(removeFromWishlist(product));
}
export const addToCartUnsafe = (product, qty) => ({
    type: types.ADD_TO_CART,
    product,
    qty
});
export const removeFromCart = product_id => (dispatch) => {
    // toast.error("Item Removed from Cart");
    dispatch({
        type: types.REMOVE_FROM_CART,
        product_id
    })
};
export const incrementQty = (product, qty) => (dispatch) => {
    // toast.success("Item Added to Cart");
    dispatch(addToCartUnsafe(product, qty))

}
export const decrementQty = productId => (dispatch) => {
    // toast.warn("Item Decrement Qty to Cart");

    dispatch({
        type: types.DECREMENT_QTY,
        productId
    })
};



//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = (product) => (dispatch) => {
    // toast.success("Item Added to Wishlist");
    dispatch(addToWishlistUnsafe(product))

}
export const addToWishlistUnsafe = (product) => ({
    type: types.ADD_TO_WISHLIST,
    product
});
export const removeFromWishlist = product_id => (dispatch) => {
    // toast.error("Item Removed from Wishlist");
    dispatch({
        type: types.REMOVE_FROM_WISHLIST,
        product_id
    })
};


//Compare Products
export const addToCompare = (product) => (dispatch) => {
    // toast.success("Item Added to Compare");
    dispatch(addToCompareUnsafe(product))

}
export const addToCompareUnsafe = (product) => ({
    type: types.ADD_TO_COMPARE,
    product
});
export const removeFromCompare = product_id => ({
    type: types.REMOVE_FROM_COMPARE,
    product_id
});


// Filters
export const filterBrand = (brand) => ({
    type: types.FILTER_BRAND,
    brand
});
export const filterColor = (color) => ({
    type: types.FILTER_COLOR,
    color
});
export const filterPrice = (value) => ({
    type: types.FILTER_PRICE,
    value
});
export const filterSort = (sort_by) => ({
    type: types.SORT_BY,
    sort_by
});

export const filterCountry = (country) => ({
    type: types.FILTER_COUNTRY,
    country
});


export const filterSearch = (search) => ({
    type: types.FILTER_SEARCH,
    search
});


// Currency
export const changeCurrency = (symbol) => ({
    
    type: types.CHANGE_CURRENCY,
    symbol
});


//country 
export const changeCountry = (country) => ({
    type: types.CHANGE_COUNTRY,
    country
});


//adding users details 
export const userLoggedIn = (user) => ({
    type: types.USERS_DETAILS,
    user
});


export const custSignUp = (data) => {
shop.postCustsignup(data,e=>{
    toast.success("Account Created Successfully!, Please Check your Email");
    
})
};


export const custSignIn = (data) =>  (dispatch) =>{
    
    shop.postCustsignIn(data,e=>{
       if(!e){
        toast.error("Cannot Login!, Please Check Your Credentials ");
       }else{
            
        toast.success("Success, Please wait to be Redirected");
        dispatch(userLoggedIn(e))
         
       }
    });

}

export const userLogoff = (user) => ({
    type: types.USERS_DETAILS,
    user
});

export const orderReference = (orderid) => ({
    type: types.ORDER_REF,
    orderid
});

export const getOrderReferenceStatus = (data) => ({
    type: types.ORDER_REF_STATUS,
    data
});


export const applythetoken = (data) => ({
    type: types.APPLY_COUPON,
    data
});

export const placeOrder = (data) =>(dispatch) =>{
    shop.postPlaceOrder(data,e=>{
    //  toast.info("Your Order has been Placed, Please Wait ....... ");
     dispatch(orderReference(e));

     });
}


export const clearCart = (data) =>(dispatch) =>{
dispatch({
    type: types.CLEAR_CART,
    data
})
}

export const dispatchDeals = (data) =>(dispatch) =>{
    dispatch({
        type: types.FETCH_DEALS,
        data
    })
}

export const dispatchSettings= (data) =>(dispatch) =>{
    dispatch({
        type: types.FETCH_SETTINGS,
        data
    })
}

export const dispatchPrivatepolicy= (data) =>(dispatch) =>{
    dispatch({
        type: types.FETCH_PRIVATEPOLICY,
        data
    })
}

export const dispatchSocialLink= (data) =>(dispatch) =>{
    dispatch({
        type: types.FETCH_SOCIALLOGIN,
        data
    })
}


export const getDeals = () =>(dispatch) =>{
    shop.getDeals(e=>{
     dispatch(dispatchDeals(e));
     });
}

export const getStoreSetting = () =>(dispatch) =>{
        shop.getSettings(e=>{
         dispatch(dispatchSettings(e));
         });
}

export const getPrivatePolicy = () =>(dispatch) =>{
    shop.getPrivatePolicy(e=>{
     dispatch(dispatchPrivatepolicy(e));
     });
    }
export const getSocialLink = () =>(dispatch) =>{
    shop.getSocialLink(e=>{
         dispatch(dispatchSocialLink(e));
         });
}

export const SendContact = (data) =>(dispatch) =>{
    shop.postContact(data,e=>{
     toast.success(e);
    
     });
}

export const GetOrderbyRef = (data) => (dispatch) =>{
    shop.getOrderRef(data,e =>{
     dispatch(getOrderReferenceStatus(e));
     });
}

export const getDealsBanner= () =>(dispatch) =>{
    shop.getDealsBanner(e=>{
         dispatch(dispatchDealsBanner(e));
         });
}

export const getCoupoun = (data) => (dispatch) =>{
    shop.checkcoupoun(data,e =>{
        if(e === 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Invalid Coupon! ',
                showConfirmButton: false,
                toast: true,
                timer: 1500
            })
            dispatch(applythetoken(e));
        }else{
           
            dispatch(applythetoken(e));
        }
     
     });
}

export const getContactDetail = (data) => (dispatch) =>{
    shop.getContactDetail(e =>{
        dispatch(dispatchContactDetail(e));
    });
}

export const fetchSideDetails = (data) => (dispatch) =>{
    shop.getfetchSideDetails(e =>{
        dispatch(dispatchSidetDetail(e));
    });
}

export const fetchBestSeller = (data) => (dispatch) =>{
    shop.getBestSeller(e =>{
        dispatch(dispatchBestSeller(e));
    });
}



//Dispatch
export const dispatchContactDetail = (data) => ({
    type: types.GETCONTACT_DETAILS,
    data
});


export const dispatchDealsBanner= (data) =>(dispatch) =>{
    dispatch({
        type: types.FETCH_DEALS_BANNERS,
        data
    })
}
export const dispatchSidetDetail = (data) => ({
    type: types.GETSIDEDETIALS,
    data
});
export const dispatchBestSeller = (data) => ({
    type: types.GETBESTSELLER,
    data
});


export const socialLogin = (data,country) =>(dispatch)=>{
    console.log(country);
    shop.postSocialLogin(data,e=>{
        if(!e){
            var datas = {
                UserName : data.Email, 
                Email : data.Email, 
                Password : Math.random().toString(36).substr(2, 5), 
                Gender : '', 
                Contact : '', 
                Address : '', 
                Address2 : '', 
                City : '', 
                Country : 'UAE', 
                ProfileImg : '', 
                AuthToken : data.Token, 
                SocialChannel :data.Channel, 
                Platform : navigator.appName, 
            }

            shop.postCustsignup(datas,d=>{
            
                
                if(d){
                    shop.postSocialLogin(data,e=>{
                        if(e){
        
                            toast.success("Success, Please wait to be Redirected");
                            dispatch(userLoggedIn(e))


                        }else{
                        toast.error("Cannot Login!, Please Check Your Credentials ");
                        }
                    });
                }else{
                    toast.error("Cannot Login!, Call ");
                }
              
                
            })
       
        }else{
            dispatch(userLoggedIn(e))
            
        //  toast.success("Success, Please wait to be Redirected");
        //  dispatch(userLoggedIn(e))
          
        }
     });
}