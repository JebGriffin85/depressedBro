import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import PostForm from './components/auth/PostForm'
import User from "./components/User";
import { authenticate } from "./store/session";
import Homepage from './components/Homepage/index';
import SinglePost from './components/SinglePost/index';
import ProfilePage from './components/ProfilePage/index';

function App() {

  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <Homepage/>
        </Route>
        <Route path='/posts/:id' exact={true}>
          <SinglePost />
        </Route>
        <ProtectedRoute path='/profile'>
          <ProfilePage/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
