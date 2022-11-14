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
                <Route path="/HNG-task-MetaBnb-NFTs" element={<PartnersInspirationMetabnbNftsLandingpage />} />
                <Route path='/HNG-task-MetaBnb-NFTs/Placetostay' element={<PlaceToStay />}></Route>
            </Routes>
          <Footer />
    </div>
  )
}

export default App;
