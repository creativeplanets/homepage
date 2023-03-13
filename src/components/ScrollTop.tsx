import { useEffect } from 'react';

import styles from '@/styles/components/ScrollTop.module.scss';
import Rocket from '@/assets/scroll-top/Rocket.svg';

export default function ScrollTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <button
      className={styles.rocket}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
    >
      <img src={Rocket.src} alt="scroll-top" />
    </button>
  );
}
