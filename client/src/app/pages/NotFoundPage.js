import { useHistory } from "react-router-dom";

import * as Routes from '../routes';

import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <main className={styles.fullContainer}>
      <div className={styles.fof}>
        
        <div className={styles.fof__callToActions}>
          <p>404 Page Not Found</p>
          <div className={styles.fof__callToActions__btns}>
          <button className={styles.fof__callToActions__btns__btn} onClick={() => history.push(Routes.LANDING, { from: "NotFoundPage" })}>Home</button>
          <button className={styles.fof__callToActions__btns__btn} onClick={() => history.goBack() }>Back</button>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;