import styles from '../styles/Button.module.css';

interface Button {
  title: string;
  corner?: boolean;
}

export default function Button(props: Button) {
  const style = props.corner ? styles.corner : styles.button;

  return (
    <button type="button" className={style}>
      {props.title}
    </button>
  );
}
