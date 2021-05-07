import { useState } from "react";
import { useLocation } from "react-router";
import SubTitle from "../../reusable/subTitle";
import Tab from "../../reusable/Tab";
import ProductsList from "./components/List";

import "./style.scss";

const Products = () => {
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(location.hash);

  return (
    <div className="Products">
      <SubTitle title="제품소개" />
      <Tab data={ProductsTabData} activeTab={activeTab} />
      <div className="LaytoutContents__sub">
        <ProductsList onChangeSection={section => setActiveTab(section)} />
      </div>
    </div>
  );
};

const ProductsTabData = [
  {
    label: "나무젓가락",
    url: "#chopstick"
  },
  {
    label: "이쑤시개",
    url: "#toothpick"
  },
  {
    label: "꼬지",
    url: "#stick"
  },
  {
    label: "면봉",
    url: "#cottonswab"
  },
  {
    label: "기타",
    url: "#etc"
  },
  {
    label: "OEM 제품",
    url: "#oem"
  }
];

export default Products;
