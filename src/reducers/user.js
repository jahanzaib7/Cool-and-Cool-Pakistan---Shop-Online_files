import {
    ORDER_REF,
    ORDER_REF_STATUS,
   USERS_DETAILS,APPLY_COUPON
} from "../constants/ActionTypes";


const initialState = {
    user: [],
    orderRef : "",
    orderStatus:[],
    coupoun:[],
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case USERS_DETAILS:
            return { ...state,
                user: action.user };

        case ORDER_REF:
            return { ...state,
                orderRef: action.orderid };
        
        case ORDER_REF_STATUS:
            return { ...state,
                orderStatus: action.data };

        case APPLY_COUPON:
            return { ...state,
                coupoun: action.data };

        default:
            return state;
    }
};
export default userReducer;