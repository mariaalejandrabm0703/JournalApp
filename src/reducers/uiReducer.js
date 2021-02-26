import { types } from "../types/types";

const initialState = {
  loading: false,
  messageError: "",
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        messageError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        messageError: null,
      };

    default:
      return state;
  }
};
