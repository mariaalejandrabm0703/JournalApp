import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";

import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [cheking, setcheking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    // retornar un observable que es un tipo de objeto especial
    // que se puede disparar mas de una vez
    // si la autenticacion se ejecuta o cambia
    // el callback siempre se va a ejecutar
    // el observable se queda escuchando siempre el cambio
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setisLoggedIn(false);
      }

      setcheking(false);
    });
  }, [dispatch, setcheking, setisLoggedIn]);

  if (cheking) {
    return <h1>Wait...</h1>;
    // colocar la pagina de espera o un loading
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/journal"
            component={JournalScreen}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
