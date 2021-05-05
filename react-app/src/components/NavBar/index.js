import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { useHistory } from "react-router-dom";
import PostFormModal from '../../components/CreatePostModal';

const NavBar = () => {
  const history = useHistory();

  const sessionUser = useSelector(state => state.session.user);



  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <LogoutButton />
        <PostFormModal />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        <SignupFormModal/>

      </>
    );
  }
  return (
    <nav >
          <NavLink to="/">
            Home
          </NavLink>
          
          {sessionLinks}
    </nav>
  );
}

export default NavBar;
