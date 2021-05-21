import React,{useState} from 'react';
import { ThemeContext } from "./libs/context";
import styles from './App.module.scss';
import './App.css';
import ThemeToggler from './components/themeToggler';

const App = () => {
  
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={styles.app} data-theme = {theme}>
      <ThemeToggler />
        <h1>Hello World!</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
