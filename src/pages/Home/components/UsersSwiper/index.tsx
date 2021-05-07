import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/swiper.scss";
import "./style.scss";

import usersLogoDaiso from "../../../../assets/images/users/users-logo-daiso.gif";
import usersLogohwami from "../../../../assets/images/users/users-logo-hwami.jpeg";
import usersLogoEmarteveryday from "../../../../assets/images/users/users-logo-emarteveryday.jpeg";
import usersLogoAlpha from "../../../../assets/images/users/users-logo-alpha.jpeg";
import usersLogoOfficedepot from "../../../../assets/images/users/users-logo-officedepot.jpeg";
import usersLogoHomeplus from "../../../../assets/images/users/users-logo-homeplus.jpeg";
import usersLogoSama from "../../../../assets/images/users/users-logo-sama.jpeg";
import usersLogoSewon from "../../../../assets/images/users/users-logo-sewon.jpeg";
import usersLogoNh from "../../../../assets/images/users/users-logo-nh.jpeg";
import usersLogoNongshim from "../../../../assets/images/users/users-logo-nongshim.jpeg";

SwiperCore.use([Autoplay]);

const UsersSwiper = () => (
  <div className="UsersSwiper">
    {/* <h3 className="Mixin__title-bar">
      우진위생산업은 좋은제품과 합리적인 가격으로 많은 <strong>고객사들</strong>
      과 함께 시장을 선도하고 있습니다.
    </h3> */}
    <div className="UsersSwiperContents">
      <Swiper
        slidesPerView="auto"
        loop
        autoplay={{
          delay: 1000
        }}
      >
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoDaiso} alt="다이소" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoEmarteveryday} alt="emartEveryDay" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoAlpha} alt="Alpha" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoHomeplus} alt="Homeplus" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoNh} alt="농심" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoNongshim} alt="NH" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoOfficedepot} alt="OfficeDEPOT" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoSama} alt="사마알미늄" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogoSewon} alt="세원종합상사" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="usersSwiperItem">
            <img src={usersLogohwami} alt="화미제당" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
);

export default UsersSwiper;
