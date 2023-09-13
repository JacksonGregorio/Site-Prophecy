import SpinnerComponent from "../components/Spinner/Spinner.jsx";
import FooterComponent from "../components/footer/Footer.jsx";
import HeaderComponent from "../components/header/Header.jsx";
import BannerComponent from "../components/Main/BannerArea.jsx";
import SlateArea from "../components/mainslides/slate.jsx";

function SlidePage() {
    return (
        <body class="bg-custom">
            <HeaderComponent />

            <main>
            <BannerComponent/>
            </main>

            <FooterComponent />
            <SpinnerComponent/>
        </body>
    );
}

export default SlidePage;
