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
import AllPosts from './components/AllPosts/index';
import ShowSearchResults from './components/SearchResults/index';

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
        <Route path='/allposts'>
          <AllPosts />
        </Route>
        <Route path='/search/:query'>
          <ShowSearchResults />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
