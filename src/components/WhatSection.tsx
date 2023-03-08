import styles from '../styles/What.module.css';
import Card from '@/components/What';
import planet1 from '../assets/what/planet1.svg';
import planet2 from '../assets/what/planet2.svg';
import planet3 from '../assets/what/planet3.svg';
import planet4 from '../assets/what/planet4.svg';
import planet5 from '../assets/what/planet5.svg';
import planet6 from '../assets/what/planet6.svg';

const CardContent = [
  {
    id: 1,
    subtitle: 'UX研究與設計',
    content:
      '地基要打好，房子才蓋得好。使用者體驗是所有產品的基石，透過使用者研究流程鎖定目標使用者，找尋真實的需求與痛點，塑造出最好的服務設計，提升整體服務價值，增進使用者滿意度。',
    image: planet1,
  },
  {
    id: 2,
    subtitle: 'UI設計',
    content:
      '想要美美的網頁來抓住使用者的目光嗎? 我們不只能夠達成您對網站視覺的期望，也能為您打造引人矚目的品牌形象，同時也遵循 Google 制定的設計規範，提供給您兼具美感以及人性化的最佳視覺體驗，為您製作一流的UI設計。',
    image: planet2,
  },
  {
    id: 3,
    subtitle: '客製化系統開發',
    content:
      '我們的工程團隊由一群技術狂熱者組成，致力於用新興技術打造高效能及優異使用者體驗的服務，擔心太多人使用流量爆炸嗎？害怕不好的程式碼造成網站卡頓嗎？交給我們就對了！',
    image: planet3,
  },
  {
    id: 4,
    subtitle: '前端應用開發',
    content:
      '對現有的服務不滿意嗎？我們協助用戶尋找現有服務的痛點，並定義關鍵問題，釐清服務旅程，並解決核心問題，改善使用者體驗，打造出更好的服務。',
    image: planet4,
  },
  {
    id: 5,
    subtitle: '跨平台應用開發',
    content:
      '跨平台的使用者體驗一致性是我們追求的目標，我們利用前瞻的技術讓使用者不論是 在 Web、iOS、Android 抑或是 Windows、MacOS 甚至是 Linux 都能有相同的體驗，減少重新學習成本，降低疑惑，並提升使用者對 App 的安全感與滿意度，建立信任。',
    image: planet5,
  },
  {
    id: 6,
    subtitle: '改造與重新設計',
    content:
      '對現有的服務不滿意嗎？我們協助你尋找現有服務的痛點，並定義關鍵問題，釐清服務旅程，並解決核心問題，改善使用者體驗，打造出更好的服務。',
    image: planet6,
  },
];

export default function WhatSection() {
  return (
    <div style={{ margin: '64px 0 88px' }}>
      <div className={styles.title}>WHAT WE DO ?</div>
      <div className={styles.background}>
        <div className={styles.cardContainer}>
          {CardContent.map((v, i) => {
            return (
              <Card
                key={i}
                subtitle={v.subtitle}
                content={v.content}
                image={v.image}
                planetClass={`${styles[`planet${i}`]}`}
              ></Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
