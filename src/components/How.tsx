import { useState, useEffect } from 'react';

import styles from '../styles/How.module.css';
import Planet from '../assets/how/Planet.svg';
import Cycle from '../assets/how/Cycle.svg';

import Discovery from '../assets/how/Discovery.png';
import Planning from '../assets/how/Planning.png';
import Design from '../assets/how/Design.png';
import Programming from '../assets/how/Programming.png';
import Testing from '../assets/how/Testing.png';
import Launch from '../assets/how/Launch.png';

export default function How() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [subtitle, setSubtitle] = useState('探索需求');
  const [content, setContent] = useState(
    '在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。'
  );
  const [inner, setInner] = useState(Discovery);

  useEffect(() => {
    function handleScroll() {
      const newScrollHeight = window.pageYOffset;
      setScrollHeight(newScrollHeight);
      let point = 4200;

      if (window.innerWidth <= 1024) {
        point = 6000;
      }

      setScrollHeight(newScrollHeight);
      if (newScrollHeight > point + 1200) {
        setSubtitle('正式上線');
        setContent(
          '我們運用探索階段搜集到的資訊做為基礎，在此階段，我們將針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。'
        );
        setInner(Launch);
      } else if (newScrollHeight > point + 900) {
        setSubtitle('系統測試');
        setContent(
          '在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。'
        );
        setInner(Testing);
      } else if (newScrollHeight > point + 600) {
        setSubtitle('程式開發');
        setContent(
          '我們運用探索階段搜集到的資訊做為基礎，在此階段，我們將針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。'
        );
        setInner(Programming);
      } else if (newScrollHeight > point + 300) {
        setSubtitle('視覺設計');
        setContent(
          '在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。'
        );
        setInner(Design);
      } else if (newScrollHeight > point) {
        setSubtitle('策略與規劃');
        setContent(
          '我們運用探索階段搜集到的資訊做為基礎，在此階段，我們將針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。'
        );
        setInner(Planning);
      } else if (newScrollHeight > 3700) {
        setSubtitle('探索需求');
        setContent(
          '在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。'
        );
        setInner(Discovery);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rotateDeg = scrollHeight / 10;
  return (
    <div className={styles.container}>
      <div className={styles.title_sm}>HOW WE DO ?</div>
      <div className={styles.flow}>
        <div className={styles.left}>
          <div className={styles.planet}>
            <img src={Planet.src} alt="flow" />
            <img
              src={inner.src}
              className={styles.planet__inner}
              alt="planet__inner"
            />
            <img
              src={Cycle.src}
              alt="planet__cycle"
              className={styles.planet__cycle}
              style={{ transform: `rotate(${rotateDeg}deg)` }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>HOW WE DO ?</div>
          <div className={styles.detail}>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.vertical__line}></div>
            <div className={styles.content}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
