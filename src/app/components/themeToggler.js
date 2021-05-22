import React, { useContext } from 'react';
import { ThemeContext } from "../libs/context";
import styles from './themeToggler.module.scss';


const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeToggle = (e) => {
      e.preventDefault();

      setTheme(theme === 'light'? 'dark' : 'light');
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


