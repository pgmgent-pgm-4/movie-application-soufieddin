import { NavLink } from "react-router-dom";
import {useContext, useState} from "react";
import classNames from "classnames";
import * as Routes from '../../../routes';
import { ThemeContext } from "../../../libs/context";
import ThemeToggler from "../../theme/themeToggler";
import styles from "./MainNav.module.scss";


const MainNav = () => {
  const {theme} = useContext(ThemeContext);
  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    setQuery(e.target.value);
    console.log(query);
  }
  return (
    <nav className={classNames(styles.nav, `${theme === 'dark' ? styles.nav__dark : styles.nav__light}`)}>
    <ul className={styles.nav__list} >
      <div className={classNames(styles.nav__list__logo, `${theme === 'dark' ? styles.nav__list__logo__dark : styles.nav__list__logo__light}`)}> 
        <li>
          <NavLink  to={Routes.LANDING} activeClassName="active">Movielix</NavLink>
        </li>
      </div>
      <div className={styles.nav__list__films}>
        <li>
          <NavLink  to={Routes.MOVIES} activeClassName="active">Movies</NavLink>
        </li>
        <li>
          <NavLink  to={Routes.SHOWS} activeClassName="active">Tv Shows</NavLink>
        </li>
        <li>
          <NavLink exact  to={Routes.Account} activeClassName="active">Account</NavLink>
        </li>
      </div>
      <div className={styles.nav__list__other}>
        <li className={classNames(styles.nav__list__other__search, `${theme === 'dark' ? styles.nav__list__other__search__dark : styles.nav__list__other__search__light}`)}>
          <input type='text' value={`${query}`} placeholder='Search... ' onChange={handleInput}/>
          <NavLink   to={`/search?query=${query}`} activeClassName="active"><button disabled={!query}>Search</button></NavLink>
        </li>
        <ThemeToggler />
      </div>
    </ul>
  </nav>
  )
}

export default MainNav
