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
import { Account, HomePage, Movies, Search, Shows } from "./pages";
import styles from './App.module.scss';





const App = () => {
  
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={classNames(styles.app, `${theme === 'dark' ? styles.app__dark : styles.app__light}`)}>
        <Router>
          <Switch>
          <Route exact path = {Routes.Account}>
              <Account />
            </Route>
            <Route exact path = {Routes.SEARCH}>
              <Search />
            </Route>
            <Route exact path = {Routes.SHOWS}>
              <Shows />
            </Route>
            <Route exact path = {Routes.MOVIES}>
              <Movies />
            </Route>
            <Redirect from={Routes.HOME} to={Routes.LANDING}/>
            <Route exact path = {Routes.LANDING}>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
