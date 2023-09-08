
import bannerimg from "../../assets/img/banner/tabletperfect.png";
import bannering1 from "../../assets/img/banner/banner_shape01.png";
import bannering2 from "../../assets/img/banner/banner_shape01.png";
import bannering3 from "../../assets/img/banner/banner_shape01.png";
import '../../utils/i18n';
import {useTranslation} from 'react-i18next'
import React from "react";

function BannerComponent() {
  const{t, i18n}= useTranslation('translation', {keyPrefix:'BannerArea'});
  return (
    <section id="banner" class="banner-area banner-bg">
                <div class="banner-shape-wrap">
                    <img src={bannering1} alt="" class="img-one"></img>
                    <img src={bannering2} alt="" class="img-two"></img>
                    <img src={bannering3} alt="" class="img-three"></img>
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="banner-content text-center">
                                <img src={bannerimg} alt=""></img>
                                <h2 class="title">{t('PROPHECY A Evolução Da Alta Frequência')}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="banner-countdown-wrap text-center">
                                <h2 class="title">{t("ICO Começará")}</h2>
                                <div class="coming-time" data-countdown="2023/1/29"></div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
  );
}

export default BannerComponent;
