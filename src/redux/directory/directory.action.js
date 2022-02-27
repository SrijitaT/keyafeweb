import {DirectoryActionTypes} from "./directory.types"
import axios from "axios";

let serverUrl = "http://localhost:5000/"
export const getAllCategories = () => dispatch => {
    return axios
        .get(serverUrl + "api/categories")
        // .then(res => {
        //     dispatch(storeCategories(res.data))
        //  })
}
const storeCategories = (categories) => ({
    type : DirectoryActionTypes.GET_CATEGORIES,
    payload:{categories}
})

