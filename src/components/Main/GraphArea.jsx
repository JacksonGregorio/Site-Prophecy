import aboutimage2 from "../../assets/img/images/about_shape02.png";
import graphmain1 from "../../assets/img/images/graphcolor3.png";
import { useTranslation } from "react-i18next";

function AboutComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "GraphArea" });

    return (
        <section id="graph" class="about-area-two">
            <div class="container custom-container-four">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div
                            class="about-img-two text-center wow fadeInLeft"
                            data-wow-delay=".2s"
                        >
                            <img src={graphmain1} alt=""></img>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div
                            class="about-content-two wow fadeInRight"
                            data-wow-delay=".2s"
                        >
                            <div class="section-title text-center mb-4 mb-md-20">
                                <span class="sub-title">{t("title")}</span>
                                <h2 class="title">{t("subtitle")}</h2>
                            </div>
                            <p>{t("text")}</p>
                            <div class="about-list ">
                                <ul>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        {t("subtext1")}
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        {t("subtext2")}
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        {t("subtext3")}
                                    </li>
                                    <li>
                                        <i class="fas fa-check"></i>
                                        {t("subtext4")}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-shape-wrap">
                <img src={aboutimage2} alt="" class="shape-two rotateme"></img>
            </div>
        </section>
    );
}

export default AboutComponent;
