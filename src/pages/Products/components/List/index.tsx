import { Waypoint } from "react-waypoint";

import ProductsItem from "../Item";
import ProductsTitle from "../Title";

import "./style.scss";

import image100p from "../../../../assets/images/products/chopsticks/100p.jpg";
import image50p from "../../../../assets/images/products/chopsticks/50p.jpg";
import image30p from "../../../../assets/images/products/chopsticks/30p.jpg";
import imageBamboo100p from "../../../../assets/images/products/chopsticks/bamboo-100p.jpg";
import imageRawBamboo100p from "../../../../assets/images/products/chopsticks/raw-bamboo-100p.jpg";
import imagePlainChopstick from "../../../../assets/images/products/chopsticks/plain-chopstick.jpg";
import image500p from "../../../../assets/images/products/chopsticks/500p.jpg";
import imageBambooEach100p from "../../../../assets/images/products/chopsticks/bamboo-each-100p.jpg";
import imageBambooLong100p from "../../../../assets/images/products/chopsticks/bamboo-long-35p.jpg";
import imageEconomic100p from "../../../../assets/images/products/chopsticks/economic-100p.jpg";
import imageGreen10p from "../../../../assets/images/products/chopsticks/green-10p.jpg";
import imagePaper250p from "../../../../assets/images/products/chopsticks/paper-250p.jpg";
import imagePine35p from "../../../../assets/images/products/chopsticks/pine-35p.jpg";
import imageVinyl250p from "../../../../assets/images/products/chopsticks/vinyl-250p.jpg";
import imageVinyl500p from "../../../../assets/images/products/chopsticks/vinyl-500p.jpg";

import imageToothpickBambooBulk from "../../../../assets/images/products/toothpick/toothpick-bamboo-bulk.jpg";
import imageToothpickBamboo from "../../../../assets/images/products/toothpick/toothpick-bamboo.jpg";
import imageToothpickBothSide from "../../../../assets/images/products/toothpick/toothpick-both-side.jpg";
import imageToothpickOneSide from "../../../../assets/images/products/toothpick/toothpick-one-side.jpg";
import imageToothpickStarch from "../../../../assets/images/products/toothpick/toothpick-starch.jpg";
import imageToothpickBulk from "../../../../assets/images/products/toothpick/toothpick-bulk.jpg";

import imageFruitsStick from "../../../../assets/images/products/stick/fruits-stick.jpg";
import imageStickBig from "../../../../assets/images/products/stick/stick-big.jpg";
import imageStickSmall from "../../../../assets/images/products/stick/stick-small.jpg";
import imageUmbrellaStick from "../../../../assets/images/products/stick/umbrella-stick.jpg";

import imageCottonSwab100tips from "../../../../assets/images/products/cottonswab/cottonswab-100tips.jpg";
import imageCottonSwab400tips from "../../../../assets/images/products/cottonswab/cottonswab-400tips.jpg";
import imageCottonSwabCosmetic200tips from "../../../../assets/images/products/cottonswab/cottonswab-cosmetic-200tips.jpg";
import imageCottonSwabEach100tips from "../../../../assets/images/products/cottonswab/cottonswab-each-100tips.jpg";
import imageCottonSwabPaper200tips from "../../../../assets/images/products/cottonswab/cottonswab-paper-200tips.jpg";
import imageCottonSwabPaper400tips from "../../../../assets/images/products/cottonswab/cottonswab-paper-400tips.jpg";
import imageCottonSwab200tips from "../../../../assets/images/products/cottonswab/cottonswab-200tips.jpg";

import imageCamping from "../../../../assets/images/products/etc/camping.jpg";
import imageCoatedGlove from "../../../../assets/images/products/etc/coated-glove.jpg";
import imageFolk from "../../../../assets/images/products/etc/folk.jpg";
import imageGlove from "../../../../assets/images/products/etc/glove.jpg";
import imageKimbabWrapper from "../../../../assets/images/products/etc/kimbab-wrapper.jpg";
import imageSpoon from "../../../../assets/images/products/etc/spoon.jpg";
import imageWeddingGlove from "../../../../assets/images/products/etc/wedding-glove.jpg";

import oem1 from "../../../../assets/images/products/oem/oem-1.jpeg";
import oem2 from "../../../../assets/images/products/oem/oem-2.jpeg";
import oem3 from "../../../../assets/images/products/oem/oem-3.jpeg";
import oem4 from "../../../../assets/images/products/oem/oem-4.jpeg";
import oem5 from "../../../../assets/images/products/oem/oem-5.jpeg";
import oem6 from "../../../../assets/images/products/oem/oem-6.jpeg";
import oem7 from "../../../../assets/images/products/oem/oem-7.jpeg";
import oem8 from "../../../../assets/images/products/oem/oem-8.jpeg";

export interface ProductsListProps {
  onChangeSection: (section: string) => void;
}

