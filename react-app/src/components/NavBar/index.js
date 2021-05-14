import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";
import PostFormModal from '../../components/CreatePostModal';
import { demoLogin } from '../../store/session';
import styles from './NavBar.module.css';
import Footer from '../Footer/index';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const demoChad = async () => {
    await dispatch(demoLogin())
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
     
        <div className={styles.post}>
          <PostFormModal />
        </div>
        <div className={styles.profile}>
          <NavLink to='/profile'>
            My Profile
          </NavLink>
        </div>
        <div className={styles.logout}>
          <NavLink to='/'>
            <LogoutButton />
          </NavLink>
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <div className={styles.login}>
          <LoginFormModal/>
        </div>
        <div className={styles.signup}>
          <SignupFormModal/>
        </div>
       <div className={styles.demo}>
         <a onClick={demoChad}>Demo Chad</a>
       </div>
      </>
    );
  }
  return (
    <>
    <Footer className={styles.footer} />
    <nav className={styles.nav} >
 
          <div className={styles.home}>
            <NavLink to="/">
              Home
            </NavLink>
          </div>
          
          {sessionLinks}
    </nav>
    </>
  );
}

export default NavBar;
