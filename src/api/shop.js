/**
 * Mocking client-server processing
 */
import _products from './data.json'
import * as url from '../constants/Endpoints'
import axios from 'axios'

import _sliderImages from './images.json'
// import { getPrivatePolicy } from '../actions'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => {
    getData(url.temp_url+'api/products')
    .then( async res => {
     
   
        let data = [] ;

        await  res.data.data.map(d =>{
          console.log(res.data.data)
          var img = d.images[0].url
         var bas_img = d.images[0].small_image_url

         var pro_img = d.images[0].path ? img : bas_img
          // var img = d.Image.split(",").map(e => {
     
          //   return url.base_url+e;
          // });


            var obj = {}; 
            obj.id = d.id;
            obj.name = d.name;
            obj.price = d.price || d.price;
            obj.discount = d.CampaignId;
            obj.features = d.Features;
            obj.pictures = pro_img;
            obj.shortDetails = d.Feature;
            obj.description = d.description;
            obj.stock = d.product_qty;
            obj.new = true;
            obj.isfeatured = d.IsFeatured;
            obj.category = d.Category[0].name;
            obj.country = 'UAE';
            obj.rating = 5;
            obj.productCode = d.ProductCode;
                data.push(obj);
        });
        cb(data)
      
    });


},
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
    getMenu: (cb, timeout) => {
     
        getData(url.temp_url+'api/descendant-categories')
        .then(res => {
         
          cb(res.data.data);
        });

    
    },
    getSliderimages: (cb, timeout) => {
      getData(url.temp_url+"api/sliders?slider_for=web")
      .then(res => {
       
        cb(res.data);
      });
    },

    getHomebanner:(cb,timeout) => {
        getData(url.temp_url+url.getBanner+'banner')
        .then(res => {
         
          cb(res.data.data);
        });
    },


    getfaq:(cb,timeout) => {
        getData(url.base_url+url.getFAQ)
        .then(res => {
          cb(res.data);
        });
    },

    getOrigin:(cb,timeout)=>{

    },
     

    postCustsignup:(payload,cb,timeout)=>{
        postData(url.base_url+url.custSignUp,payload)
        .then(res => {
          console.log(res)
          cb(res.data);
        });
       
        
    },
    postCustsignIn:(payload,cb,timeout)=>{
        postData(url.Api_Url+'api/customer/login?token=true',payload)
        .then(res => {
          cb(res.data);
        });
       
        
    },

    

    postPlaceOrder:(payload,cb,timeout)=>{
      postData(url.base_url+url.placeOrder,payload)
      .then(res => {
        cb(res.data);
      });
     
      
  },


  getDeals:(cb) =>{
    getData(url.temp_url+'api/products')
    .then(async res => {
      let data = [] ;

      await  res.data.data.map(d =>{
        
        var img = url.temp_url+'storage/'+ d.images[0].path
       var bas_img = d.images[0].small_image_url

       var pro_img = d.images[0].path ? img : bas_img
        // var img = d.Image.split(",").map(e => {
   
        //   return url.base_url+e;
        // });


          var obj = {}; 
          obj.id = d.id;
          obj.name = d.name;
          obj.price = d.price || d.price;
          obj.discount = d.CampaignId;
          obj.features = d.Features;
          obj.pictures = pro_img;
          obj.shortDetails = d.Feature;
          obj.description = d.description;
          obj.DOTD = true;
          obj.stock = d.product_qty;
          obj.new = true;
          obj.isfeatured = d.IsFeatured;
          // obj.category = d.Category[0].name;
          obj.country = 'UAE';
          obj.rating = 5;
          obj.productCode = d.ProductCode;
              data.push(obj);
      });
      cb(data)
    });
  },

  getSettings:(cb) =>{
    getData(url.base_url+url.getSettings).then( async d =>{
      cb(d.data);
    });
  },

  getPrivatePolicy:(cb) =>{
    getData(url.base_url+url.getPrivatePolicy).then( async d =>{
      cb(d.data);
    });
  },
  getSocialLink:(cb) =>{
    getData(url.base_url+url.getSociallink).then( async d =>{
      cb(d.data);
    });
  },
  postContact:(payload,cb,timeout)=>{
    postData(url.base_url+url.placeContact,payload)
    .then(res => {
      cb(res.data);
    });
   
    
},
getOrderRef:(payload,cb,timeout)=>{
  getData(url.base_url+url.getOrderRef+payload)
  .then(res => {
    cb(res.data);
  });
 
  
},

checkcoupoun:(payload,cb,timeout)=>{
  getData(url.base_url+url.checkCoupon+"Name="+payload.coupoun+"&Country="+payload.country)
  .then(res => {
    cb(res.data);
  });
},

getContactDetail:(cb)=>{
  getData(url.base_url+url.getContactDetails)
    .then(res => {
      cb(res.data);
    });
},

getfetchSideDetails:(cb)=>{
  getData(url.base_url+url.sideDetails)
    .then(res => {
      cb(res.data);
    });
},
getDealsBanner: (cb, timeout) => {
  getData(url.temp_url+url.getBanner+"banner")
  .then(res => {
    cb(res.data);
  });
},

getBestSeller: (cb, timeout) => {
  getData(url.base_url+url.getBestSeller)
  .then(res => {
    cb(res.data);
  });
},
postSocialLogin:(payload,cb,timeout)=>{
  postData(url.base_url+url.socialLogin,payload)
  .then(res => {
    cb(res.data);
  });
 
  
},
}


function getData(URL){
   return axios.get(URL);
}

function postData(URL,data){
    return axios.post(URL,data);
 }


function getDataParam(URL,data){
    return axios.get(URL, {
        params: data
      });
 }
 