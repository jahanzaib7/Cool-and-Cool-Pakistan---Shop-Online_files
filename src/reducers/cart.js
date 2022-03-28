import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    // INCREMENT_QTY,
    DECREMENT_QTY, 
    CLEAR_CART} from "../constants/ActionTypes";


export default function cartReducer(state = {
    cart: []
}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const productId = action.product.id
            if (state.cart.findIndex(product => product.id === productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId) {
                     
                        let total_Quantity = product.qty+action.qty;
                        let applied_discount = product.price*product.discount/100*total_Quantity; 
                        

                        let totalPrice = product.price*total_Quantity;
                        let grandTotal = totalPrice - applied_discount;
                        
                        cartAcc.push({ ...product, qty: product.qty+action.qty, applieddiscount:applied_discount.toFixed(2), sum: grandTotal.toFixed(2)}) // Increment qty
                    } else {
                      
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }
       
            let total_Quantity = action.qty;
            let applied_discount = action.product.price*action.product.discount/100*total_Quantity; 
            

            let totalPrice = action.product.price*total_Quantity;
            let grandTotal = totalPrice - applied_discount;




            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, applieddiscount: applied_discount,sum:grandTotal }] }

        case DECREMENT_QTY:
            
            if (state.cart.findIndex(product => product.id === action.productId) !== -1) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && product.qty > 1) {

                        let total_Quantity = product.qty-1;
                        let applied_discount = product.price*product.discount/100*total_Quantity; 
                        

                        let totalPrice = product.price*total_Quantity;
                        let grandTotal = totalPrice - applied_discount;
                      
                        



                        cartAcc.push({ ...product, qty: product.qty-1,applieddiscount:applied_discount.toFixed(2), sum: grandTotal.toFixed(2) }) // Decrement qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }
            

            return { ...state, cart: [...state.cart, { ...action.product, qty: 1, applieddiscount: action.product.price*action.qty,sum:  action.product.price -(action.product.price*action.qty)  }] }

        case REMOVE_FROM_CART:
            return {
                cart: state.cart.filter(item => item.id !== action.product_id.id)
            }

        
        case CLEAR_CART:
                return {
                    cart: action.data
                }
        default:
    }
    return state;
}
