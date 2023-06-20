import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  ingredientsCounter: 0,
    Carts:[],
    _products:[]
};

const addIngredient = (state, action) => {
  const updatedNumberCart = { [action.payloadId]: state.Carts[action.payloadId] + 1 }
    const updatedNumberCarts = updateObject(state.Carts, updatedNumberCart);
  const updatedState = {
    ingredientsCounter: updatedNumberCarts,
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedNumbercart = state.ingredientsCounter - 1 ;
  const updatedState = {
    ingredientsCounter: updatedNumbercart,
    totalPrice: state.totalPrice + Number(action.ingredientPrice),
  };
  return updateObject(state, updatedState);
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addIngredient(state, action);
    case actionTypes.REMOVE_FROM_CART:
      return removeIngredient(state, action);
    default:
      return state;
  }
};

export default reducer;
