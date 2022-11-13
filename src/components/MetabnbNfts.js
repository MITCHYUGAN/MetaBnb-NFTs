import threeImages from '../Img/threeimages.png'
import Partners from './Partners';
import Inspiration from './Inspiration';
import LandingPage from './LandingPage';

const MetabnbNfts = () =>{
    return(
        <div className='MetabnbNfts'>
           <div className='MetabnbNfts-wrapper'>
                <div className='MetabnbNfts-contents'>
                    <h1 className='MetabnbNfts-header'>Metabnb NFTs</h1>
                    <p className='MetabnbNfts-paragraph'>Discover our NFT gift cards collection. 
                    Loyal customers gets amazing gift cards 
                    which are traded as NFTs. These NFTs 
                    gives our cutomer access to loads of 
                    our exclusive services.
                    </p>
                    <button className='MetabnbNfts-btn'>Learn More</button>
                </div>
                <div className='MetabnbNfts-img'>
                    <img src={threeImages} alt="" width='100%'/>
                </div>  
           </div>
        </div>
    )
}

const PartnersInspirationMetabnbNftsLandingpage = () =>{
    return(
        <>
            <LandingPage />
            <Partners />
            <Inspiration />
            <MetabnbNfts/>
        </>
    )
}

export default PartnersInspirationMetabnbNftsLandingpage