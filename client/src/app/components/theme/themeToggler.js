import React, { useContext } from 'react';
import { ThemeContext } from "../../libs/context";
import styles from './themeToggler.module.scss';


const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeToggle = (e) => {
      e.preventDefault();
      const newTheme = theme === 'light'? 'dark' : 'light' ;
      setTheme(newTheme);
      window.localStorage.setItem('theme',newTheme);
    }

    return(
        <button className={styles.themetoggler} onClick={handleThemeToggle}>
            <span role="img" aria-label="switch theme" >
              {theme === 'dark'? '🔅' : '🌞'}
            </span>
        </button>
    )
}

export default ThemeToggler;


