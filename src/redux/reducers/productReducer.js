import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS } from "../actions/actionTypes";

const initialState = {
    showSpinner: false,
    uploadStatus: false,
    allProducts: [[], [], [], [], [], []]
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
            try {
                state.allProducts[category] = [];
                state.allProducts[category] = state.allProducts[category].concat(products);
            } catch (err) {
                console.log("Error occured!!", err);
            }
            return { ...state, allProducts: [...state.allProducts] }
        }
        default: return state;
    }
}