import { NavHashLink } from "react-router-hash-link";

import { scrollElementWithOffset } from "../../../../reusable/helpers/scrollElementWithOffset";
import "./style.scss";

import homeProduct1 from "../../../../assets/images/home-product-1.jpeg";
import homeProduct2 from "../../../../assets/images/home-product-2.jpeg";
import homeProduct3 from "../../../../assets/images/home-product-3.jpeg";
import homeProduct4 from "../../../../assets/images/home-product-4.jpeg";
import homeProduct5 from "../../../../assets/images/home-product-5.jpeg";
import homeProduct6 from "../../../../assets/images/home-product-6.jpeg";

interface HomeProductItemProps {
  imgUrl: string;
  label: string;
  description: string;
  url: string;
}

const HomeProductItem = ({
  imgUrl,
  label,
  description,
  url
}: HomeProductItemProps) => {
  return (
    <div className="HomeProductItem">
      <span>
        <img src={imgUrl} alt={`${label} 이미지`} />
      </span>
      <strong>{label}</strong>
      <p>{description}</p>
      <NavHashLink to={url} scroll={el => scrollElementWithOffset(el, 230)}>
        제품 보기
      </NavHashLink>
    </div>
  );
};

const HomeProduct = () => (
  <div className="HomeProduct">
    <h3 className="Mixin__title-bar">
      생활위생용품 제조 전문 업체 <strong>우진위생산업</strong>은<br />질 좋은
      제품을 정직한 가격으로 자사 브랜드 뿐만 아니라
      <br />
      <strong>OEM, PB상품 및 상조용품</strong>을 맞춤생산하고 있습니다.
    </h3>
    <div className="HomeProductLsit">
      {HomeProductItemData.map((item, index) => (
        <HomeProductItem
          imgUrl={item.imgUrl}
          label={item.label}
          description={item.description}
          url={item.url}
          key={index}
        />
      ))}
    </div>
  </div>
);

const HomeProductItemData = [
  {
    imgUrl: homeProduct1,
    label: "나무젓가락",
    description:
      "잘 가공된 백양목 소재의 알젓가락을 또 한번 깐깐하게 추려내어 최상급 품질을 자랑합니다.",
    url: "/products#chopstick"
  },
  {
    imgUrl: homeProduct2,
    label: "이쑤시개",
    description:
      "손으로 한땀 한땀 정성껏 포장하여 불량률을 최소화했고, 수량이 정확합니다.",
    url: "/products#toothpick"
  },
  {
    imgUrl: homeProduct3,
    label: "꼬지",
    description:
      " 때깔 좋고 튼튼한 대나무를 사용하여 어떤 식재료와도 조화와 궁합이 좋습니다.",
    url: "/products#stick"
  },
  {
    imgUrl: homeProduct4,
    label: "면봉",
    description: "순면 100%의 감촉으로 부드럽고 깔끔한 사용감을 보장합니다.",
    url: "/products#cottonswab"
  },
  {
    imgUrl: homeProduct5,
    label: "기타",
    description:
      "일회용 수저, 포크, 목장갑, 면장갑, 김발 등 생활위생용품의 카테고리를 넓히고 있습니다.",
    url: "/products#etc"
  },
  {
    imgUrl: homeProduct6,
    label: "OEM제품",
    description:
      "생활용품 유통을 선도하는 파트너들의 든든한 협력업체가 되어드리고 있습니다.",
    url: "/products#oem"
  }
];

export default HomeProduct;
