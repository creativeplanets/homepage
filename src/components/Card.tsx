import styles from "../styles/Card.module.css";
import Image from "next/image";
interface Card {
  image: any;
  title: string;
  content: string;
}

export default function Card(props: Card) {
  return (
    <div>
      <Image
        className={styles.planets}
        src={props.image}
        alt="props.image"
        width={130}
        height={130}
      />
      <div className={styles.card}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.content}>{props.content}</div>
      </div>
    </div>
  );
}
