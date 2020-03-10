import { UPLOAD_IMG } from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPLOAD_IMG: {
            const { id } = action.payload;
            console.log("Here in action....", id);
            return state;
        };
        default: return state;
    }
}