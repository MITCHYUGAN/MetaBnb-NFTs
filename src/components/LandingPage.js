import landingPageImg from '../Img/landpageimages.png'
import { FaSistrix } from "react-icons/fa";


const LandingPage = () =>{
    return(
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
    )
}

export default LandingPage