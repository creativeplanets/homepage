import styles from "../styles/How.module.css";
import Planet from "../assets/how/Planet.svg";
import Cycle from "../assets/how/Cycle.svg";
import dynamic from "next/dynamic";
import {
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeOut,
  Move,
  Sticky,
} from "react-scroll-motion";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);

import { Animation } from "react-scroll-motion";

const Spin = (cycle: number) =>
  ({
    in: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  } as Animation);

interface How {}

export default function How(props: How) {
  const Step = batch(Fade(), Move(0, 1000, null, -1000), Sticky(80, 50));
  const Body = batch(
    FadeOut(1, 0.5),
    Move(850, 850, -10, -850),
    Sticky(65, 85)
  );

  return (
    <div className={styles.flowContainer}>
      <img
        className={styles.planet}
        src={Planet.src}
        alt="flow"
        width="628"
        height="628"
      />
      <div className={styles.right}>
        <div className={styles.title}>HOW WE DO ?</div>
        <ScrollContainer>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <ScrollPage>
            <Animator animation={Step}>
              <div className={styles.step}>01</div>
            </Animator>
            <Animator animation={Body}>
              <div className={styles.body}>
                <div className={styles.subtitle}>探索需求</div>
                <div className={styles.verticalLine}></div>
                <div className={styles.content}>
                  在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={Step}>
              <div className={styles.step}>02</div>
            </Animator>
            <Animator animation={Body}>
              <div className={styles.body}>
                <div className={styles.subtitle}>策略與規劃</div>
                <div className={styles.verticalLine}></div>
                <div className={styles.content}>
                  我們運用探索階段搜集到的資訊做為基礎，在此階段，我們將針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={Step}>
              <div className={styles.step}>03</div>
            </Animator>
            <Animator animation={Body}>
              <div className={styles.body}>
                <div className={styles.subtitle}>探索需求</div>
                <div className={styles.verticalLine}></div>
                <div className={styles.content}>
                  在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={Step}>
              <div className={styles.step}>04</div>
            </Animator>
            <Animator animation={Body}>
              <div className={styles.body}>
                <div className={styles.subtitle}>策略與規劃</div>
                <div className={styles.verticalLine}></div>
                <div className={styles.content}>
                  我們運用探索階段搜集到的資訊做為基礎，在此階段，我們將針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={Step}>
              <div className={styles.step}>05</div>
            </Animator>
            <Animator animation={Body}>
              <div className={styles.body}>
                <div className={styles.subtitle}>探索需求</div>
                <div className={styles.verticalLine}></div>
                <div className={styles.content}>
                  在創星的第一步是探索需求，我們需要盡可能多地了解客戶與利害關係人，透過深度的訪談搜集資訊，確立需求與目標，鎖定目標受眾，為整個專案奠定強大的基礎。
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={Step}>
              <div className={styles.step}>06</div>
            </Animator>
            <Animator animation={Body}>
              <div className={styles.body}>
                <div className={styles.subtitle}>策略與規劃</div>
                <div className={styles.verticalLine}></div>
                <div className={styles.content}>
                  我們運用探索階段搜集到的資訊做為基礎，在此階段，我們將針對使用者體驗和資訊架構進行設計，包括人物誌、使用者故事、顧客旅程地圖及功能地圖，並繪製線稿進行易用性測試，持續迭代優化，以直觀、引人入勝的方式達到目標。
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </div>
  );
}
