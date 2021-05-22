import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import React,{useState} from 'react';
import { ThemeContext } from "./libs/context";
import ThemeToggler from './components/themeToggler';
import { Account, HomePage, Movies, Search, Shows } from "./pages";

import styles from './App.module.scss';
import './App.css';





const App = () => {
  
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={styles.app} data-theme = {theme}>
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
