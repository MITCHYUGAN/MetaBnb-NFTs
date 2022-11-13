import whiteLogo from '../Img/logowhite.svg'
import facebook from '../Img/facebook-icon.png'
import instagram from '../Img/instagram-icon.png'
import twitter from '../Img/twitter-icon.png'
import copyright from '../Img/copyright-icon.png'

const Footer = () =>{
    return(
        <div className='Footer'>
            <div className='Footer-wrapper'>
                <div className='footerlogo_icons'>
                    <img src={whiteLogo} alt="" className='footer-logo'/>
                    <div className='footer-icons'>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                    <div className='copyright'>
                        <img src={copyright} alt="" />
                        <p>2022 Metabnb</p>
                    </div>
                </div>
                <nav className='footer-nav'>
                    <ul>
                        <p>Community</p>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </nav>
                <nav className='footer-nav'>
                    <ul>
                        <p>Places</p>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </nav>
                <nav className='footer-nav'>
                    <ul>
                        <p>About us</p>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer