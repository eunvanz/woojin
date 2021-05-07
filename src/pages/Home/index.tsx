import HeroSwiper from "./components/HeroSwiper";
import HomeProduct from "./components/Product/";
import UsersSwiper from "./components/UsersSwiper/";

import "./style.scss";

const Home = () => (
  <div className="Home">
    <HeroSwiper />
    <UsersSwiper />
    <hr className="Layout__line" />
    <HomeProduct />
  </div>
);

export default Home;
