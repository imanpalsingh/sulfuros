import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import Draggable from 'react-draggable';
import { HeadOptions, HeadProps } from '../../types/Head';
import { PanelProps } from '../../types/Panel';
import Head from '../head';
import styles from './index.module.css';

const Panel = ({ children }: PanelProps) => {
  // To be moved to atoms
  const [panelWidth, setPanelWidth] = useState<number>(0);
  const [panelHeight, setPanelHeight] = useState<number>(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const updateSize = () => {
    setPanelWidth(panelRef.current?.clientWidth || 0);
    setPanelHeight(panelRef.current?.clientHeight || 0);
  };

  useEffect(() => {
    let observer = new MutationObserver(updateSize);
    panelRef?.current && observer.observe(panelRef.current, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  const position = useMemo(
    () => ({
      x: 100,
      y: 300,
    }),
    []
  );

  const HeaderState: HeadProps = useMemo(
    () => ({
      options: HeadOptions.Close,
      size: {
        height: panelHeight,
        width: panelWidth,
      },
    }),
    [panelHeight, panelWidth]
  );

  return (
    <Draggable handle="div" defaultPosition={position}>
      <section className={styles['panel-container']} ref={panelRef}>
        <Head {...HeaderState} />
        {children}
      </section>
    </Draggable>
  );
};

export default Panel;
