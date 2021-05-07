import { Link } from "react-router-dom";

import "./style.scss";

import LogoImage from "../../../assets/images/logo-black.png";

const Logo = () => (
  <div className="Logo">
    <h1 className="Logo__title">
      <Link to="/">
        <img src={LogoImage} alt="우진위생산업" />
      </Link>
    </h1>
  </div>
);

export default Logo;
