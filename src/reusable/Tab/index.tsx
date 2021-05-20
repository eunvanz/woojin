import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import { scrollElementWithOffset } from "../../reusable/helpers/scrollElementWithOffset";
import "./style.scss";

interface TabDataItem {
  label: string;
  url: string;
}

interface TabItemProps {
  item: TabDataItem;
  isActive: boolean;
}

const TabItem = ({ item, isActive }: TabItemProps) => {
  return (
    <li
      className={classNames("TabItem", {
        "TabItem--selected": isActive
      })}
    >
      <NavHashLink
        to={item.url}
        scroll={el => scrollElementWithOffset(el, 230)}
      >
        {item.label}
      </NavHashLink>
    </li>
  );
};

export interface TabProps {
  tabData: TabDataItem[];
  activeTab: string;
}

export const Tab = ({ tabData, activeTab }: TabProps) => {
  const [isTabActive, setIsActive] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY || window.pageYOffset > 80) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={classNames("Tab", { active: isTabActive })}>
      <ul className="TabList">
        {tabData.map((item, index) => (
          <TabItem item={item} isActive={activeTab === item.url} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Tab;