const bottomOffset = "50%";

const ProductsList = ({ onChangeSection }: ProductsListProps) => (
  <>
    <Waypoint
      onEnter={() => onChangeSection("#chopstick")}
      bottomOffset={bottomOffset}
    />
    <ProductsTitle id="chopstick" title="나무젓가락" />
    <ProductsItem
      data={ProductsItemData.filter((item) => item.group === "chopstick")}
    />

    <Waypoint
      onEnter={() => onChangeSection("#toothpick")}
      bottomOffset={bottomOffset}
    />
    <ProductsTitle id="toothpick" title="이쑤시개" />
    <ProductsItem
      data={ProductsItemData.filter((item) => item.group === "toothpick")}
    />

    <Waypoint
      onEnter={() => onChangeSection("#stick")}
      bottomOffset={bottomOffset}
    />
    <ProductsTitle id="stick" title="꼬지" />
    <ProductsItem
      data={ProductsItemData.filter((item) => item.group === "stick")}
    />

    <Waypoint
      onEnter={() => onChangeSection("#cottonswab")}
      bottomOffset={bottomOffset}
    />
    <ProductsTitle id="cottonswab" title="면봉" />
    <ProductsItem
      data={ProductsItemData.filter((item) => item.group === "cottonswab")}
    />

    <Waypoint
      onEnter={() => onChangeSection("#etc")}
      bottomOffset={bottomOffset}
    />
    <ProductsTitle id="etc" title="기타" />
    <ProductsItem
      data={ProductsItemData.filter((item) => item.group === "etc")}
    />

    <Waypoint
      onEnter={() => onChangeSection("#oem")}
      bottomOffset={bottomOffset}
    />
    <ProductsTitle id="oem" title="OEM" />
    <ProductsItem
      data={ProductsItemData.filter((item) => item.group === "oem")}
    />
  </>
);

