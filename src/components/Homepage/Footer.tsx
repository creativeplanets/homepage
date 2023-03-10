import style from '@/styles/pages/Homepage/Footer.module.scss';
import logo from '@/assets/footer/logo.svg';
import Button from '../Button';
import hollowText from '@/assets/footer/hollowText.png';

export default function Footer() {
  return (
    <>
      <div className={style.footerDiv}>
        <div className={style.sky}></div>
        <div className={style.items}></div>
        <div className={style.contact}>
          <div className={style.contact__title}>CONTACT</div>
          <img
            src={hollowText.src}
            alt="START A PROJECT WITH US !"
            className={style.contact__caption}
          ></img>
          <div className={style.contact__mail}>xxx@iisigroup.com</div>
          <Button title="EMAIL US" corner={true} />
        </div>
        <div className={style.about}>
          <div className={style.about__leftDiv}>
            <img src={logo.src} alt="Logo" className={style.about__logo} />
            <div className={style.about__slogan}>
              WE MAKE PAWSIBLE TO STAND <br />
              OUT FROM THIS CROWDED WORLD .
            </div>
          </div>
          <div className={style.about__rightDiv}>
            <div className={style.about__info}>
              台北市松山區民生東路4段133號11樓
              <br />
              <br /> Mon - Fri / 09:00 - 18:00 <br />
              <br />
              xxx@iisigroup.com
            </div>
            <div className={style.about__copyright}>Copyright © 2023 IISI.</div>
          </div>
        </div>
      </div>
    </>
  );
}
