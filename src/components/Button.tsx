import styles from '../styles/Button.module.css'

interface Button {
    title: string
}

export default function Button(props: Button) {
    return (
        <button type='button' className={styles.button}>{props.title}</button>
    )
  }
  