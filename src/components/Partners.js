import mbTokenLogo from '../Img/mbtoken_logo.svg'
import openSeaLogo from '../Img/opensea_logo.svg'
import metaMaskLogo from '../Img/metamask_logo.svg'

const Partners = () =>{
    return(
        <div className="partners">
            <img src={mbTokenLogo} className='partner_logo' alt="mb Token Logo" />
            <img src={metaMaskLogo} className='partner_logo' alt="meta Mask Logo" />
            <img src={openSeaLogo} className='partner_logo' alt="open Sea Logo" />
        </div>
    )
}

export default Partners