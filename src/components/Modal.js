import X from '../Img/x.png'
import metamaskimg from '../Img/metamask-img.png'
import arrow from '../Img/arrow.png'
import walletimg from '../Img/walletconnect-img.png'

const Modal = ({closeModal}) =>{
    return(
        <div id="modal">
            <div className="modal">
                <div className="modal-heading">
                    <h1>Connect Wallet</h1>
                    <img src={X} alt="" className='closemodal' onClick={() => { closeModal(false) }} />
                </div>
                <hr />
                <div className='choose'>
                    <p>Choose your preferred wallet:</p>
                    <button className='wallet'>
                        <img src={metamaskimg} alt="" />
                        <h3>Metamask</h3>
                        <img src={arrow} alt="" />
                    </button>
                    <button className='wallet'>
                        <img src={walletimg} alt="" />
                        <h3>WalletConnect</h3>
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal