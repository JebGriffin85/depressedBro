import React, { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Homepage from './components/Homepage/index';
import SinglePost from './components/SinglePost/index';
import ProfilePage from './components/ProfilePage/index';
import Accordion from './components/Accordian/index';
import ButtonPage from './components/ButtonPage/index';
import Phase2 from './components/Phase2/index';

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
      <Accordion />
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
        <Route path='/phase1'>
          <ButtonPage />
        </Route>
        <Route path='/p111555444333'>
          <Phase2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
