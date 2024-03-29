import { SET_CURRENT_USER } from "./actionTypes";
import axios from "axios";
import setAuthToken from "../helpers/setAuthToken";
import jwt_decode from "jwt-decode";
import { getErrors } from "./errorActions";
//import { clearCurrentProfile } from "./profileActions";
const serverUrl = "http://localhost:5000";

export const registerUser = (userData, history) => dispatch => {
    return axios
        .post(serverUrl + "/api/users/register", userData)
        .then(res => console.log("Registration done.....", res))
        .catch(err => dispatch(getErrors(err)));
};

// export const registerUserSuccess = newUser => {
//   return {
//     type: REGISTER_USER_SUCCESS,
//     payload: newUser.data
//   };
// };

//Login - GET user Token

export const loginUser = userData => dispatch => {
    axios
        .post(serverUrl + "/api/users/login", userData)
        .then(res => {
            const { token } = res.data;//Decode token to get user data
            const decoded = jwt_decode(token);//Set token to localstorage
            localStorage.setItem("jwtToken", token);//Save to localStorage
            setAuthToken(token); //Set token to Auth header
            dispatch(setCurrentUser(decoded));//Set current user
        })
        .catch(err => {
            let msg = err.message;
            dispatch(getErrors(msg))
        });
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    //set current user to empty object
    dispatch(setCurrentUser({}));
    //dispatch(clearCurrentProfile());
};