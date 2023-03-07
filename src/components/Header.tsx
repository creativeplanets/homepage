import style from "../styles/Header.module.css"
import Button from "./Button"

export default function Header() {
  return (
    <>
      <div className={style.sky}></div>
      <div className={style.items}></div>
      <div className={style.welcome}>
        <div className={style.welcome__text}>
          Welcome to
          <br />
          our <span className={style.text_shadow}>Planets</span> !
        </div>
        <div>
          <Button title="See more"></Button>
        </div>
      </div>
    </>
  )
}
