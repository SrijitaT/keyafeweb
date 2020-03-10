import { UPLOAD_IMG } from "./actionTypes";
export const uploadImage = id => ({
    type: UPLOAD_IMG,
    payload: { id }
});