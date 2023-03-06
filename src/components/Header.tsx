import style from '../styles/Header.module.css'
import Button from './Button'

export default function Header() {
  return (
    <>
      <div className={style.sky}></div>
      <div className={style.items}></div>
      {/* <div className={style.skyShadow}></div> */}
      <div className={style.welcome}>
        Welcome to
        <br />
        our <span className={style.text_shadow}>Planets</span> !
        <div>
          <Button title="See more"></Button>
        </div>
      </div>
      {/* <div className={style.white}></div> */}
    </>
  )
}
