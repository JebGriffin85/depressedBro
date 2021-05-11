import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";
import PostFormModal from '../../components/CreatePostModal';
import styles from './NavBar.module.css';

const NavBar = () => {
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className={styles.logout}>
          <NavLink to='/'>
            <LogoutButton />
          </NavLink>
        </div>
        <div className={styles.post}>
          <PostFormModal />
        </div>
        <div className={styles.profile}>
          <NavLink to='/profile'>
            My Profile
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

      </>
    );
  }
  return (
    <nav className={styles.nav} >
          <div className={styles.home}>
            <NavLink to="/">
              Home
            </NavLink>
          </div>
          
          {sessionLinks}
    </nav>
  );
}

export default NavBar;
