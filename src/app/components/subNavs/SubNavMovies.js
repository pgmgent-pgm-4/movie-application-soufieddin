import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import requests from '../../api/requests';

import styles from './SubNav.module.scss';

const SubNavMovies = ({setSelected, setType}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className = 'container'>
      <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
        <li onClick={function() {setSelected(requests.fetch_popular_movies); setType('movie');}}>Popular Movies</li> 
        <li onClick={function() {setSelected(requests.fetch_upComming_movies); setType('movie');}}>Upcoming Movies</li>
        <li onClick={function() {setSelected(requests.fetch_bestRated_movies); setType('movie')}}>Top Rated Movies</li> 
      </ul>
    </div>

  )
}

export default SubNavMovies
