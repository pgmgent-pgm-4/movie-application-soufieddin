import { Link } from "react-router-dom";
import {useContext} from "react";
import classNames from "classnames";
import * as Routes from '../../routes';
import { ThemeContext } from "../../libs/context";
import ThemeToggler from "../themeToggler";
import styles from "./MainNav.module.scss";


const MainNav = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <nav className={classNames(styles.nav, `${theme === 'dark' ? styles.nav__dark : styles.nav__light}`)}>
    <ul className={styles.nav__list}>
      <div className={classNames(styles.nav__list__logo, `${theme === 'dark' ? styles.nav__list__logo__dark : styles.nav__list__logo__light}`)}> 
        <li>
          <Link to={Routes.LANDING}>Movielix</Link>
        </li>
      </div>
      <div className={styles.nav__list__films}>
        <li>
          <Link to={Routes.MOVIES}>Movies</Link>
        </li>
        <li>
          <Link to={Routes.SHOWS}>Tv Shows</Link>
        </li>
        <li>
          <Link to={Routes.Account}>Account</Link>
        </li>
      </div>
      <div className={styles.nav__list__other}>
        <li className={classNames(styles.nav__list__other__search, `${theme === 'dark' ? styles.nav__list__other__search__dark : styles.nav__list__other__search__light}`)}>
          <input type = 'text' placeholder='Search... '/>
          <Link to={Routes.SEARCH}><button>Search</button></Link>
        </li>
        <ThemeToggler />
      </div>
    </ul>
  </nav>
  )
}

export default MainNav
