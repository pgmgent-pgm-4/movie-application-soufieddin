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
        <li className={classNames(`${active === 'Popular' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_popular_shows, 'tv')}>Popular</li> 
        <li className={classNames(`${active === 'On Tv' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_OnTv_shows, 'tv')}>On Tv</li>
        <li className={classNames(`${active === 'Top Rated' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_bestRated_shows, 'tv')}>Top Rated</li> 
        <li className={classNames(`${active === 'Action' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_action_tv, 'tv')}>Action</li> 
        <li className={classNames(`${active === 'Animation' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_animation_tv, 'tv')}>Animation</li> 
        <li className={classNames(`${active === 'Comedy' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_comedy_tv, 'tv')}>Comedy</li> 
        <li className={classNames(`${active === 'Crime' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_crime_tv, 'tv')}>Crime</li> 
        <li className={classNames(`${active === 'Drama' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_drama_tv, 'tv')}>Drama</li> 
        <li className={classNames(`${active === 'Family' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_family_tv, 'tv')}>Family</li> 
        <li className={classNames(`${active === 'Kids' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_kids_tv, 'tv')}>Kids</li> 
        <li className={classNames(`${active === 'Mystery' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_mystery_tv, 'tv')}>Mystery</li> 
        <li className={classNames(`${active === 'Reality' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_reality_tv, 'tv')}>Reality</li> 
        <li className={classNames(`${active === 'Talk' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_talk_tv, 'tv')}>Talk</li> 
        <li className={classNames(`${active === 'War' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_war_tv, 'tv')}>War</li> 
      </ul>
    </div>
  )
}

export default SubNavShows;
