import { DirectoryActionTypes } from "./directory.types";
const INITIAL_STATE = {
    categories:null
}

const dirReducer = (state = INITIAL_STATE,action)=>{
switch(action.type){
    case DirectoryActionTypes.GET_CATEGORIES:
        return{
            ...state,categories:action.payload
        }
    default:
        return state;
}
}

export default dirReducer;