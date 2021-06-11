import {useContext, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavShows = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('Popular');

  const handleNav = (request,type,e) =>{
    setSelected(request);
    setType(type);
    setActive(e);
  }

  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Popular' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_popular_shows, 'tv', 'Popular')}>Popular</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'On Tv' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_OnTv_shows, 'tv', 'On Tv')}>On Tv</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Top Rated' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_bestRated_shows, 'tv', 'Top Rated')}>Top Rated</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Action' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_action_tv, 'tv', 'Action')}>Action</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Animation' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_animation_tv, 'tv', 'Animation')}>Animation</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Comedy' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_comedy_tv, 'tv', 'Comedy')}>Comedy</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Crime' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_crime_tv, 'tv', 'Crime')}>Crime</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Drama' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_drama_tv, 'tv', 'Drama')}>Drama</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Family' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_family_tv, 'tv', 'Family')}>Family</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Kids' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_kids_tv, 'tv', 'Kids')}>Kids</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Mystery' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_mystery_tv, 'tv', 'Mystery')}>Mystery</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Reality' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_reality_tv, 'tv', 'Reality')}>Reality</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Talk' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_talk_tv, 'tv', 'Talk')}>Talk</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'War' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_war_tv, 'tv', 'War')}>War</li>

      </ul>
    </div>
  )
}

export default SubNavShows;
