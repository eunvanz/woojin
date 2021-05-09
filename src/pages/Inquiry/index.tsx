import SubTitle from "../../reusable/subTitle";

import "./style.scss";

interface InquiryItemPops {
  title: string;
  answer: React.ReactNode;
}

const InquiryItem = ({ title, answer }: InquiryItemPops) => (
  <>
    <div className="InquiryItem">
      <strong className="InquiryItem__title">{title}</strong>
      <div className="InquiryItem__answer">{answer}</div>
    </div>
    <hr className="Layout__line" />
  </>
);

const Inquiry = () => (
  <div className="Inquiry">
    <SubTitle title="문의하기" />
    <div className="LayoutContents__sub">
      <h3 className="Mixin__title Mixin__title--left">FAQ</h3>
      <h4 className="Mixin__title-bar Mixin__title-bar--left">
        가장 빈번한 문의사항들을 모아놨습니다.
      </h4>

      <div className="InquiryList">
        {InquiryItemData.map((item, index) => (
          <InquiryItem title={item.title} answer={item.answer} key={index} />
        ))}
      </div>

      <div className="Inquiry__mail">
        <strong className="Mixin__title-bar">
          FAQ에 원하는 답변이 없나요?
        </strong>
        <p>
          <a href="mainto:mailto:woojinliving@naver.com">이메일</a>을
          보내주세요.
        </p>
      </div>
    </div>
  </div>
);

const InquiryItemData = [
  {
    title: "Q. OEM생산이 가능한가요?",
    answer: (
      <p>
        물론 가능 합니다.현재 다양한 종류의 제품들을 위탁생산 하고 있고, 좋은
        품질의 제품을 파트너들에게 원활하게 공급하고 있습니다. 만족스러운 품질을
        보장하고 납기일을 준수하여 든든한 동반자가 되어 드리겠습니다.
      </p>
    ),
  },
  {
    title: "Q. 제품소개에 소개된 제품 이외의 취급하는 제품이 있나요?",
    answer: (
      <p>
        저희가 생산하고 있는 대부분의 제품은 제품소개 메뉴에서 확인하실 수
        있습니다. 지속적으로 업데이트 하고 있으나, 아직 업데이트가 이루어지지
        않은 제품들이 있을 수도 있으니 전화 문의 주시기 바랍니다. 현재 보유하고
        있는 제품군 내에서 OEM 제품 생산을 요청하시는 경우는 맞춤생산을 해드릴
        수 있습니다.
      </p>
    ),
  },
  {
    title: "Q. 일반 소비자들도 제품을 구매할 수 있나요?",
    answer: (
      <p>
        저희는 제조와 도매만을 전문으로 하고 있습니다. 제품 판매 기본 단위가
        일반 소비자들이 구매하기 힘든 단위이기 때문에 일반 소비자들이 구매를
        하기에는 무리가 있습니다. 저희 제품을 구매하고자 하는 일반 소비자분들은
        저희 제품을 취급하는 온라인쇼핑몰이나 마트, 편의점을 이용하시길
        바랍니다.
      </p>
    ),
  },
  {
    title: "Q. 우진위생산업 제품의 견적을 문의하고 싶습니다.",
    answer: (
      <p>
        단가는 환율이나 물가에 따라서 수시로 변하기 때문에 전화 문의 하셔야
        합니다. 고객상담센터 운영시간은 평일 9시~18시이며, 토요일은 9시~12시
        입니다. 홈페이지 하단을 확인하셔서 언제든지 전화 주시면 친절하게 상담해
        드리겠습니다.
      </p>
    ),
  },
];

export default Inquiry;
