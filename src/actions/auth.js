import { types } from "../types/types";

// actions para el dispatch de login
export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid: uid,
      displayName: displayName,
    },
  };
};
