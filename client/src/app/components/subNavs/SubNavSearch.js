import {useContext, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";


import styles from './SubNav.module.scss';


const SubNavSearch = ({setType}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('Movies');

  
  const handleNav = (type,e) =>{
    setType(type);
    setActive(e);
  }
  return (
     <div className = 'container'>
    <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
      <li onClick={() => handleNav( 'movie','Movies')} className={classNames(`${active === 'Movies' ? styles.active : ''}`)}>Movies</li> 
      <li  onClick={() => handleNav( 'tv','Tv Shows')} className={classNames(`${active === 'Tv Shows' ? styles.active : ''}`)}>Tv Shows</li>
    </ul>
  </div> 
    

  )
}

export default SubNavSearch;
