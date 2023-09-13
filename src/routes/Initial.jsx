import SpinnerComponent from "../components/Spinner/Spinner.jsx";
import FooterComponent from "../components/footer/Footer.jsx";
import AboutComponent from "../components/Main/GraphArea.jsx";
import ChooseComponent from "../components/Main/ChooseArea.jsx";
import DownloadComponent from "../components/Main/NewsArea.jsx";
import FaqComponent from "../components/Main/FaqArea.jsx";
import ContactComponent from "../components/Main/ContactArea.jsx";
import ForexComponent from "../components/Main/ForexArea.jsx";
import HeaderComponent from "../components/header/Header.jsx";
import BannerComponent from "../components/Main/BannerArea.jsx";
import TeamComponent from "../components/Main/TeamArea.jsx";

function InitialPage() {
    return (
        <body class="bg-custom">
            <HeaderComponent />
            <main class="fix">
                <BannerComponent />
                <AboutComponent />
                <ChooseComponent />
                <ForexComponent />
                <TeamComponent />
                <DownloadComponent />
                <FaqComponent />
                <ContactComponent />
            </main>
            <FooterComponent />
            <SpinnerComponent />
        </body>
    );
}

export default InitialPage;
