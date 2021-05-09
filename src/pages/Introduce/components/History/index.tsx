import "./style.scss";

import historyDaiso from "../../../../assets/images/history-daiso.png";
import historyFactory from "../../../../assets/images/history-factory.jpeg";
import historyHwami from "../../../../assets/images/history-hwami.jpeg";
import historyAlpha from "../../../../assets/images/history-alpha.jpeg";
import historyChopsticks from "../../../../assets/images/history-chopsticks.png";
import historyWoojinliving from "../../../../assets/images/history-woojinliving.png";
import historyOfficedepot from "../../../../assets/images/history-officedepot.jpeg";
import historySewon from "../../../../assets/images/history-sewon.jpeg";
import historySama from "../../../../assets/images/history-sama.jpeg";
import historyNabi from "../../../../assets/images/history-nabi.jpeg";
import historyHat from "../../../../assets/images/history-hat.jpeg";
import historyFactory2 from "../../../../assets/images/history-factory-2.jpeg";
import historyCoupang from "../../../../assets/images/history-coupang.png";
import historyBhc from "../../../../assets/images/history-bhc.png";
import historyDeliveryHero from "../../../../assets/images/history-delivery-hero.png";

const History = () => (
  <div id="history" className="History">
    <div className="LayoutContents__sub">
      <div className="History__title">
        <h3 className="Mixin__title">
          <i>회사연혁</i>
        </h3>
      </div>
      <div className="HistoryTimeline">
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2021</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>딜리버리히어로 공급 계약 체결</strong>
              <span>
                <img src={historyDeliveryHero} alt="딜리버리히어로 이미지" />
              </span>
              <p>딜리버리히어로 요기요알뜰쇼핑 공급 계약 체결</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2020</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>사업장 확장 이전</strong>
              <span>
                <img src={historyFactory2} alt="공장 이미지" />
              </span>
              <p>현 사업장으로 사업장 확장 이전</p>
            </div>
            <div className="HistoryTimeline__box">
              <strong>BHC OEM생산 계약 체결</strong>
              <span>
                <img src={historyBhc} alt="BHC 이미지" />
              </span>
              <p>BHC그룹 전국 대리점 나무젓가락 OEM생산 계약 체결</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2016</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>쿠팡 공급 계약 체결</strong>
              <span>
                <img src={historyCoupang} alt="쿠팡 이미지" />
              </span>
              <p>리빙웰 브랜드 전 품목 쿠팡 공급 계약 체결</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2014</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>다이소 OEM생산 시작</strong>
              <span>
                <img src={historyDaiso} alt="나무젓가락 이미지" />
              </span>
              <p>나무젓가락, 이쑤시개 제품군 생산 시작</p>
            </div>
            <div className="HistoryTimeline__box">
              <strong>사업장 확장 이전</strong>
              <span>
                <img src={historyFactory} alt="공장 이미지" />
              </span>
              <p>구리 사업장 확장 이전</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2011</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>화미식자재 OEM생산 시작</strong>
              <span>
                <img src={historyHwami} alt="비닐포장저 이미지" />
              </span>
              <p>나무젓가락 제품군 생산 시작</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2010</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>알파문구 OEM생산 시작</strong>
              <span>
                <img src={historyAlpha} alt="이쑤시개, 면봉 이미지" />
              </span>
              <p>나무젓가락, 이쑤시개, 면봉 제품 생산 시작</p>
            </div>
            <div className="HistoryTimeline__box">
              <strong>생활위생용품 브랜드 리빙웰 런칭</strong>
              <span>
                <img src={historyChopsticks} alt="나무젓가락 이미지" />
              </span>
              <p>자체 생활위생용품 브랜드 리빙웰 런칭과 함께 웹사이트 오픈</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2008</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>우진위생산업으로 상호명 변경</strong>
              <span>
                <img src={historyWoojinliving} alt="우진위생산업 로고 이미지" />
              </span>
              <p>사업장 확장 이전과 함께 '우진위생산업'으로 상호명 변경</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2005</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>오피스디포 OEM생산 시작</strong>
              <span>
                <img src={historyOfficedepot} alt="목장갑, 반코팅장갑 이미지" />
              </span>
              <p>면장갑, 코팅장갑 제품 생산 시작</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2004</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>세원종합유통 OEM생산 시작</strong>
              <span>
                <img
                  src={historySewon}
                  alt="나무젓가락, 이쑤시개, 면봉, 꼬지 이미지"
                />
              </span>
              <p>나무젓가락, 이쑤시개, 면봉, 꼬지 제품 생산 시작</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>2000</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>삼아알미늄상사 OEM생산 시작</strong>
              <span>
                <img
                  src={historySama}
                  alt="나무젓가락, 이쑤시개, 면봉 이미지"
                />
              </span>
              <p>나무젓가락, 이쑤시개, 면봉 제품 생산 시작</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>1988</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>나비표 상표 등록</strong>
              <span>
                <img src={historyNabi} alt="나비표 로고 이미지" />
              </span>
              <p>우진할저 최초 독자 브랜드 나비표 상표 등록</p>
            </div>
          </div>
        </div>
        <div className="HistoryTimeline__row">
          <div className="HistoryTimeline__date">
            <strong>1986</strong>
          </div>
          <div className="HistoryTimeline__content">
            <div className="HistoryTimeline__box">
              <strong>우진할저 창업</strong>
              <span>
                <img src={historyHat} alt="이미지" />
              </span>
              <p>나무젓가락 자동 포장 전문 업체 '우진할저' 창업</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default History;
