import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

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
    console.log(avatar);
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

    <form onSubmit={onSignUp}>
      <div>
        <label>First Name</label>
        <select name="firstname" onChange={updateFirstname} value={firstname}>
          <option value='' disabled>select a name</option>
          <option value="Chad">Chad</option>
          <option value="Kyle">Kyle</option>
          <option value="Chris">Chris</option>
        </select>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          onChange={updateLastname}
          value={lastname}
        ></input>
      </div>
      <div>
       
          <input type="radio" name="avatar" 
          value="https://i.ibb.co/CwM7pX5/Screen-Shot-2021-05-04-at-2-42-36-PM.png"
          onChange={updateAvatar} />
         
        <img src="https://i.ibb.co/CwM7pX5/Screen-Shot-2021-05-04-at-2-42-36-PM.png" />
          

        <input type="radio" name="avatar"
          value="https://i.ibb.co/V2WNZj2/Screen-Shot-2021-05-04-at-2-42-43-PM.png"
          onChange={updateAvatar} />
        
        <img src="https://i.ibb.co/V2WNZj2/Screen-Shot-2021-05-04-at-2-42-43-PM.png" />
       

        <input type="radio" name="avatar"
          value="https://i.ibb.co/hgZWqxp/Screen-Shot-2021-05-04-at-2-42-56-PM.png"
          onChange={updateAvatar} />
        
        <img src="https://i.ibb.co/hgZWqxp/Screen-Shot-2021-05-04-at-2-42-56-PM.png" />
        
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
 
  );
};

export default SignUpForm;