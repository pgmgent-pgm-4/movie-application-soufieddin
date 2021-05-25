import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavShows = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);

  const handleNav = (request,type) =>{
    setSelected(request);
    setType(type);
  }

  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li onClick={() => handleNav(requests.fetch_popular_shows, 'tv')}>Popular Tv Shows</li> 
        <li onClick={() => handleNav(requests.fetch_OnTv_shows, 'tv')}>On Tv</li>
        <li onClick={() => handleNav(requests.fetch_bestRated_shows, 'tv')}>Top Rated Tv Shows</li> 
      </ul>
    </div>
  )
}

export default SubNavShows;
