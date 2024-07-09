import { combineReducers } from "redux";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "./actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload, loading: false };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_PRODUCT:
      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, id: state.items.length + 1 },
        ],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
