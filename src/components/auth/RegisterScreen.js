import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import { registerUserByNameEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { messageError } = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    name: "Maria",
    email: "maria@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleSumit = (e) => {
    //no propagacion del formulario por la url
    e.preventDefault();
    console.log(name, email, password, password2);
    if (isFormValid()) {
      console.log("formulario valido");
      dispatch(registerUserByNameEmailPassword(name, email, password));
    } 
  };

  const isFormValid = () => {
    if (name.trim().length <= 1) {
      dispatch(setError("Name invalid"))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email invalid"))
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Password invalid"))
      return false;
    }
    dispatch(removeError())
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      {
        messageError &&
        <div className="auth__alert-error">{messageError}</div>
      }

      <form onSubmit={handleSumit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className="auth__input"
          autoComplete="off"
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="auth__input"
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          className="auth__input"
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
