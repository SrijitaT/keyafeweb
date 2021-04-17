import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS, ADD_TO_CART, GET_ATTRIBUTES,GET_CATEGORIES, GET_FLAVOURS } from "../actions/actionTypes";

const initialState = {
    showSpinner: false,
    uploadStatus: false,
    allProducts: [],
    cart: [],
    categories:[],
    flavours : []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FLAG: {
            const { var_name } = action.payload;
            return {
                ...state, [var_name]: !state[var_name]
            }
        }
        case ASSIGN_VAL_TO_VAR: {
            const { var_name, value } = action.payload;
            return {
                ...state, [var_name]: value
            }
        }
        case GET_ALL_PRODUCTS: {
            const { products, category } = action.payload;
            return { ...state, allProducts: [...products] }
        }
        case GET_ATTRIBUTES: {
            const { key,value } = action.payload;
            //console.log("categories----",categories);
            return { ...state, [key]: state[key].concat(value) }
        }
        case GET_FLAVOURS:{
            const { fl } = action.payload;
            return { ...state, categories: state.flavors.concat(fl) }
        }
        case ADD_TO_CART: {
            const { cartItem } = action.payload;
            const cartItemIndex = state.cart.findIndex(item => item.id == cartItem.id);

            if (cartItemIndex >= 0) {
                state.cart[cartItemIndex].qty++;
                state.cart[cartItemIndex].total_price = parseInt(state.cart[cartItemIndex].price) * state.cart[cartItemIndex].qty;
            } else {
                const finalCartItem = { ...cartItem };
                finalCartItem.qty = 1;
                finalCartItem.schd_date = new Date();
                finalCartItem.total_price = parseInt(finalCartItem.price);
                state.cart = state.cart.concat(finalCartItem);
            }
            return { ...state, cart: [...state.cart] }
        }
        default: return state;
    }
}