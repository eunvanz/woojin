import { NavLink } from "react-router-dom";

import "./style.scss";

const Gnb = () => (
  <div className="Gnb">
    <nav>
      <ul className="GnbList">
        <li className="GnbItem">
          <NavLink exact to="/" activeClassName="GnbItem--selected">
            HOME
          </NavLink>
        </li>
        <li className="GnbItem">
          <NavLink to="/introduce" activeClassName="GnbItem--selected">
            회사소개
          </NavLink>
          {/* <ul className="GnbItem-dropdowon">
            <li>
              <NavLink to="">인사말</NavLink>
            </li>
            <li>
              <NavLink to="">핵심가치</NavLink>
            </li>
            <li>
              <NavLink to="">주요 생산 품목</NavLink>
            </li>
            <li>
              <NavLink to="">회사연혁</NavLink>
            </li>
            <li>
              <NavLink to="">리빙웰이란?</NavLink>
            </li>
          </ul> */}
        </li>
        <li className="GnbItem">
          <NavLink to="/products" activeClassName="GnbItem--selected">
            제품소개
          </NavLink>
          {/* <ul className="GnbItem-dropdowon">
            <li>
              <NavLink to="">전체</NavLink>
            </li>
            <li>
              <NavLink to="">나무젓가락</NavLink>
            </li>
            <li>
              <NavLink to="">이쑤시개</NavLink>
            </li>
            <li>
              <NavLink to="">꼬지</NavLink>
            </li>
            <li>
              <NavLink to="">면봉</NavLink>
            </li>
            <li>
              <NavLink to="">기타</NavLink>
            </li>
            <li>
              <NavLink to="">OEM제품</NavLink>
            </li>
          </ul> */}
        </li>
        <li className="GnbItem">
          <NavLink to="/inquiry" activeClassName="GnbItem--selected">
            문의하기
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Gnb;
