import "./style.scss";

import iconQuality from "../../../../assets/images/icon-quality.png";
import iconTrust from "../../../../assets/images/icon-trust.png";
import iconHappiness from "../../../../assets/images/icon-happiness.png";

const Values = () => (
  <div id="values" className="Values">
    <div className="LaytoutContents__sub">
      <h3 className="Mixin__title">
        <i>핵심가치</i>
      </h3>
      <div className="Values__inner">
        <div className="Values__item">
          <strong>Quality</strong>
          <span>
            <img src={iconQuality} alt="품질 아이콘" />
          </span>
          <p>
            항상 품질을 향상시키기 위해 고민하고, 그로 인한 소비자들의 생활
            수준도 높여 나아가겠습니다.
          </p>
        </div>
        <div className="Values__item">
          <strong>Trust</strong>
          <span>
            <img src={iconTrust} alt="믿음 아이콘" />
          </span>
          <p>
            정직함과 성실함으로 신뢰를 쌓아가고, 고객사들의 든든한 사업 파트너가
            되겠습니다.
          </p>
        </div>
        <div className="Values__item">
          <strong>Happiness</strong>
          <span>
            <img src={iconHappiness} alt="행복 아이콘" />
          </span>
          <p>
            소비자들의 행복한 삶에 가치를 두어 제품의 작은 것 하나 하나 지나치지
            않고 혁신하겠습니다.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Values;
