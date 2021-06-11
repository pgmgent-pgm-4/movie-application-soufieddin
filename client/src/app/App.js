import { AuthProvider, FirebaseProvider } from './contexts/firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React,{useState} from 'react';
import classNames from 'classnames';
import * as Routes from './routes';
import { ThemeContext } from "./libs/context";
import { Account, Details, HomePage, Media, Search, SignInPage } from "./pages";

import styles from './App.module.scss';
import { DetailElement, SearchResults } from "./components";
import { PrivateRoute } from './utilities';
import { appConfig } from './config';






const App = () => {
  
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'));
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={classNames(styles.app, `${theme === 'dark' ? styles.app__dark : styles.app__light}`)}>
      
    <FirebaseProvider>
      <AuthProvider>
        <Router basename={appConfig.basicURL}>
          <Switch>
            <Route path={Routes.AUTH_SIGN_IN} component={SignInPage}/>
              <PrivateRoute exact path = {Routes.Account} component={Account}/>
              <PrivateRoute  path = {Routes.SEARCH} component={Search }/>
              <PrivateRoute  path = {Routes.Filter}component={Search}/>
              <PrivateRoute  path = {Routes.MEDIA} component={Media}/>
              <PrivateRoute path = {Routes.Details} component={Details}/>
              <Redirect from={Routes.HOME} to={Routes.LANDING}/>
              <PrivateRoute path = {Routes.LANDING} component={HomePage}/>
          </Switch>
        </Router>
      </AuthProvider>
    </FirebaseProvider>
        
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
