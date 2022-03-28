import {
    FETCH_SINGLE_PRODUCT,
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS,
    FETCH_MENU,
    FETCH_FAQ, 
    CHANGE_COUNTRY,
    FETCH_DEALS,
    FETCH_SETTINGS,
    FETCH_PRIVATEPOLICY,
    FETCH_SOCIALLOGIN,
	GETCONTACT_DETAILS,
    FETCH_DEALS_BANNERS,
    CURRENT_PAGE,
    GETSIDEDETIALS,
    GETBESTSELLER} from "../constants/ActionTypes";


const initialState = {
    products: [],
    symbol: 'Rs. ',
    product_details: [],
    menu:[],
    faq:[],
    country:'Pakistan',
    deals:[],
    settings:[],
    privatepolicy:[],
    socialLinks:[],
	contactDetails:[],
    dealsBanner:[],
    currentPage:'',
    sideDetails:[],
    bestseller:[],

};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products };
        case FETCH_SINGLE_PRODUCT:
            if (state.products.findIndex(product => product.id === action.productId) !== -1) {
                const singleItem = state.products.reduce((itemAcc, product) => {
                    return product
                }, [])
                return { ...state,
                    product_details: singleItem };
            }
        case FETCH_MENU: 
            return { ...state,
                menu: action.menu };

        case FETCH_FAQ:
            return { ...state,
                faq: action.faq };

        case FETCH_DEALS:
            return { ...state,
                deals: action.data };

        case CHANGE_CURRENCY:
            return { ...state,
                symbol: action.symbol };

        case CHANGE_COUNTRY:
            return { ...state,
                country: action.changeCountry };

        case FETCH_SETTINGS:
            return { ...state,
                settings: action.data };

        case FETCH_PRIVATEPOLICY:
                    return { ...state,
                        privatepolicy: action.data };
        case FETCH_SOCIALLOGIN:
                return { ...state,
                    socialLinks: action.data };
		case GETCONTACT_DETAILS:
			return { ...state,
				contactDetails: action.data };

        case FETCH_DEALS_BANNERS:
            return { ...state,
				dealBanner: action.data };
        case CURRENT_PAGE:
            return { ...state,
                currentPage: action.data };
        case GETSIDEDETIALS:
            return { ...state,
                sideDetails: action.data };

        case GETBESTSELLER: 
        return {
            ...state,
            bestsellers: action.data 
        };

        default:
            return state;
    }
};
export default productReducer;