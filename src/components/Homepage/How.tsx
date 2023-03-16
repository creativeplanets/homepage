import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles/pages/Homepage/How.module.scss';
import Planet from '@/assets/how/Planet.svg';
import UFO from '@/assets/how/UFO.svg';

import InnerDiscovery from '@/assets/how/InnerDiscovery.png';
import InnerPlanning from '@/assets/how/InnerPlanning.png';
import InnerDesign from '@/assets/how/InnerDesign.png';
import InnerProgramming from '@/assets/how/InnerProgramming.png';
import InnerTesting from '@/assets/how/InnerTesting.png';
import InnerLaunch from '@/assets/how/InnerLaunch.png';

export default function How() {
  const How = [
    {
      title: 'discovery',
      subtitle: '探索需求',
      content:
        '在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。',
      inner: InnerDiscovery,
      animate: { offsetDistance: '0%', offsetRotate: '0deg' },
    },
    {
      title: 'planning',
      subtitle: '策略與規劃',
      content:
        '們將運用探索階段搜集到的資訊做為基礎，針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。',
      inner: InnerPlanning,
      animate: { offsetDistance: '20%', offsetRotate: '0deg' },
    },
    {
      title: 'design',
      subtitle: '介面設計',
      content:
        '在設計階段，我們會與你一起發揮創意決定視覺風格，包含顏色及各種元素，先從首頁的設計開始，透過制定介面設計規範確認整體外觀與感覺，並依照需求進一步幫你設計出專屬的背景、圖案或動畫，確認完首頁的設計後，我們將持續設計其餘所需的頁面。',
      inner: InnerDesign,
      animate: { offsetDistance: '40%', offsetRotate: '0deg' },
    },
    {
      title: 'programming',
      subtitle: '程式開發',
      content:
        '我們的工程團隊會依據系統需求規格書和介面設計規範選擇最適合的程式語言及框架進行開發，並在所有常見的平台測試，確保沒有任何程式錯誤且使用者體驗一致，也會在開發的過程中持續調教程式效能，優化體驗。',
      inner: InnerProgramming,
      animate: { offsetDistance: '60%', offsetRotate: '0deg' },
    },
    {
      title: 'testing',
      subtitle: '系統測試',
      content:
        '測試是所有流程中最關鍵的階段，我們會在系統上線之前進行全面的 QA 流程，檢查所有功能和內容並修正錯誤，也會邀請使用者一起參與 QA 流程，嘗試著找出不易發現的錯誤，確保系統正確無誤滿足期望。',
      inner: InnerTesting,
      animate: { offsetDistance: '80%', offsetRotate: '0deg' },
    },
    {
      title: 'launch',
      subtitle: '正式上線',
      content:
        '經過漫長的努力終於要上線啦！在正式上線前我們會做最後一次的測試，確認所有功能和內容無誤後正式發佈到網路上，也能持續優化系統和進行後續維護需求。',
      inner: InnerLaunch,
      animate: { offsetDistance: '100%', offsetRotate: '0deg' },
    },
  ];
  const [scrollHeight, setScrollHeight] = useState(0);
  const [subtitle, setSubtitle] = useState(How[0].subtitle);
  const [content, setContent] = useState(How[0].content);
  const [inner, setInner] = useState(How[0].inner);
  const [animate, setAnimate] = useState(How[0].animate);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const newScrollHeight = window.pageYOffset;
      setScrollHeight(newScrollHeight);

      const containerTop = containerRef.current.offsetTop;
      const scrollRange = 500;

      for (let i = 0; i < 6; i++) {
        if (newScrollHeight > containerTop + scrollRange * i) {
          setSubtitle(How[i].subtitle);
          setContent(How[i].content);
          setInner(How[i].inner);
          setAnimate(How[i].animate);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.title_xs}>HOW WE DO ?</div>
      <div className={styles.flow}>
        <div className={styles.left}>
          <img src={Planet.src} alt="flow" />
          <div>
            <motion.img
              className={styles.planet__ufo}
              src={UFO.src}
              initial={{ offsetDistance: '0%', offsetRotate: '0deg' }}
              animate={animate}
              transition={{ duration: 1, ease: 'linear' }}
            />
          </div>
          <img src={inner.src} className={styles.planet__inner} alt="inner" />
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
