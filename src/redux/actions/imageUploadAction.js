import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS } from "./actionTypes";
import axios from "axios";

const uploadSuccess = data => ({
    type: UPLOAD_IMG,
    payload: { data }
});
const toggleFlag = (var_name) => ({
    type: TOGGLE_FLAG,
    payload: { var_name }
})
const assignValToVar = (var_name, value) => ({
    type: ASSIGN_VAL_TO_VAR,
    payload: { var_name, value }
})
// const getAllProducts = (products, category) => ({
//     type: GET_ALL_PRODUCTS,
//     payload: { products, category }
// })

export const uploadImage = (prod_details) => dispatch => {
    const data = new FormData()
    data.append('file', prod_details.imageToUpload);
    data.append('name', prod_details.prod_name);
    data.append('price', prod_details.prod_price);
    data.append('category', prod_details.prod_category);
    dispatch(toggleFlag("showSpinner"));
    axios
        .post("http://localhost:5000/api/upload-product-pic", data)
        .then(res => {
            dispatch(toggleFlag("showSpinner"));
            dispatch(uploadSuccess(res.data));
            setTimeout(() => dispatch(toggleFlag("uploadStatus")), 5000)
        });
};

// export const getAllProductDetails = (category) => dispatch => {
//     axios
//         .get("http://localhost:5000/api/products", {
//             params: {
//                 category
//             }
//         })
//         .then(res => dispatch(getAllProducts(res.data, parseInt(category))))
// }