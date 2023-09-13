import Kleberpng from "../../assets/img/team/kleberbg2.png";
import Guilhermepng from "../../assets/img/team/guilherbg.png";
import Beatrizpng from "../../assets/img/team/beatrizbg.png";
import Fabiopng from "../../assets/img/team/fabiobg.png";
import { useTranslation } from "react-i18next";

function TeamComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "TeamArea" });

    return (
        <section id="team" class="team-area pt-130">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-title text-center mb-70">
                            <span class="sub-title">{t("title")}</span>
                            <h2 class="title">
                                {t("subtitle")} <br></br>{" "}
                                <span>{t("team")}</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-md-4 col-sm-6">
                        <div class="team-item">
                            <div class="team-thumb">
                                <img src={Kleberpng} alt=""></img>
                            </div>
                            <div class="team-content">
                                <h2 class="title">Kleber Busto</h2>
                                <span>{t("companyposition1")}</span>
                                <ul class="team-social">
                                    <li>
                                        <a >
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a >
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-4 col-sm-6">
                        <div class="team-item">
                            <div class="team-thumb">
                                <img src={Guilhermepng} alt=""></img>
                            </div>
                            <div class="team-content">
                                <h2 class="title">Guilherme Toti</h2>
                                <span>{t("companyposition2")}</span>
                                <ul class="team-social">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-4 col-sm-6">
                        <div class="team-item">
                            <div class="team-thumb">
                                <img src={Fabiopng} alt=""></img>
                            </div>
                            <div class="team-content">
                                <h2 class="title">Fábio Soares</h2>
                                <span>{t("companyposition3")}</span>
                                <ul class="team-social">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-4 col-sm-6">
                        <div class="team-item">
                            <div class="team-thumb">
                                <img src={Beatrizpng} alt=""></img>
                            </div>
                            <div class="team-content">
                                <h2 class="title">Beatriz Busto</h2>
                                <span>{t("companyposition4")}</span>
                                <ul class="team-social">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamComponent;
