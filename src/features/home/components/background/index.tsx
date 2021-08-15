import { HomeProps } from '../../types/home';
import styles from './index.module.css';

const Home = ({ backgroundImage, children }: HomeProps) => {
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
};

export default Home;
