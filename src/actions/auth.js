import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";

// action que registrará un nuevo usuario en la base de datos
export const registerUserByNameEmailPassword = (name, email, password) => {
  //tarea asincrona porque va a ir a registrar al firebase
  // se retornará un callback
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async({user}) => {
        await user.updateProfile({displayName:name})
        dispatch(login(user.uid, user.displayName));
      }).catch((err)=>{
        console.log(err)
      });
  };
};

export const startLoginEMailPassword = (email, password) => {
  //action asincrona, devuelve un callback
  // el middleware va a ejecutar el callback cuando haga el llamado a la action
  // cuando ejecute el fetch se ejecuta el dispatch
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {       
        dispatch(login(user.uid, user.displayName));
      }).catch((err)=>{
        console.log(err)
      });
  };
};

// actions para la autenticacion con Google
export const googleAuth = () => {
  //tarea asincrona
  return (dispatch) => {
    //callback
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

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
