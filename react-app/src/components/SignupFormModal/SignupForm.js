import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import styles from './signupform.module.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(""); 
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(firstname, lastname, avatar, email, password));
    }
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.formContainer}>

    <form onSubmit={onSignUp}>
      <div className={styles.choosebro}>
          <label>Choose Your Bro</label>
          <br/>
          <input type="radio" name="avatar" 
          value="https://i.ibb.co/fHx1v4N/Screen-Shot-2021-05-05-at-10-14-43-AM.png"
          onChange={updateAvatar} />
         
        <img className={styles.avatar} src="https://i.ibb.co/fHx1v4N/Screen-Shot-2021-05-05-at-10-14-43-AM.png" />
          

        <input type="radio" name="avatar"
          value="https://i.ibb.co/V2WNZj2/Screen-Shot-2021-05-04-at-2-42-43-PM.png"
          onChange={updateAvatar} />
        
          <img className={styles.avatar} src="https://i.ibb.co/V2WNZj2/Screen-Shot-2021-05-04-at-2-42-43-PM.png" />
       

        <input type="radio" name="avatar"
          value="https://i.ibb.co/hgZWqxp/Screen-Shot-2021-05-04-at-2-42-56-PM.png"
          onChange={updateAvatar} />
        
          <img className={styles.avatar} src="https://i.ibb.co/hgZWqxp/Screen-Shot-2021-05-04-at-2-42-56-PM.png" />
        
      </div>
      <div className={styles.firstname}>
        <label>First Name</label>
        <select name="firstname" onChange={updateFirstname} value={firstname}>
          <option value='' disabled>select a name</option>
          <option value="Chad">Chad</option>
          <option value="Kyle">Kyle</option>
          <option value="Chris">Chris</option>
        </select>
      </div>
      <div className={styles.lastname}> 
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          onChange={updateLastname}
          value={lastname}
        ></input>
      </div>
      
      <div className={styles.email}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className={styles.password}>
        <label>Password</label>
        <input
          type="password"
          placeholder="prob not 'password'"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
        <div className={styles.rpassword}>
        <label>Repeat Password</label>
        <input
          type="password"
          placeholder="or maybe..."
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className={styles.submitbutton} type="submit">Sign Up</button>
    </form>
 </div>
  );
};

export default SignUpForm;