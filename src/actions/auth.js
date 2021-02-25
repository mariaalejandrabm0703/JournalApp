import { types } from "../types/types";

export const startLoginEMailPassword = () =>{
  //action asincrona, devuelve un callback
  // el middleware va a ejecutar el callback cuando haga el llamado a la action
  // cuando ejecute el fetch se ejecuta el dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch( login(123, 'Maria') );
    }, 3500);
  }
}

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
