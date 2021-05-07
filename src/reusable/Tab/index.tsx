import classNames from "classnames";
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
        "TabItem--selected": isActive,
      })}
    >
      <NavHashLink
        to={item.url}
        scroll={(el) => scrollElementWithOffset(el, 230)}
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
  return (
    <div className="Tab">
      <ul className="TabList">
        {tabData.map((item, index) => (
          <TabItem item={item} isActive={activeTab === item.url} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Tab;
