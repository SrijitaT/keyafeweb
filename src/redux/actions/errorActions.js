import { GET_ERRORS } from "./actionTypes";

export const getErrors = error => {
    return {
        type: GET_ERRORS,
        payload: error
    };
};