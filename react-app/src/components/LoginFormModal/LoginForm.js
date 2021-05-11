import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import styles from "./loginform.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.formContainer}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <form onSubmit={onLogin}>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <br />
          <input
          
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <br />
        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <br />
          <input 
           
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <br/>
          <div className={styles.button}>

          <button type="submit">Login</button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default LoginForm;
