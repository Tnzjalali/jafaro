import * as actionTypes from "./actionTypes";

export const addIngredient = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const removeIngredient = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};

export const addItemQty = (product) => ({
  type: actionTypes.ADD_ITEM_QTY,
  payload: product,
});

export const removeItemQty = (product) => ({
  type: actionTypes.REMOVE_ITEM_QTY,
  payload: product,
});

export const addWishlist = (product) => ({
  type: actionTypes.ADD_WISH_LIST,
  payload: product,
});