const ProductsItemData = [
  //나무젓가락
  {
    group: "chopstick",
    imgUrl: image100p,
    label: "리빙웰 나무젓가락 100P",
    description: (
      <div>
        수량 : 100PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: image50p,
    label: "리빙웰 나무젓가락 50P",
    description: (
      <div>
        수량 : 50PCS <br />
        규격 : 21cm <br />
        재질 : 백양목 <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: image30p,
    label: "리빙웰 나무젓가락 30P",
    description: (
      <div>
        수량 : 30PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageBamboo100p,
    label: "리빙웰 둥근대나무젓가락 100P",
    description: (
      <div>
        수량 : 100PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageBambooEach100p,
    label: "리빙웰 둥근대나무젓가락 개별포장 100P",
    description: (
      <div>
        수량 : 100PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageRawBamboo100p,
    label: "리빙웰 비닐포장 둥근대나무젓가락 100P",
    description: (
      <div>
        수량 : 100PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageBambooLong100p,
    label: "리빙웰 보다더 긴 8치 대나무젓가락 35P",
    description: (
      <div>
        수량 : 35PCS
        <br />
        규격 : 24cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imagePine35p,
    label: "리빙웰 보다 긴 최고급 미송 나무젓가락 35P",
    description: (
      <div>
        수량 : 35PCS
        <br />
        규격 : 24cm
        <br />
        재질 : 소나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imagePlainChopstick,
    label: "알저",
    description: (
      <div>
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageGreen10p,
    label: "리빙웰 그린 나무젓가락 10P",
    description: (
      <div>
        수량 : 10PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imagePaper250p,
    label: "리빙웰 종이포장 젓가락",
    description: (
      <div>
        수량: 250PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageVinyl250p,
    label: "리빙웰 비닐포장 젓가락",
    description: (
      <div>
        수량: 250PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: image500p,
    label: "자동포장 나무젓가락 500P",
    description: (
      <div>
        수량 : 500PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageEconomic100p,
    label: "절약형 나무젓가락",
    description: (
      <div>
        수량 : 100PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목 원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: imageVinyl500p,
    label: "비닐포장 나무젓가락 500P",
    description: (
      <div>
        수량 : 500PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  // 이쑤시개
  {
    group: "toothpick",
    imgUrl: imageToothpickBothSide,
    label: "리빙웰 양면 이쑤시개 大",
    description: (
      <div>
        수량 : 약 480개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: imageToothpickStarch,
    label: "리빙웰 녹말이쑤시개",
    description: (
      <div>
        수량 : 약 250개
        <br />
        재질 : 녹말전분
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: imageToothpickBulk,
    label: "업소용 이쑤시개",
    description: (
      <div>
        수량 : 약 500개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: imageToothpickOneSide,
    label: "리빙웰 단면 이쑤시개 大",
    description: (
      <div>
        수량 : 약 480개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: imageToothpickBamboo,
    label: "리빙웰 대나무 이쑤시개",
    description: (
      <div>
        수량 : 약 850개
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: imageToothpickBambooBulk,
    label: "리빙웰 대나무 이쑤시개 2000P",
    description: (
      <div>
        수량 : 약 2000개
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },

  //꼬지
  {
    group: "stick",
    imgUrl: imageUmbrellaStick,
    label: "우산과일꽂이",
    description: (
      <div>
        수량 : 160PCS
        <br />
        재질 : 자작나무 외<br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "stick",
    imgUrl: imageStickSmall,
    label: "산적꼬지 小",
    description: (
      <div>
        수량 : 50개
        <br />
        규격 : 10cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "stick",
    imgUrl: imageStickBig,
    label: "산적꼬지 大",
    description: (
      <div>
        수량 : 50개
        <br />
        규격 : 17cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "stick",
    imgUrl: imageFruitsStick,
    label: "과일꽂이",
    description: (
      <div>
        수량 : 약 160개
        <br />
        재질 : 자작나무 외<br />
        원산지 : 중국
      </div>
    ),
  },

  //면봉
  {
    group: "cottonswab",
    imgUrl: imageCottonSwab100tips,
    label: "리빙웰 면봉 100TIPS",
    description: (
      <div>
        수량 : 100TIPS
        <br />
        재질 : 탈지면, 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: imageCottonSwab200tips,
    label: "리빙웰 면봉 200TIPS",
    description: (
      <div>
        수량 : 200TIPS
        <br />
        재질 : 탈지면, 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: imageCottonSwab400tips,
    label: "리빙웰 면봉 400TIPS",
    description: (
      <div>
        수량 : 400TIPS
        <br />
        재질 : 탈지면, 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: imageCottonSwabEach100tips,
    label: "리빙웰 개별포장종이면봉 100TIPS",
    description: (
      <div>
        수량 : 100TIPS
        <br />
        재질 : 탈지면, 종이
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: imageCottonSwabPaper200tips,
    label: "사각 종이면봉 200TIPS",
    description: (
      <div>
        수량 : 200TIPS
        <br />
        재질 : 탈지면, 종이
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: imageCottonSwabPaper400tips,
    label: "비닐 종이면봉 400TIPS",
    description: (
      <div>
        수량 : 400TIPS
        <br />
        재질 : 탈지면, 종이
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: imageCottonSwabCosmetic200tips,
    label: "화장 종이 면봉 200TIPS",
    description: (
      <div>
        수량 : 200TIPS
        <br />
        재질 : 탈지면, 종이
        <br />
        원산지 : 중국
      </div>
    ),
  },

  //기타
  {
    group: "etc",
    imgUrl: imageKimbabWrapper,
    label: "김발",
    description: (
      <div>
        수량 : 1개
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: imageSpoon,
    label: "리빙웰 위생숟가락",
    description: (
      <div>
        수량 : 10PCS
        <br />
        재질 : PP
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: imageWeddingGlove,
    label: "리빙웰 예식장갑",
    description: (
      <div>
        수량 : 1켤레
        <br />
        규격 : 12cm*21cm
        <br />
        재질 : 면 80%, 폴리에스텔 20%
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: imageGlove,
    label: "리빙웰 목장갑",
    description: (
      <div>
        수량 : 1켤레
        <br />
        규격 : 12cm*21cm
        <br />
        재질 : 면 80%, 폴리에스텔 20%
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: imageFolk,
    label: "포크",
    description: (
      <div>
        수량 : 10PCS
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: imageCoatedGlove,
    label: "리빙웰 반코팅장갑",
    description: (
      <div>
        수량 : 1켤레
        <br />
        규격 : 12cm*21cm
        <br />
        재질 : 면 80%, 천연라텍스
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: imageCamping,
    label: "리빙웰 캠핑용품",
  },

  //OEM 제품
  {
    group: "oem",
    imgUrl: oem1,
    label: "오피스디포 목장갑 & 반코팅장갑",
  },
  {
    group: "oem",
    imgUrl: oem2,
    label: "삼아알미늄 면봉 & 이쑤시개",
  },
  {
    group: "oem",
    imgUrl: oem3,
    label: "세원종합유통 이쑤시개 & 면봉",
  },
  {
    group: "oem",
    imgUrl: oem4,
    label: "알파문구 이쑤시개 & 면봉",
  },
  {
    group: "oem",
    imgUrl: oem5,
    label: "다이소 나무젓가락 & 이쑤시개",
  },
  {
    group: "oem",
    imgUrl: oem6,
    label: "화미제당 나무젓가락 모음",
  },
  {
    group: "oem",
    imgUrl: oem7,
    label: "오피스디포 나무젓가락",
    description: (
      <div>
        수량 : 100PCS
        <br />
        규격 : 21cm
        <br />
        재질 : 백양목
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "oem",
    imgUrl: oem8,
    label: "대상티엘에스 나무젓가락",
  },
];

export default ProductsList;
