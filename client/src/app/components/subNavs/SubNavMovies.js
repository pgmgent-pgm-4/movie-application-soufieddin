import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavMovies = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  
  const handleNav = (request,type) =>{
    setSelected(request);
    setType(type);
  }
  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li onClick={() => handleNav(requests.fetch_popular_movies, 'movie')}>Popular Movies</li> 
        <li onClick={() => handleNav(requests.fetch_upComming_movies, 'movie')}>Upcoming Movies</li>
        <li onClick={() => handleNav(requests.fetch_bestRated_movies, 'movie')}>Top Rated Movies</li> 
      </ul>
    </div>

  )
}

export default SubNavMovies
