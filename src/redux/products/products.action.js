//import {DirectoryActionTypes} from "./directory.types"
import axios from "axios";

let serverUrl = "http://localhost:5000/"
export const getProductOfCategory = (category_name) => dispatch => {
    return axios.get(serverUrl + "api/products/"+category_name)
}


