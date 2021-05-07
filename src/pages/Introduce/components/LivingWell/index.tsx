import "./style.scss";

import livingBg from "../../../../assets/images/bg-living.jpeg";

const LivingWell = () => (
  <div id="livingWell" className="LivingWell">
    <div className="LaytoutContents__sub">
      <h3 className="Mixin__title">
        우진위생산업의 또다른 브랜드 <i>리빙웰</i>
      </h3>
      <h4 className="Mixin__title-bar">
        리빙웰은 건강한 생활을 약속하는 믿을 수 있는 생활위생용품 브랜드 입니다.
      </h4>

      <div className="LivingWell__description">
        <p>
          우진위생산업은 보다 좋은 제품을 합리적인 가격으로 제공하기 위하여
          2010년부터 '리빙웰' 이라는 브랜드를 런칭하여 생산하고 있습니다. <br />
          <br />
          보다 철저한 품질관리와 제조 환경 개선으로 소비자의 만족도를 향상하고,
          보다 다양한 제품군을 출시하여 더욱 많은 소비자들에게 다가가 근본적으로
          소비자들의 생활 수준을 향상시키는 데에 목적을 두고 있습니다. <br />
          <br />
          생활 속의 작은 것 하나 부터 혁신하여 온 국민에게 사랑받는 생활위생용품
          브랜드로 자리매김 할 때 까지, 끊임 없는 연구와 노력하는 모습
          보여드리겠습니다.
        </p>
        <span>
          <img src={livingBg} alt="리빙웰 이미지" />
        </span>
      </div>
    </div>
  </div>
);

export default LivingWell;
