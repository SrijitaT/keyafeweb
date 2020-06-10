import { UPLOAD_IMG, SHOW_SPINNER, TOGGLE_FLAG, ASSIGN_VAL_TO_VAR, GET_ALL_PRODUCTS } from "./actionTypes";
import axios from "axios";

const serverUrl = "http://localhost:5000/";
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

export const uploadImage = (prod_details) => dispatch => {
    const data = new FormData()
    data.append('file', prod_details.imageToUpload);
    data.append('name', prod_details.prod_name);
    data.append('price', prod_details.prod_price);
    data.append('category', prod_details.prod_category);
    dispatch(toggleFlag("showSpinner"));
    axios
        .post(serverUrl + "api/upload-product-pic", data)
        .then(res => {
            dispatch(toggleFlag("showSpinner"));
            dispatch(uploadSuccess(res.data));
            setTimeout(() => dispatch(toggleFlag("uploadStatus")), 5000)
        });
};