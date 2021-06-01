import {useContext, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavShows = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('Popular Tv Shows');

  const handleNav = (request,type,e) =>{
    setSelected(request);
    setType(type);
    setActive(e);
  }

  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li className={classNames(`${active === 'Popular Tv Shows' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_popular_shows, 'tv')}>Popular Tv Shows</li> 
        <li className={classNames(`${active === 'On Tv' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_OnTv_shows, 'tv')}>On Tv</li>
        <li className={classNames(`${active === 'Top Rated Tv Shows' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_bestRated_shows, 'tv')}>Top Rated Tv Shows</li> 
      </ul>
    </div>
  )
}

export default SubNavShows;
