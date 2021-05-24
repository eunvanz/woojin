import "./style.scss";

import LogoImage from "../../assets/images/logo-white.png";

const Footer = () => (
  <div className="Footer">
    <div className="FooterContents">
      <div className="FooterContentsItem">
        <strong className="FooterContentsItem__title">고객상담센터</strong>
        <em className="FooterContentsItem__center-tel">080-860-8388</em>
        <ul className="FooterContentsItem__center-list">
          <li>평일 AM9:00 ~ PM6:00</li>
          <li>토요일 AM9:00 ~ PM12:00</li>
          <li>모바일 010-5216-8388</li>
        </ul>
      </div>
      <div className="FooterContentsItem">
        <strong className="FooterContentsItem__title">COMPANY INFO</strong>
        <ul className="FooterContentsItem__info">
          <li className="FooterContentsItem__info-item">
            <strong>사업체명 :</strong>
            <span>우진위생산업</span>
          </li>
          <li className="FooterContentsItem__info-item">
            <strong>사업자등록번호 :</strong>
            <span>216-20-68980</span>
          </li>
          <li className="FooterContentsItem__info-item">
            <strong>주소 :</strong>
            <span>
              서울특별시 중랑구 신내역로3길 40-36 신내데시앙플렉스 B2 216, 217,
              218호
            </span>
          </li>
          <li className="FooterContentsItem__info-item">
            <strong>전화번호 :</strong>
            <span>02-6949-3413</span>
          </li>
          <li className="FooterContentsItem__info-item">
            <strong>팩스번호 :</strong>
            <span>02-6949-3414</span>
          </li>
          <li className="FooterContentsItem__info-item">
            <strong>대표 :</strong>
            <span>이의락</span>
          </li>
          <li className="FooterContentsItem__info-item">
            <strong>이메일 :</strong>
            <span>
              <a href="mailto:woojinliving@naver.com">woojinliving@naver.com</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div className="FooterCopyright">
      <span>
        <img src={LogoImage} alt="우진위생산업" />
      </span>
      <address>Copyright © 2021 WOOJIN LIVING.</address>
      <p>본 웹페이지는 IE11 이상, Chrome 최적화 되어있습니다.</p>
    </div>
  </div>
);

export default Footer;
