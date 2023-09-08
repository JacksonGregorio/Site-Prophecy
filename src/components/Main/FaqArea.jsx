import '../../assets/css/style.css'
import '../../assets/css/slick.css'
import '../../assets/css/responsive.css'
import '../../assets/css/odometer.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/default.css'
import '../../assets/css/fontawesome-all.min.css'
import FaqimgShape01 from "../../assets/img/images/faq_shape01.png";
import FaqimgShape02 from "../../assets/img/images/faq_shape02.png";
import FaqimgShape03 from "../../assets/img/images/faq_shape02.png";
import React, { useState } from "react";
import {useTranslation} from 'react-i18next';

function FaqComponent() {

  const{t, i18n}= useTranslation('translation', {keyPrefix:'FaqArea'});
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const closeAccordion = () => {
    setActiveIndex(null);
  };

  return (
    <section id="faq" class="faq-area">
      <div class="container custom-container-four">
        <div class="faq-shape-wrap">
          <img src={FaqimgShape01} alt="" class="img-one"></img>
          <img src={FaqimgShape02} alt="" class="img-two rotateme"></img>
          <img src={FaqimgShape03} alt="" class="img-three"></img>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title section-title-two text-center mb-60">
              <h2 class="title">{t("Perguntas Frequentes")}</h2>
            </div>
            <div class="faq-wrap wow fadeInUp" data-wow-delay=".2s">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item" onMouseLeave={closeAccordion}>
                  <h2 className="accordion-header" id={`headingOne`}>
                    <button
                      className={`accordion-button ${
                        activeIndex === 1 ? "collapsed" : ""
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(1)}
                    >
                      {t("Preciso instalar algum software?")}
                    </button>
                  </h2>
                  <div
                    id={`collapseOne`}
                    className={`accordion-collapse collapse ${
                      activeIndex === 1 ? "show" : ""
                    }`}
                    aria-labelledby={`headingOne`}
                  >
                    <div class="accordion-body">
                      <p class='pt-2'>
                      {t("Na Prophecy, nos orgulhamos")}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item" onMouseLeave={closeAccordion}>
                  <h2 className="accordion-header" id={`headingTwo`}>
                    <button
                      className={`accordion-button ${
                        activeIndex === 2 ? "collapsed" : ""
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(2)}
                    >
                      {t("É necessário instalar o MetaTrader 5?")}
                    </button>
                  </h2>
                  <div
                    id={`collapseTwo`}
                    className={`accordion-collapse collapse ${
                      activeIndex === 2 ? "show" : ""
                    }`}
                    aria-labelledby={`headingTwo`}
                  >
                    <div className="accordion-body">
                      <p class='pt-2'>
                      {t("Para utilizar os nossos serviços")}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item" onMouseLeave={closeAccordion}>
                  <h2 className="accordion-header" id={`headingThree`}>
                    <button
                      className={`accordion-button ${
                        activeIndex === 3 ? "collapsed" : ""
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(3)}
                    >
                      {t("É possível começar a investir com qualquer valor?")}
                    </button>
                  </h2>
                  <div
                    id={`collapseThree`}
                    className={`accordion-collapse collapse ${
                      activeIndex === 3 ? "show" : ""
                    }`}
                    aria-labelledby={`headingThree`}
                  >
                    <div className="accordion-body">
                      <p class='pt-2'>
                      {t("No cenário financeiro atual")}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item" onMouseLeave={closeAccordion}>
                  <h2 className="accordion-header" id={`headingFour`}>
                    <button
                      className={`accordion-button ${
                        activeIndex === 4 ? "collapsed" : ""
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(4)}
                    >
                      {t("Por que trabalhamos com Forex na Prophecy?")}
                    </button>
                  </h2>
                  <div
                    id={`collapseFour`}
                    className={`accordion-collapse collapse ${
                      activeIndex === 4 ? "show" : ""
                    }`}
                    aria-labelledby={`headingFour`}
                  >
                    <div className="accordion-body">
                      <p class='pt-2'>
                      {t("Na Prophecy, a nossa escolha de trabalhar com Forex")}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item" onMouseLeave={closeAccordion}>
                  <h2 className="accordion-header" id={`headingFive`}>
                    <button
                      className={`accordion-button ${
                        activeIndex === 5 ? "collapsed" : ""
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(5)}
                    >
                      {t("Você deseja começar a usar nosso software?")}
                    </button>
                  </h2>
                  <div
                    id={`collapseFive`}
                    className={`accordion-collapse collapse ${
                      activeIndex === 5 ? "show" : ""
                    }`}
                    aria-labelledby={`headingFive`}
                  >
                    <div className="accordion-body">
                      <p class='pt-2'>
                      {t("Para começar a usar o nosso software")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqComponent;
