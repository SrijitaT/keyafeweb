import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS, ADD_TO_CART, GET_ATTRIBUTES,GET_CATEGORIES, GET_FLAVOURS } from "../actions/actionTypes";

const initialState = {
    showSpinner: false,
    uploadStatus: false,
    allProducts: [],
    cart: {items : [],sub_total:0},
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
            const cartItemIndex = state.cart.items.findIndex(item => item.id == cartItem.id);

            if (cartItemIndex >= 0) {
                state.cart.items[cartItemIndex].qty++;
                state.cart.items[cartItemIndex].total_price = parseInt(state.cart.items[cartItemIndex].price) * state.cart.items[cartItemIndex].qty;
                state.cart.sub_total+=state.cart.items[cartItemIndex].total_price;
            } else {
                const finalCartItem = { ...cartItem };
                finalCartItem.qty = 1;
                finalCartItem.schd_date = new Date();
                finalCartItem.total_price = parseInt(finalCartItem.price);
                state.cart.sub_total+=finalCartItem.total_price;
                state.cart.items = state.cart.items.concat(finalCartItem);
            }
            return { ...state, cart: {"items":[...state.cart.items], "sub_total":state.cart.sub_total} }
        }
        default: return state;
    }
}