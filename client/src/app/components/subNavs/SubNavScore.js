import {useContext, useEffect, useState} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";


import styles from './SubNav.module.scss';



const SubNavScore = ({setScoreHigh, setScoreLow}) => {
  const {theme} = useContext(ThemeContext);
  const [active, setActive] = useState('All');

  const handleNav = (scoreH,scoreL,e) =>{
    setScoreHigh(scoreH);
    setScoreLow(scoreL);
    setActive(e);

  }

  
  return (
    <div className = 'container'>
      <ul  className={classNames(styles.subnav, `${theme === 'dark' ? styles.subnav__dark : styles.subnav__light}`)}> 
      <li  className={classNames(styles.subnav__subItem ,`${active === 'All' ? styles.active : ''}`)} onClick={() => handleNav(10, 0,'All')}>All</li>
      <li  className={classNames(styles.subnav__subItem ,`${active === 'With a score between 6 and 10' ? styles.active : ''}`)} onClick={() => handleNav(10, 6,'With a score between 6 and 10')}>With a score between 6 and 10</li>
      <li  className={classNames(styles.subnav__subItem ,`${active === 'With a score between 0 and 6' ? styles.active : ''}`)} onClick={() => handleNav(6, 0,'With a score between 0 and 6')}>With a score between 0 and 6</li>
      </ul>
    </div>

  )
}

export default SubNavScore;
