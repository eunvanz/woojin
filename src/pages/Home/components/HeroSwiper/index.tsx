import { NavHashLink } from "react-router-hash-link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import { scrollElementWithOffset } from "../../../../reusable/helpers/scrollElementWithOffset";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./style.scss";

SwiperCore.use([Navigation]);

const HeroSwiper = () => (
  <div className="HeroSwiper">
    <div className="HeroSwiperContents">
      <Swiper slidesPerView="auto" navigation loop>
        <SwiperSlide>
          <div className="HeroSwiperItem">
            <div className="HeroSwiperItem__title">
              <h2>
                <em>WOOJIN LIVING</em>
                <strong>우진위생산업</strong>
              </h2>
              <p>
                웹사이트에 오신 걸 환영합니다.
                <br />
                우진위생산업은 좋은 제품과 신뢰를 최우선으로 생각하는
                생활위생용품 생산 전문 기업입니다.
              </p>
              {/* <span className="HeroSwiperItem__image">
                <img src={heroImg1} alt="" />
              </span> */}
              <NavHashLink
                to="/introduce"
                scroll={el => scrollElementWithOffset(el, 200)}
              >
                자세히 보기
              </NavHashLink>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="HeroSwiperItem">
            <div className="HeroSwiperItem__title">
              <h2>
                <em>LIVING WELL</em>
                <strong>리빙웰</strong>
              </h2>
              <p>
                건강한 생활위생용품 브랜드 리빙웰은
                <br />
                우진위생산업이 좋은 제품을 합리적인 가격으로 제공하기 위해 만든
                생활위생용품 브랜드입니다.
              </p>
              <NavHashLink
                to="/introduce#livingWell"
                scroll={el => scrollElementWithOffset(el, 200)}
              >
                자세히 보기
              </NavHashLink>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="HeroSwiperItem">
            <div className="HeroSwiperItem__title">
              <h2>
                <em>VARIOUS PRODUCTS</em>
                <strong>다양한 제품들</strong>
              </h2>
              <p>
                우진위생산업의
                <br />
                나무젓가락, 이쑤시게, 꼬지, 면봉 등의 각종 생활위생용품과
                OEM생산 제품들까지 온라인 상에서 구경해보세요.
              </p>
              <NavHashLink
                to="/products"
                scroll={el => scrollElementWithOffset(el, 200)}
              >
                자세히 보기
              </NavHashLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);

export default HeroSwiper;
