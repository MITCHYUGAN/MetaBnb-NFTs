

// LANING PAGE IMPORTS
import landingPageImg from '../Img/landpageimages.png'
import { FaSistrix } from "react-icons/fa";

// PARTNERS IMPORT
import mbTokenLogo from '../Img/mbtoken_logo.svg'
import openSeaLogo from '../Img/opensea_logo.svg'
import metaMaskLogo from '../Img/metamask_logo.svg'

// INSPIRATION IMPORTS
import img1 from '../Img/img1.png'
import img2 from '../Img/img2.png'
import img3 from '../Img/img3.png'
import img4 from '../Img/img4.png'
import img5 from '../Img/img5.png'
import img6 from '../Img/img6.png'
import img7 from '../Img/img7.png'
import img8 from '../Img/img8.png'
import stars from '../Img/five-stars.png'

// METABNB IMPORTS
import threeImages from '../Img/threeimages.png'



const Main = () =>{

    return(
        <div>
            {/* LANDING SECTION STARTS HERE */}

            <div className='App'>
                <div id='landingpage'>
                    <div className='landingpage'>
                        <div className='landingpageContent'>
                            <h1 className='landheadingtext'>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                            <p className='landingparagraph'>We provide you access to luxury and affordable houses in the metaverse, 
                            get a chance to turn your imagination to reality at your comfort zone. 
                            </p>
                            <div className='search'>
                                <input type="text" placeholder='Search for location' className='searchInput'/>
                                <button className='searchBtn'>Search</button>
                                <FaSistrix className='searchIcon' />
                            </div>
                        </div>
                        <img src={landingPageImg} className="landpageImg" alt="landing Page Img" />
                    </div>
                </div>  
            </div>

            {/* PARTNERS SECTION STARTS HERE */}

            <div className="partners">
                <img src={mbTokenLogo} className='partner_logo' alt="mb Token Logo" />
                <img src={metaMaskLogo} className='partner_logo' alt="meta Mask Logo" />
                <img src={openSeaLogo} className='partner_logo' alt="open Sea Logo" />
            </div>

            {/* INSPIRATION SECTION STARTS */}

            <div className='inspiration-container'>
            <h1 className='insheading'>Inspiration for your next adventure</h1>
            <div className='inspirations'>
                <div className='inspiration'>
                    <img className='insimg' src={img1}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img className='insimg' src={img2}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img className='insimg' src={img3}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img className='insimg' src={img4}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img className='insimg' src={img5}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img src={img6}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img src={img7}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
                <div className='inspiration'>
                    <img src={img8}  alt="" />
                    <div className='inscontents'>
                        <div className='cont'>
                            <p className='title'>Desert king</p>
                            <p className='pernight'>1MBT per night</p>
                        </div>
                        <div className='cont'>
                            <p className='km'>2345km away</p>
                            <p className='available'>available for 2weeks stay</p>
                        </div>
                        <img src={stars} className='starts' alt="" />
                    </div>
                </div>
            </div>
            </div>

            {/* META BNB SECTON STARTS */}
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

        </div>
    )
}

export default Main