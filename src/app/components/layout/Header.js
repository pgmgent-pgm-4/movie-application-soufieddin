import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../libs/context";
import MainNav from "./MainNav";
import styles from "./Header.module.scss";

const Header = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <header className={classNames(styles.header, `${theme === 'dark' ? styles.header__dark : styles.header__light}`)}>
      <div className="container">
        <MainNav />
      </div>
    </header>
  )
}

export default Header
