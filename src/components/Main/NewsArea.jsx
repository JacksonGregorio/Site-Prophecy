import Download01 from "../../assets/img/banner/bannerprop2.png";
import { useTranslation } from "react-i18next";

function DownloadComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "NewsArea" });

    return (
        <section class="download-area pt-150 pb-140">
            <div class="container custom-container-four">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-6 order-0 order-lg-2">
                        <div
                            class="download-img text-center wow fadeInRight"
                            data-wow-delay=".2s"
                        >
                            <img src={Download01} alt=""></img>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6">
                        <div
                            class="download-content wow fadeInLeft"
                            data-wow-delay=".2s"
                        >
                            <div class="section-title text-center mb-4 mb-md-20">
                                <span class="sub-title">{t("title")}</span>
                                <h2 class="title">{t("subtitle")}</h2>
                            </div>
                            <p>{t("text")}</p>
                            <div class="download-btn">
                                <a>
                                    <img
                                        src="assets/img/images/download_btn01.png"
                                        alt=""
                                    ></img>
                                </a>
                                <a>
                                    <img
                                        src="assets/img/images/download_btn02.png"
                                        alt=""
                                    ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadComponent;
