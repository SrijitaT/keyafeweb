import CartActionTypes from "./cart.types";

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type:CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const adjustQuantity = (item,op) => ({
    type:CartActionTypes.ADJUST_QUANTITY,
    payload: {item,op}
})