import HeaderModal from './components/Header'
import PartnersInspirationMetabnbNftsLandingpage from './components/MetabnbNfts';
import PlaceToStay from './components/PlaceToStay';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import './playtostay.css'

const App = () =>{

  return(
    <div className='App'>
          <HeaderModal />
            <Routes>
                <Route path="/" element={<PartnersInspirationMetabnbNftsLandingpage />} />
                <Route path='/Placetostay' element={<PlaceToStay />} />
            </Routes>
          <Footer />
    </div>
  )
}

export default App;
