import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavHome = ({setSelected, setType = ''}) => {
  const {theme} = useContext(ThemeContext);
  const handleNav = (request,type) =>{
    setSelected(request);
    setType(type);
  }
  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
      <li onClick={() => handleNav(requests.fetch_trending)}>Trending</li>
      <li onClick={() => handleNav(requests.fetch_now_movies, 'movie')}>Now Playing Movies</li> 
      <li onClick={() => handleNav(requests.fetch_now_shows, 'tv')}>Now Playing Tv Shows</li> 
    </ul>
    </div>

    
  )
}

export default SubNavHome
