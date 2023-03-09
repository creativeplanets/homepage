import styles from '../styles/What.module.css';
interface What {
  image: any;
  subtitle: string;
  content: string;
  planetClass: string;
}

export default function What(props: What) {
  return (
    <div>
      <img
        className={`${styles.planets} ${props.planetClass}`}
        src={props.image.src}
        alt="props.image"
        width="130"
        height="130"
      />
      <div className={styles.card}>
        <div className={styles.text}>
          <div className={styles.subtitle}>{props.subtitle}</div>
          <div className={styles.content}>{props.content}</div>
        </div>
      </div>
    </div>
  );
}
