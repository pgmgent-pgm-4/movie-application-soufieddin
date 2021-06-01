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
import { Account, Details, HomePage, Media, Search } from "./pages";
import styles from './App.module.scss';
import { DetailElement, SearchResults } from "./components";





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
            <Route  path = {Routes.SEARCH}>
              <Search component={SearchResults}/>
            </Route>
            <Route  path = {Routes.MEDIA}>
              <Media />
            </Route>
            <Route  path = {Routes.Details}>
              <Details component={DetailElement}/>
            </Route>
            <Redirect from={Routes.HOME} to={Routes.LANDING}/>
            <Route  path = {Routes.LANDING}>
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
