import { useLocation } from "react-router";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

import SubTitle from "../../reusable/subTitle";
import Tab from "../../reusable/Tab";
import Greeting from "./components/Greeting";
import LivingWell from "./components/LivingWell";
import Values from "./components/Values";
import ItemsDescription from "./components/ItemsDescription";
import History from "./components/History";

import "./style.scss";

const bottomOffset = "50%";

const Introduce = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.hash);

  return (
    <div className="Introduce">
      <SubTitle title="회사소개" />
      <Tab tabData={IntroduceTabData} activeTab={activeTab} />
      <Waypoint
        onEnter={() => {
          setActiveTab("#greeting");
        }}
        bottomOffset={bottomOffset}
      />
      <Greeting />
      <Waypoint
        onEnter={() => setActiveTab("#livingWell")}
        bottomOffset={bottomOffset}
      />
      <LivingWell />
      <Waypoint
        onEnter={() => setActiveTab("#values")}
        bottomOffset={bottomOffset}
      />
      <Values />
      <Waypoint
        onEnter={() => setActiveTab("#itemsDescription")}
        bottomOffset={bottomOffset}
      />
      <ItemsDescription />
      <Waypoint
        onEnter={() => setActiveTab("#history")}
        bottomOffset={bottomOffset}
      />
      <History />
    </div>
  );
};

const IntroduceTabData = [
  {
    label: "인사말",
    url: "#greeting",
  },
  {
    label: "리빙웰",
    url: "#livingWell",
  },
  {
    label: "핵심가치",
    url: "#values",
  },
  {
    label: "주요 생산 품목",
    url: "#itemsDescription",
  },
  {
    label: "회사연혁",
    url: "#history",
  },
];

export default Introduce;
