import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
//import directoryReducer from "./directory/directory.reducer";
import { persistReducer } from "redux-persist";
//import sessionStorage from "redux-persist/es/storage/session";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}
let rootReducer = combineReducers({user:userReducer,cart:cartReducer});
export default persistReducer(persistConfig,rootReducer)