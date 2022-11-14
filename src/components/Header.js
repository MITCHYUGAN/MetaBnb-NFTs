import { useState } from 'react'
import logo from '../Img/logo.png'
import X from '../Img/x.png'
import Modal from './Modal'
import { BiMenuAltRight } from "react-icons/bi";

const Header = () =>{

    const [openModal, setOpenModal] = useState(false)
    const [openNav, setOpenNav] = useState(false)

    return(
        <>
                 <header className='Header'>
                <a href="/MetaBnb-NFTs">
                    <img src={logo} alt="My Logo" className='logo' />
                </a>
                {
                    openNav && 
                    <nav className='mobilenav'>
                        <img src={X} alt="close Nav" onClick={() => { setOpenNav(false) }} className='closenav' />
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Placetostay">Place to stay</a></li>
                            <li>NFTs</li>
                            <li>Community</li>
                            <button className='nav-connect_btn'  onClick={() => { setOpenModal(true) }}>Connect wallet</button>
                        </ul>
                    </nav>
                }

                    <div className='desktopnav'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Placetostay">Place to stay</a></li>
                            <li>NFTs</li>
                            <li>Community</li>
                            <button className='nav-connect_btn'>Connect wallet</button>
                        </ul>
                    </div>

                <div className='aside'>
                    <button className='connect_btn' onClick={() => { setOpenModal(true) }}>Connect wallet</button>
                    <BiMenuAltRight className="navControl" onClick={() => { setOpenNav(true) }} />
                </div>  
            </header>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </>
    )
}

export default Header