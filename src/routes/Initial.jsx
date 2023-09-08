import SpinnerComponent from '../components/Spinner/Spinner.jsx';
import FooterComponent from '../components/Footer/Footer.jsx';
import AboutComponent from '../components/Main/GraphArea.jsx';
import ChooseComponent from '../components/Main/ChooseArea.jsx';
import DownloadComponent from '../components/Main/NewsArea.jsx';
import FaqComponent from '../components/Main/FaqArea.jsx';
import ContactComponent from '../components/Main/ContactArea.jsx';
import ForexComponent from '../components/Main/ForexArea.jsx';
import HeaderComponent from '../components/Header/Header.jsx';
import BannerComponent from '../components/Main/BannerArea.jsx';
import TeamComponent from '../components/Main/TeamArea.jsx';





function InitialPage() {
  return (
    
    <body class="bg-custom">
    <HeaderComponent></HeaderComponent>
    <main class="fix">
    <BannerComponent></BannerComponent>
    <AboutComponent></AboutComponent>
    <ChooseComponent></ChooseComponent>
    <ForexComponent></ForexComponent>
    <TeamComponent></TeamComponent>
    <DownloadComponent></DownloadComponent>
    <FaqComponent></FaqComponent>
    <ContactComponent></ContactComponent>
    </main>
   <FooterComponent></FooterComponent>
    <SpinnerComponent></SpinnerComponent>
   </body>
   
   

  );
}

export default InitialPage;

