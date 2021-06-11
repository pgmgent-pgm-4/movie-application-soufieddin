import {useContext, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';



const SubNavMovies = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('Popular');
  
  
  const handleNav = (request,type,e) =>{
    setSelected(request);
    setType(type);
    setActive(e);
  }

  
  return (
    <div className = 'container'>
      <ul  className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Popular' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_popular_movies, 'movie','Popular')}>Popular</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Upcoming' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_upComming_movies, 'movie','Upcoming')}>Upcoming</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Top Rated' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_bestRated_movies, 'movie','Top Rated')}>Top Rated</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Action' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_action_movies, 'movie','Action')}>Action</li> 
        <li className={classNames(styles.subnav__subItem ,`${active === 'Animation' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_animation_movies, 'movie','Animation')}>Animation</li>  
        <li className={classNames(styles.subnav__subItem ,`${active === 'Comedy' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_comedy_movies, 'movie','Comedy')}>Comedy</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Crime' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_crime_movies, 'movie','Crime')}>Crime</li>  
        <li className={classNames(styles.subnav__subItem ,`${active === 'Drama' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_drama_movies, 'movie','Drama')}>Drama</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Family' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_family_movies, 'movie','Family')}>Family</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Fantasy' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_fantasy_movies, 'movie','Fantasy')}>Fantasy</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Horror' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_horror_movies, 'movie','Horror')}>Horror</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Mystery' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_mystery_movies, 'movie','Mystery')}>Mystery</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'Thriller' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_thriller_movies, 'movie','Thriller')}>Thriller</li>
        <li className={classNames(styles.subnav__subItem ,`${active === 'War' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_war_movies, 'movie','War')}>War</li>  

      </ul>
    </div>

  )
}

export default SubNavMovies;
