import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterScreen = () => {


  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password:"",
    password2:"",
  });

  const {name, email, password, password2} = formValues

  const handleSumit = (e) =>{
    e.preventDefault();
    console.log(name, email, password, password2)
    //reset();
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>

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
