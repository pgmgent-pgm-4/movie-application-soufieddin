import { Link } from "react-router-dom";
import ThemeToggler from "../themeToggler";
import styles from "./MainNav.module.scss";


const MainNav = () => {
  return (
    <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <div className={styles.nav__list__logo}> 
        <li>
          <Link to='/'>Logo</Link>
        </li>
      </div>
      <div className={styles.nav__list__films}>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/shows'>Tv Shows</Link>
        </li>
      </div>
      <div className={styles.nav__list__other}>
        <li>
          <Link to='/account'>Account</Link>
        </li>
        <li>
          <input type = 'text' placeholder='Search... '/>
          <Link to='/search'><button>Search</button></Link>
        </li>
        <ThemeToggler />
      </div>
    </ul>
  </nav>
  )
}

export default MainNav
