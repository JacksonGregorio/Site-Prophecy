
import CooseIcon01 from "../../assets/img/icon/h2_choose_icon01.svg";
import CooseIcon02 from "../../assets/img/icon/h2_choose_icon02.svg";
import CooseIcon03 from "../../assets/img/icon/h2_choose_icon03.svg";
import CooseIcon04 from "../../assets/img/icon/h2_choose_icon04.svg";
import {useTranslation} from 'react-i18next'

function ChooseComponent() {
  const{t, i18n}= useTranslation('translation', {keyPrefix:'ChooseArea'});
  return (
    <section class="chart-area chart-bg">
  <div class="container custom-container-four">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="section-title text-center mb-4 mb-md-20">
          <span class="sub-title">{t("Por que nos escolher")}</span>
          <h2 class="title">{t("Por que escolher o nosso serviço")}</h2>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="choose-item-two wow fadeInUp" data-wow-delay=".2s">
          <div class="choose-icon-two mr-5">
            <img src={CooseIcon01} alt="" />
          </div>
          <div class="choose-content">
            <h2 class="title">
              <a href="#">{t("Pagamento seguro para você!")}</a>
            </h2>
            <p>{t("Nossa plataforma garante pagamentos")}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="choose-item-two fadeInUp" data-wow-delay=".4s">
          <div class="choose-icon-two mr-5">
            <img src={CooseIcon02} alt="" />
          </div>
          <div class="choose-content">
            <h2 class="title">
              <a href="#">{t("Transferência de Forex em tempo real")}</a>
            </h2>
            <p>{t("Acesse dados de Forem em tempo real")}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="choose-item-two fadeInUp" data-wow-delay=".6s">
          <div class="choose-icon-two mr-5">
            <img src={CooseIcon03} alt="" />
          </div>
          <div class="choose-content">
            <h2 class="title">
              <a href="#">{t("Integração com MetaTrader")}</a>
            </h2>
            <p>{t("A perfeita integração com o MetaTrader")}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="choose-item-two fadeInUp" data-wow-delay=".8s">
          <div class="choose-icon-two  mr-5">
            <img src={CooseIcon04} alt="" />
          </div>
          <div class="choose-content">
            <h2 class="title">
              <a href="#">{t("Segurança de transações")}</a>
            </h2>
            <p>{t("Damos prioridade à segurança")}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default ChooseComponent;
