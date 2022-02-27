import {ACTIONS} from "./actions.js";

export const initialState = {
  user: {
    size: 9,
    brand: "Nike"
  },
  items: {}
};

export const reducer = (state, action) => {
  let user = state.user;
  switch (action.type) {
    case ACTIONS.UPDATE_USER_SIZE:
      user.size = action.payload;
      return {
        ...state,
        user
      };
    case ACTIONS.UPDATE_USER_BRAND:
      user.brand = action.payload;
      return {
        ...state,
        user
      };
    case ACTIONS.UPDATE_ITEMS:
      return (state.items = action.payload);
  }
};
