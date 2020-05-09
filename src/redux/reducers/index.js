import { combineReducers } from "redux";
import imgUpload from "./imgUploadReducer";
import products from "./productReducer";

export default combineReducers({ imgUpload, keyafestore: products });