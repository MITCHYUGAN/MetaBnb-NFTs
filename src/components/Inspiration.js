import img1 from '../Img/img1.png'
import img2 from '../Img/img2.png'
import img3 from '../Img/img3.png'
import img4 from '../Img/img4.png'
import img5 from '../Img/img5.png'
import img6 from '../Img/img6.png'
import img7 from '../Img/img7.png'
import img8 from '../Img/img8.png'
import stars from '../Img/five-stars.png'

const Inspiration = () =>{
    return(
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
    )
}

export default Inspiration