import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { fetchMenu,
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
        getDealsBanner,
        getContactDetail,
        fetchBestSeller  } from './actions'
import Landing from './components/landing'


// Layouts


import Coolncool from './components/layouts/coolncool/main';
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import Search from "./components/collection/search";
import Deal from "./components/collection/Deals"


// Product Pages
import LeftSideBar from "./components/products/left-sidebar";

import DealsBar from "./components/products/deals";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'
import orderFailed from './components/checkout/order-failed'
import { useSelector } from './react-redux'

// Extra Pages
import aboutUs from './components/pages/about-us'
import priacyPolicy from './components/pages/privacyPolicy'
import termsConditions from './components/pages/termsConditions'
import retrunRefund from './components/pages/retrunRefund'
import webTerms from './components/pages/webTerms'
import deliveryPolicy from './components/pages/deliveryPolicy'


import Login from './components/pages/login'
import Register from './components/pages/register'
// import Search from './components/pages/search'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'
import Dealsgrid from "./components/features/portfolio/Dealsgrid"

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import { getBestSeller } from './constants/Endpoints';



class Root extends React.Component {  
    constructor(props) {
        super(props);

        
    }


    componentDidMount() {




    }
    componentWillMount(){
     
    }
    render() {
        store.dispatch(fetchBestSeller());
       
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
   

        const CounterComponent = () => {
            const isLoaded = useSelector(state => state.filters.initalLoad);
          if(!isLoaded){
             store.dispatch(fetchOrigin());
          }
          }


        return(
            
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Coolncool}/> 
                        
                            <Layout>
                            <CounterComponent/>
                                {/*Routes For Layouts*/}
                               

								{/*Routes For Features (Product Collection) */}

								<Route path={`${process.env.PUBLIC_URL}/Category/:id`} component={CollectionRightSidebar}/>
                                <Route path={`${process.env.PUBLIC_URL}/Search`} component={Search}/>

								{/*Routes For Single Product*/}
								<Route path={`${process.env.PUBLIC_URL}/product/product/:id`} component={LeftSideBar}/>
                                <Route path={`${process.env.PUBLIC_URL}/deals/product/:id`} component={DealsBar}/>
								

								{/*Routes For custom Features*/}
								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
								<Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<Route path={`${process.env.PUBLIC_URL}/orderStatus`} component={orderSuccess}/>
                                <Route path={`${process.env.PUBLIC_URL}/orderfailed`} component={orderFailed}/>

								{/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/privacy-policy`} component={priacyPolicy}/>
                                <Route path={`${process.env.PUBLIC_URL}/terms-conditions`} component={termsConditions}/>
                                <Route path={`${process.env.PUBLIC_URL}/retrun-refund`} component={retrunRefund}/>
                                <Route path={`${process.env.PUBLIC_URL}/web-terms`} component={webTerms}/>
                                <Route path={`${process.env.PUBLIC_URL}/delivery-terms`} component={deliveryPolicy}/>

                                <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq}/>
                                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/deals/:id?`} component={Deal}/>
                                <Route path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard}/>

{/* 
                                <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs}/>
                                
                                <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/dashboard`} component={Dashboard}/>
                                <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/> */}

								{/*Features*/}
                             
								{/*Theme Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio}/>

								{/*Product Elements*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider}/>
                                <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab}/>

								{/*Portfolios*/}
                                <Route path={`${process.env.PUBLIC_URL}/features/portfolio-grid/:columns`} component={GridCols}/>
                                <Route path={`${process.env.PUBLIC_URL}/Deals-select`} component={Dealsgrid}/>

								{/*Blog Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                <Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage}/>

                                {/* <Route exact path="*" component={PageNotFound} /> */}
                            </Layout>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


