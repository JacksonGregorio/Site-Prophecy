import ContactIcon01 from "../../assets/img/icon/contact_icon01.svg";
import { useTranslation } from "react-i18next";

function ContactComponent() {
    const { t } = useTranslation("translation", { keyPrefix: "ContactArea" });

    return (
        <section id="contact" class="document-area pt-60">
            <div class="container custom-container-four">
                <div class="contact-inner">
                    <div class="row">
                        <div class="col-lg-6">
                            <div
                                class="contact-info-wrap-two wow fadeInLeft"
                                data-wow-delay=".2s"
                            >
                                <h2 class="title">{t("textcontact")}</h2>
                                <div class="contact-list-item">
                                    <div class="icon mr-2">
                                        <img src={ContactIcon01} alt=""></img>
                                    </div>
                                    <div class="content">
                                        <p>support@blessed.com</p>
                                    </div>
                                </div>
                                <div class="contact-list-item">
                                    <div class="icon mr-2">
                                        <img src={ContactIcon01} alt=""></img>
                                    </div>
                                    <div class="content">
                                        <p>088 (778 886 664)</p>
                                    </div>
                                </div>
                                <div class="contact-list-item">
                                    <div class="icon mr-2">
                                        <img src={ContactIcon01} alt=""></img>
                                    </div>
                                    <div class="content">
                                        <p>088 (778 886 664)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div
                                class="contact-form-wrap-two wow fadeInRight"
                                data-wow-delay=".2s"
                            >
                                <h2 class="title">{t("talkcontact")}</h2>
                                <form action="#">
                                    <input
                                        type="text"
                                        placeholder={t("Namecontact")}
                                        required
                                    ></input>
                                    <input
                                        type="email"
                                        placeholder={t("emailcontact")}
                                        required
                                    ></input>
                                    <textarea
                                        name="massage"
                                        placeholder={t("messagecontact")}
                                        required
                                    ></textarea>
                                    <button type="submit" class="btn btn-two">
                                        {t("messagesend")}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactComponent;
