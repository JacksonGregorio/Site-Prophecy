import React, { useState } from "react";
import Summary from "../../assets/img/images/summary.PNG";
import "../../assets/css/style.css";
import forexpng from "../../assets/img/images/forexphone.png";
import { useTranslation } from "react-i18next";

function SlateArea() {
    const [revealPosition, setRevealPosition] = useState(0);

    const handleMouseMove = (e) => {
        const revealX = e.nativeEvent.offsetX;
        setRevealPosition(revealX);
    };

    const { t } = useTranslation("translation", { keyPrefix: "ForexArea" });

    return (
        <section>
            <div class="container custom-container-four">
                <div class="row align-items-center">
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
                    <div class="col-xl-7 col-lg-6 order-0 order-lg-2">
                        <div
                            className="image-reveal-container"
                            onMouseMove={handleMouseMove}
                        >
                            <div className="image-container">
                                <img
                                    src={Summary} // Substitua pelo caminho da sua imagem oculta
                                    alt="Imagem Oculta"
                                    style={{
                                        transform: `translateX(${revealPosition}px)`,
                                    }}
                                />
                            </div>
                            <div
                                className="revealing-line"
                                style={{ left: `${revealPosition}px` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SlateArea;
