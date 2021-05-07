import "./style.scss";

const Greeting = () => (
  <div id="greeting" className="Greeting">
    <div className="LaytoutContents__sub">
      <div className="Greeting__inner">
        <div className="Greeting__title">
          <h3 className="Mixin__title Mixin__title--left">
            <strong>안녕하십니까</strong>
            <br />
            우진위생산업 대표 <br />
            이의락입니다.
          </h3>
          <h4 className="Mixin__title-bar Mixin__title-bar--left">
            좋은 제품과 믿음으로 고객만족을 추구하고, 작은 것 하나 하나 혁신하여
            행복한 삶에 공헌하겠습니다.
          </h4>
        </div>
        <div className="Greeting__description">
          <p>
            안녕하십니까? 우진위생산업을 방문해 주셔서 감사합니다.
            <br />
            <br />
            위생저 제조와 생활위생용품 제조를 전문으로 하고 있는 당사는 좋은
            질좋고 정직한 가격으로 자사 브랜드 뿐만 아니라 OEM , PB상품 및
            상조용 젓가락을 생산하고 있습니다. <br />
            <br />
            소비자들의 생활 수준이 높아짐에 따라서 제품에서 원하는 요구 수준도
            함께 높아지고 있습니다. 당사는 언제나 소비자를 생각한 좋은 제품을
            제공하고 신용을 최우선으로 생각하여 고객사의 만족과 최종 소비자의
            만족을 동시에 추구하고 있습니다. '고객들이 먼저 찾는 제품을
            만든다'는 목표를 가지고 작은 것 하나 하나 지나치지 않고 혁신을 해
            나아감으로써 행복한 삶에 공헌하는 것, 우진위생산업이 추구하는
            가치입니다. <br />
            <br />
            계속해서 당사가 발전해 나아가는 모습 관심있게 지켜봐 주시길 바라며,
            기대에 부응하도록 항상 노력하는 기업이 될 것을 약속드립니다.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Greeting;
