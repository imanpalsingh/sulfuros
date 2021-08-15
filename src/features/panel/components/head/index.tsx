import { useMemo } from 'react';
import { HeadMeasurements } from '../../../../config/Measurements';
import { HeadProps } from '../../types/Head';
import { Close } from '../../../action';
import Styles from './index.module.css';

const Head = ({ size: { width } }: HeadProps) => {
  const dimensions = useMemo(() => {
    return {
      width: `${width * HeadMeasurements.ToPanelRatio}px`,
    };
  }, [width]);
  return (
    <div className={Styles.Head} style={{ ...dimensions }}>
      <Close />
    </div>
  );
};

export default Head;
