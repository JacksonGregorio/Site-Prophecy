import '../../assets/css/style.css'
import '../../assets/css/slick.css'
import '../../assets/css/responsive.css'
import '../../assets/css/odometer.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/default.css'
import '../../assets/css/fontawesome-all.min.css'
import {useTranslation} from 'react-i18next'

function FooterComponent() {

  const{t, i18n}= useTranslation('translation', {keyPrefix:'FooterComponent'});

  return (
    <footer id="footer">
      <div class="footer-area-two">
        <div class="container custom-container-four">
          <div class="footer-top">
            <div class="row">
              <div class="col-md-7">
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="/">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="row">
              <div class="col-lg-5">
                <div class="copyright-text">
                  <p>
                    {t("Blessed&copy© 2023. todos os Direitos Reservados")}
                  </p>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="scroll-up text-center" href="#header">
                  <a href="#header" data-target="#about">
                    <button class="scroll-to-target" href="#header">
                      <i href="#header" class="fas fa-arrow-up"></i>
                    </button>
                    <span>{t("Rolar para o topo")}</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="footer-bottom-menu">
                  <ul>
                    <li>
                      <a href="/">{t("Termos de Serviço")}</a>
                    </li>
                    <li>
                      <a href="/">{t("Política de Privacidade")}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
