import {useContext} from "react";
import classNames from "classnames";
import { ThemeContext } from "../../../libs/context";

import styles from './Footer.module.scss';
const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <footer className={classNames(styles.footer, `${theme === 'dark' ? styles.footer__dark : styles.footer__light}`)}>
      <div className="container">
        <p>Footer</p>
      </div>
    </footer>
  )
}

export default Footer
