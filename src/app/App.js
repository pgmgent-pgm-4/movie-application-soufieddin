import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React,{useState} from 'react';
import classNames from 'classnames';
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
          <Route path = '/account'>
              <Account />
            </Route>
            <Route path = '/search'>
              <Search />
            </Route>
            <Route path = '/shows'>
              <Shows />
            </Route>
            <Route path = '/movies'>
              <Movies />
            </Route>
            <Route path = '/'>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
