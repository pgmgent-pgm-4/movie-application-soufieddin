import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavShows = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li onClick={function() {setSelected(requests.fetch_popular_shows); setType('tv');}}>Popular Tv Shows</li> 
        <li onClick={function() {setSelected(requests.fetch_OnTv_shows); setType('tv');}}>On Tv</li>
        <li onClick={function() {setSelected(requests.fetch_bestRated_shows); setType('tv');}}>Top Rated Tv Shows</li> 
      </ul>
    </div>
  )
}

export default SubNavShows;
