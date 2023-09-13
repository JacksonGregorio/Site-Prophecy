import CooseIcon01 from "../../assets/img/icon/h2_choose_icon01.svg";
import CooseIcon02 from "../../assets/img/icon/h2_choose_icon02.svg";
import CooseIcon03 from "../../assets/img/icon/h2_choose_icon03.svg";
import CooseIcon04 from "../../assets/img/icon/h2_choose_icon04.svg";
import { useTranslation } from "react-i18next";

function ChooseComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "ChooseArea" });
    return (
        <section class="chart-area chart-bg">
            <div class="container custom-container-four">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center mb-70">
                            <span class="sub-title">{t("title")}</span>
                            <h2 class="title">{t("subtitle")}</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div
                            class="choose-item-two wow fadeInUp"
                            data-wow-delay=".2s"
                        >
                            <div class="choose-icon-two">
                                <img src={CooseIcon01} alt=""></img>
                            </div>
                            <div class="choose-content">
                                <h2 class="title">
                                    <a>{t("subtitlepayment")}</a>
                                </h2>
                                <p>{t("textpayment")}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div
                            class="choose-item-two wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div class="choose-icon-two">
                                <img src={CooseIcon02} alt=""></img>
                            </div>
                            <div class="choose-content">
                                <h2 class="title">
                                    <a href="#">{t("subtitletransfer")}</a>
                                </h2>
                                <p>{t("texttransfer")}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div
                            class="choose-item-two wow fadeInUp"
                            data-wow-delay=".6s"
                        >
                            <div class="choose-icon-two">
                                <img src={CooseIcon03} alt=""></img>
                            </div>
                            <div class="choose-content">
                                <h2 class="title">
                                    <a href="#">{t("subtitlemeta")}</a>
                                </h2>
                                <p>{t("textmeta")}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div
                            class="choose-item-two wow fadeInUp"
                            data-wow-delay=".8s"
                        >
                            <div class="choose-icon-two">
                                <img src={CooseIcon04} alt=""></img>
                            </div>
                            <div class="choose-content">
                                <h2 class="title">
                                    <a>{t("subtitlesecurity")}</a>
                                </h2>
                                <p>{t("textsecurity")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseComponent;
