import styles from "../styles/Flow.module.css";
import Image from "next/image";
import BigPlanet from "../assets/image/flow.svg";
import Border from "../assets/image/border.svg";
import Planet1 from "../assets/image/flow-planet1.svg";
import Planet2 from "../assets/image/flow-planet2.svg";
import Planet3 from "../assets/image/flow-planet3.svg";
import Planet4 from "../assets/image/flow-planet4.svg";
import Planet5 from "../assets/image/flow-planet5.svg";
import Planet6 from "../assets/image/flow-planet6.svg";

interface Flow {}

export default function Flow(props: Flow) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center">
          <Image
            src={Border}
            alt="Border"
            width={627}
            height={627}
            className="absolute"
          />
          <Image src={BigPlanet} alt="BigPlanet" width={500} height={500} />
        </div>
        <div className="absolute">
          <Image
            src={Planet1}
            alt="FlowPlanet"
            width={86}
            height={56}
            style={{ transform: "translate(313.5px, 0px)" }}
          />
        </div>
        <div className="absolute">
          <Image
            src={Planet2}
            alt="FlowPlanet"
            width={35}
            height={35}
            style={{ transform: "translate(156.75px, 273.5px)" }}
          />
        </div>
        <div className="absolute">
          <Image
            src={Planet3}
            alt="FlowPlanet"
            width={35}
            height={35}
            style={{ transform: "translate(-156.75px, 273.5px)" }}
          />
        </div>
        <div className="absolute">
          <Image
            src={Planet4}
            alt="FlowPlanet"
            width={35}
            height={35}
            style={{ transform: "translate(-313.5px, 0px)" }}
          />
        </div>
        <div className="absolute">
          <Image
            src={Planet5}
            alt="FlowPlanet"
            width={35}
            height={35}
            style={{ transform: "translate(-156.75px, -273.5px)" }}
          />
        </div>
        <div className="absolute">
          <Image
            src={Planet6}
            alt="FlowPlanet"
            width={35}
            height={35}
            style={{ transform: "translate(156.75px, -273.5px)" }}
          />
        </div>
      </div>
      <div className={styles.title}>HOW WE DO ?</div>
    </div>
  );
}
