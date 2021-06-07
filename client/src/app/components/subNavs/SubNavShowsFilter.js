import {useContext, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";


import styles from './SubNav.module.scss';
import { useFetch } from "../../hooks";


const SubNavShowsFilter = ({setType, setGenre}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('All');
  let url = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const [filterGenres, isGenresLoading] = useFetch(url);
  const resultGenres = filterGenres && filterGenres.genres;

  const handleNav = (genre,type,e) =>{
    setGenre(genre);
    setType(type);
    setActive(e);

  }

  
  return (
    <div className = 'container'>
      <ul  className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}> 
      <li  className={classNames(styles.subnav__subItem ,`${active === 'All' ? styles.active : ''}`)} onClick={() => handleNav(+0, 'tv','All')}>All</li>

        {isGenresLoading || !filterGenres ? <div>Loading...</div> : resultGenres.map(element => (
          <li key = {element.id} className={classNames(styles.subnav__subItem ,`${active === `${element.name}` ? styles.active : ''}`)} onClick={() => handleNav(parseInt(`${element.id}`), 'tv',`${element.name}`)}>{element.name}</li>
        ))}
      </ul>
    </div>

  )
}

export default SubNavShowsFilter;
