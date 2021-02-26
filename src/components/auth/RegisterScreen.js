import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    name: "Maria",
    email: "maria@gmail.com",
    password: "12345",
    password2: "12345",
  });

  const { name, email, password, password2 } = formValues;

  const handleSumit = (e) => {
    //no propagacion del formulario por la url
    e.preventDefault();
    console.log(name, email, password, password2);
    if (isFormValid()) {
      console.log("formulario valido");
    } else {
      console.log("formulario invalido");
    }
  };

  const isFormValid = () => {
    if (name.trim().length <= 1) {
      dispatch(setError("name invalid"))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email invalid"))
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("password invalid"))
      return false;
    }
    dispatch(removeError())
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <div className="auth__alert-error">Hola mundo</div>

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
