import { ActionProps } from '../../types/action';
import styles from './index.module.css';

const Action = ({ Icon }: ActionProps) => {
  return (
    <span className={styles.action}>
      <Icon />
    </span>
  );
};

export default Action;
