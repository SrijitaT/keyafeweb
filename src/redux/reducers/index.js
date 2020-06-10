import { combineReducers } from "redux";
import imgUpload from "./imgUploadReducer";
import products from "./productReducer";
import auth from "./authReducer";
import errors from "./errorReducer";

export default combineReducers({ imgUpload, keyafestore: products, auth, errors });