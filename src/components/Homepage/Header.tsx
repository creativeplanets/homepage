import style from '@/styles/pages/Homepage/Header.module.scss';
import Button from '../Button';
import planet from '../../assets/header/planet.svg';

export default function Header() {
  return (
    <>
      <div className={style.sky}>
        <object data={planet.src} className={style.planet} />
      </div>
      <div className={style.items}></div>

      <div className={style.welcome}>
        <div className={style.welcome__text}>
          Welcome to
          <br />
          our <span className={style.text__shadow}>Planets</span> !
        </div>
        <Button title="See more" class={style.welcome__button}></Button>
      </div>
    </>
  );
}
