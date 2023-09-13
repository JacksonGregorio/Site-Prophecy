
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialPage from './routes/Initial.jsx';
import { Helmet } from 'react-helmet';
import SlidePage from './routes/slide.jsx';



function App() {
  return (
    <Router>
      <Helmet>
        <title>Prophecy</title>
        <meta charSet='UTF-8'/>
        <meta name='application-name' content='Prophecy'/>
        <meta name='description' content='Pagina do software de forex Prophecy'/>
        <meta name='keywords' content='forex,westernpips,software,trade' />
      </Helmet>
    <Routes>
      <Route exact path='/' element={<InitialPage/>}/>
      <Route exact path='/slide' element={<SlidePage/>}/>
    </Routes>
  </Router>
  );
}

export default App;
