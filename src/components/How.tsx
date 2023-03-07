import styles from "../styles/How.module.css";
import Discovery from "../assets/flow/Discovery.svg";

interface How {}

export default function How(props: How) {
  return (
    <div className={styles.flowContainer}>
      <img
        className={styles.left}
        src={Discovery.src}
        alt="flow"
        width="685"
        height="627"
      />
      <div className={styles.right}>
        <div className={styles.title}>HOW WE DO ?</div>
        <div className={styles.body}>
          <div className={styles.subtitle}>探索需求</div>
          <div className={styles.verticalLine}></div>
          <div className={styles.content}>
            我們的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，在探索需求的過程建立了強大的基礎
          </div>
        </div>
      </div>
      <div className={styles.step}>01</div>
    </div>
  );
}
