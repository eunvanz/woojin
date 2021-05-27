import { Waypoint } from "react-waypoint";

import ProductsItem from "../Item";
import ProductsTitle from "../Title";

import "./style.scss";

import image100p from "../../../../assets/images/products/chopsticks/100p.jpg";
import imageBamboo100p from "../../../../assets/images/products/chopsticks/bamboo-100p.jpg";
import imageRawBamboo100p from "../../../../assets/images/products/chopsticks/raw-bamboo-100p.jpg";
import chopsticks2 from "../../../../assets/images/products/chopsticks/chopsticks-2.jpeg";
import chopsticks3 from "../../../../assets/images/products/chopsticks/chopsticks-3.jpeg";
import chopsticks4 from "../../../../assets/images/products/chopsticks/chopsticks-4.jpeg";
import chopsticks5 from "../../../../assets/images/products/chopsticks/chopsticks-5.jpeg";
import chopsticks6 from "../../../../assets/images/products/chopsticks/chopsticks-6.jpeg";
import chopsticks7 from "../../../../assets/images/products/chopsticks/chopsticks-7.jpeg";
import chopsticks8 from "../../../../assets/images/products/chopsticks/chopsticks-8.jpeg";
import chopsticks9 from "../../../../assets/images/products/chopsticks/chopsticks-9.jpeg";
import chopsticks10 from "../../../../assets/images/products/chopsticks/chopsticks-10.jpeg";
import chopsticks11 from "../../../../assets/images/products/chopsticks/chopsticks-11.jpeg";
import chopsticks12 from "../../../../assets/images/products/chopsticks/chopsticks-12.jpeg";
import chopsticks13 from "../../../../assets/images/products/chopsticks/chopsticks-13.jpeg";
import chopsticks14 from "../../../../assets/images/products/chopsticks/chopsticks-14.jpeg";
import chopsticks15 from "../../../../assets/images/products/chopsticks/chopsticks-15.jpeg";

import toothpick1 from "../../../../assets/images/products/toothpick/toothpick-1.jpeg";
import toothpick2 from "../../../../assets/images/products/toothpick/toothpick-2.jpeg";
import toothpick3 from "../../../../assets/images/products/toothpick/toothpick-3.jpeg";
import toothpick4 from "../../../../assets/images/products/toothpick/toothpick-4.jpeg";
import toothpick5 from "../../../../assets/images/products/toothpick/toothpick-5.jpeg";
import toothpick6 from "../../../../assets/images/products/toothpick/toothpick-6.jpeg";
import toothpick7 from "../../../../assets/images/products/toothpick/toothpick-7.jpeg";
import toothpick8 from "../../../../assets/images/products/toothpick/toothpick-8.jpeg";
import toothpick9 from "../../../../assets/images/products/toothpick/toothpick-9.jpeg";
import toothpick10 from "../../../../assets/images/products/toothpick/toothpick-10.jpeg";
import toothpick11 from "../../../../assets/images/products/toothpick/toothpick-11.jpeg";
import toothpick12 from "../../../../assets/images/products/toothpick/toothpick-12.jpeg";
import toothpick13 from "../../../../assets/images/products/toothpick/toothpick-13.jpeg";

import stick1 from "../../../../assets/images/products/stick/stick-1.jpeg";
import stick2 from "../../../../assets/images/products/stick/stick-2.jpeg";
import stick3 from "../../../../assets/images/products/stick/stick-3.jpeg";
import stick4 from "../../../../assets/images/products/stick/stick-4.jpeg";
import stick5 from "../../../../assets/images/products/stick/stick-5.jpeg";
import stick6 from "../../../../assets/images/products/stick/stick-6.jpeg";
import stick7 from "../../../../assets/images/products/stick/stick-7.jpeg";

import cottonswab1 from "../../../../assets/images/products/cottonswab/cottonswab-1.jpeg";
import cottonswab2 from "../../../../assets/images/products/cottonswab/cottonswab-2.jpeg";
import cottonswab3 from "../../../../assets/images/products/cottonswab/cottonswab-3.jpeg";
import cottonswab4 from "../../../../assets/images/products/cottonswab/cottonswab-4.jpeg";
import cottonswab5 from "../../../../assets/images/products/cottonswab/cottonswab-5.jpeg";
import cottonswab6 from "../../../../assets/images/products/cottonswab/cottonswab-6.jpeg";
import cottonswab7 from "../../../../assets/images/products/cottonswab/cottonswab-7.jpeg";

