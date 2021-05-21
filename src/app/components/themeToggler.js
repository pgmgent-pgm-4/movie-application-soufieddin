import React, { useContext } from 'react';
import { ThemeContext } from "../libs/context";
import './themeToggler.css'


const ThemeToggler = () => {

    const {theme, setTheme} = useContext(ThemeContext);

    const handleThemeToggle = (e) => {
      e.preventDefault();

      setTheme(theme === 'light'? 'dark' : 'light');
    }

    return(
        <button className="themetoggler" data-btn = {theme} onClick={handleThemeToggle}>
            <span role="img" aria-label="switch theme" >
              {theme === 'dark'? 'Dark Mode' : 'Light Mode'}
            </span>
        </button>
    )
}

export default ThemeToggler;


