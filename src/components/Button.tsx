import styles from '@/styles/components/Button.module.scss';

interface Button {
  title: string;
  corner?: boolean;
  class?: string;
}

export default function Button(props: Button) {
  let style = props.corner ? styles.corner : styles.button;

  if (props.class) {
    style += ' ' + props.class;
  }
  return (
    <button type="button" className={style}>
      {props.title}
    </button>
  );
}
