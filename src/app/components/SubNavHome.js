import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../libs/context";
import requests from '../api/requests';

import styles from './SubNav.module.scss';

const SubNavHome = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
      <li onClick={() => setSelected(requests.fetch_trending)}>Trending</li>
      <li onClick={function() {setSelected(requests.fetch_now_movies); setType('movie');}}>Now Playing Movies</li> 
      <li onClick={function() {setSelected(requests.fetch_popular_movies); setType('movie');}}>Popular Movies</li> 
      <li onClick={function() {setSelected(requests.fetch_now_shows); setType('tv');}}>Now Playing Tv Shows</li> 
      <li onClick={function() {setSelected(requests.fetch_popular_shows); setType('tv');}}>Popular Tv Shows</li> 
    </ul>
    </div>

    
  )
}

export default SubNavHome