import etc1 from "../../../../assets/images/products/etc/etc-1.jpeg";
import etc2 from "../../../../assets/images/products/etc/etc-2.jpeg";
import etc3 from "../../../../assets/images/products/etc/etc-3.jpeg";
import etc4 from "../../../../assets/images/products/etc/etc-4.jpeg";
import etc5 from "../../../../assets/images/products/etc/etc-5.jpeg";
import etc6 from "../../../../assets/images/products/etc/etc-6.jpeg";
import etc7 from "../../../../assets/images/products/etc/etc-7.jpeg";
import etc8 from "../../../../assets/images/products/etc/etc-8.jpeg";

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
    imgUrl: chopsticks2,
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
    imgUrl: chopsticks3,
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
    imgUrl: chopsticks4,
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
    imgUrl: chopsticks5,
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
    imgUrl: chopsticks6,
    label: "리빙웰 그린 30P, 50P, 100P",
    description: (
      <div>
        수량 : 30PCS, 50PCS, 100PCS <br />
        규격 : 21cm <br />
        재질 : 백양목 <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "chopstick",
    imgUrl: chopsticks7,
    label: "종이포장 젓가락",
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
    imgUrl: chopsticks8,
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
    imgUrl: chopsticks9,
    label: "자동포장 나무젓가락 5호",
    description: (
      <div>
        수량 : 200PCS
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
    imgUrl: chopsticks10,
    label: "리빙웰 나무젓가락 박스",
  },
  {
    group: "chopstick",
    imgUrl: chopsticks11,
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
  {
    group: "chopstick",
    imgUrl: chopsticks12,
    label: "나무젓가락 제품 모음",
  },
  {
    group: "chopstick",
    imgUrl: chopsticks13,
    label: "상조용 대나무젓가락",
    description: (
      <div>
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
    imgUrl: chopsticks14,
    label: "알저 모음",
  },
  {
    group: "chopstick",
    imgUrl: chopsticks15,
    label: "업소용 자동포장 나무젓가락 500P",
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
    imgUrl: toothpick1,
    label: "이쑤시개 모음",
  },
  {
    group: "toothpick",
    imgUrl: toothpick2,
    label: "녹말이쑤시개",
    description: (
      <div>
        수량 : 약 500개
        <br />
        재질 : 녹말전분
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick3,
    label: "컬러 이쑤시개",
    description: (
      <div>
        수량 : 약 450개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick4,
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
    imgUrl: toothpick5,
    label: "리빙웰 녹말이쑤시개",
    description: (
      <div>
        수량 : 약 200개
        <br />
        재질 : 녹말전분
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick6,
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
    imgUrl: toothpick7,
    label: "단면 이쑤시개 中",
    description: (
      <div>
        수량 : 약 280개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick8,
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
    imgUrl: toothpick9,
    label: "리빙웰 양면 이쑤시개 中",
    description: (
      <div>
        수량 : 약 280개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick10,
    label: "대나무 녹말 이쑤시개",
    description: (
      <div>
        수량 : 대나무 - 350개, 녹말 - 200
        <br />
        재질 : 대나무, 녹말
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick11,
    label: "개별 포장 이쑤시개",
    description: (
      <div>
        수량 : 약 70개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick12,
    label: "리필용 개별 포장 이쑤시개",
    description: (
      <div>
        수량 : 약 1000개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "toothpick",
    imgUrl: toothpick13,
    label: "이쑤시개 & 꽂이 제품 모음",
  },

  //꼬지
  {
    group: "stick",
    imgUrl: stick1,
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
    imgUrl: stick2,
    label: "꼬지모음",
  },
  {
    group: "stick",
    imgUrl: stick3,
    label: "산적꼬지",
    description: (
      <div>
        수량 : 50개
        <br />
        규격 : 小 - 10cm, 大 - 17cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "stick",
    imgUrl: stick4,
    label: "컬러꽂이",
    description: (
      <div>
        수량 : 약 450개
        <br />
        재질 : 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "stick",
    imgUrl: stick5,
    label: "리빙웰 산적꼬지",
    description: (
      <div>
        {" "}
        수량 : 50개
        <br />
        규격 : 소 - 10cm, 대 - 17cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "stick",
    imgUrl: stick6,
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
  {
    group: "stick",
    imgUrl: stick7,
    label: "꼬지 1000P",
    description: (
      <div>
        수량 : 1000개
        <br />
        규격 : 좌 - 18cm, 우 - 15cm
        <br />
        재질 : 대나무
        <br />
        원산지 : 중국
      </div>
    ),
  },

  //면봉
  {
    group: "cottonswab",
    imgUrl: cottonswab1,
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
    imgUrl: cottonswab2,
    label: "면봉모음",
  },
  {
    group: "cottonswab",
    imgUrl: cottonswab3,
    label: "간단포장 면봉 4P & 면봉 1P",
    description: (
      <div>
        수량 : 100PCS*4, 100PCS
        <br />
        재질 : 탈지면, 자작나무
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "cottonswab",
    imgUrl: cottonswab4,
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
    imgUrl: cottonswab5,
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
    imgUrl: cottonswab6,
    label: "면봉 제품 모음",
  },
  {
    group: "cottonswab",
    imgUrl: cottonswab7,
    label: "화장 면봉",
    description: (
      <div>
        수량 : 110TIPS, 200TIPS
        <br />
        재질 : 탈지면, PP
        <br />
        원산지 : 중국
      </div>
    ),
  },

  //기타
  {
    group: "etc",
    imgUrl: etc1,
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
    imgUrl: etc2,
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
    imgUrl: etc3,
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
    imgUrl: etc4,
    label: "장갑묶음",
    description: (
      <div>
        수량 : 10켤레
        <br />
        원산지 : 중국
      </div>
    ),
  },
  {
    group: "etc",
    imgUrl: etc5,
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
    imgUrl: etc6,
    label: "리빙웰 숟가락 & 포크",
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
    imgUrl: etc7,
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
    imgUrl: etc8,
    label: "장갑, 김발, 꼬지 모음",
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
