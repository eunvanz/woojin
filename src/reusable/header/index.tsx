import Logo from "./Logo";
import Gnb from "./Gnb";

import "./style.scss";

const Header = () => (
  <header className="Header">
    <div className="Header__inner">
      <Logo />
      <Gnb />
    </div>
  </header>
);

export default Header;
