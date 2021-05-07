import classNames from "classnames";
import { NavHashLink } from "react-router-hash-link";

import { scrollElementWithOffset } from "../../reusable/helpers/scrollElementWithOffset";
import "./style.scss";

interface TabItemProps {
  data: {
    label: string;
    url: string;
  }[];
  activeTab: string;
}

const TabItem = ({ data, activeTab }: TabItemProps) => {
  return (
    <div className="Tab">
      <ul className="TabList">
        {data.map((item, index) => (
          <li
            className={classNames("TabItem", {
              "TabItem--selected": activeTab === item.url
            })}
            key={index}
          >
            <NavHashLink
              to={item.url}
              scroll={el => scrollElementWithOffset(el, 230)}
            >
              {item.label}
            </NavHashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabItem;
