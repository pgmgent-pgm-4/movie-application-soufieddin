import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../libs/context";

import styles from './SubNav.module.scss';

const SubNav = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
      <li>Trending</li>
      <li>Latest Movies</li> 
      <li>Popular Movies</li> 
      <li>Latest Tv Shows</li> 
      <li>Popular Tv Shows</li> 
    </ul>
  )
}

export default SubNav
