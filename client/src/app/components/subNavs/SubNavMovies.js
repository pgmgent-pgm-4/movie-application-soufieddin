import {useContext, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';


const SubNavMovies = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('Popular Movies');

  
  const handleNav = (request,type,e) =>{
    setSelected(request);
    setType(type);
    setActive(e);
  }

  
  return (
    <div className = 'container'>
      <ul  className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li className={classNames(`${active === 'Popular Movies' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_popular_movies, 'movie','Popular Movies')}>Popular Movies</li> 
        <li className={classNames(`${active === 'Upcoming Movies' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_upComming_movies, 'movie','Upcoming Movies')}>Upcoming Movies</li>
        <li className={classNames(`${active === 'Top Rated Movies' ? styles.active : ''}`)} onClick={() => handleNav(requests.fetch_bestRated_movies, 'movie','Top Rated Movies')}>Top Rated Movies</li> 
      </ul>
    </div>

  )
}

export default SubNavMovies;
