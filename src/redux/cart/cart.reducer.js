import CartActionTypes from "./cart.types";
import {addItemToCart,adjustQuantityFromCart} from "./cart.utils";

const INITIAL_STATE = {
  cartItems:[]
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,cartItems:addItemToCart(state.cartItems,action.payload[0])
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>!(cartItem.id==action.payload.id && cartItem.category==action.payload.category))
            }
        case CartActionTypes.ADJUST_QUANTITY:
            return{
                ...state,cartItems:adjustQuantityFromCart(state.cartItems,action.payload.item,action.payload.op)
            }
        default:
            return state;
    }
    }
    
export default cartReducer;