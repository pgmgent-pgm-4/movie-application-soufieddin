import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";


import styles from './SubNav.module.scss';
import useQuery from "../../hooks/query";

const SubNavSearch = ({setType}) => {
  const {theme} = useContext(ThemeContext);
  const params = useQuery();
  let word = params.get('keyword');
  let text = params.get('query');
  console.log([word, text])


  
  return (
     <div className = 'container'>
    <ul className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}>
      <li onClick={()=> setType('movie')}>Movies</li> 
      <li onClick={()=> setType('tv')}>Tv Shows</li>
    </ul>
  </div> 
    

  )
}

export default SubNavSearch;
