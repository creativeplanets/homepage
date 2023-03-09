import styles from '../styles/How.module.css';
import Planet from '../assets/how/Planet.svg';

export default function How() {
  return (
    <div className={styles.container}>
      <div className={styles.title_sm}>HOW WE DO ?</div>
      <div className={styles.flow}>
        <img className={styles.planet} src={Planet.src} alt="flow" />
        <div className={styles.right}>
          <div className={styles.title}>HOW WE DO ?</div>
          <div className={styles.subtitle}>探索需求</div>
          <div className={styles.vertical__line}></div>
          <div className={styles.content}>
            在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。
          </div>
        </div>
      </div>
    </div>
  );
}
