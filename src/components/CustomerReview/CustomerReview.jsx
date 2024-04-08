import React, { useRef } from 'react'
import './CustomerReview.css'
import nexticon from '../../assets/right-arrow_271228.png'
import backicon from '../../assets/left-arrow_271220.png'
import user from '../../assets/photo.png'

const CustomerReview = () => {

    const slider = useRef();
    let tx=0;
    const slideforward=()=>{
        if(tx>-60){
            tx-=20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackward=()=>{
        if(tx<0){
            tx+=20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='review'>
      <img src={nexticon} className='next-btn' onClick={slideforward}></img>
      <img src={backicon} className='back-btn' onClick={slidebackward}></img>
      <div className="slider">
        <ul ref={slider}>
            <li className='list'>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user} alt="" />
                        <div>
                            <h3>Rushikesh Tonde</h3>
                            <span>Pune,MH</span>
                        </div>
                    </div>
                    <p>description of the user and review should be wr chitten 
                        here we need to change once it is given by client description of the user and review should be wr chitten 
                        here we need to change once it is
                    </p>
                </div>
            </li>
            <li className='list'>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user} alt="" />
                        <div>
                            <h3>Harsh Birajdar</h3>
                            <span>Hyderabad,TS</span>
                        </div>
                    </div>
                    <p>description of the user and review should be wr chitten 
                        here we need to change once it is given by client description of the user and review should be wr chitten 
                        here we need to change once it is</p>
                </div>
            </li>
            <li className='list'>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user} alt="" />
                        <div>
                            <h3>Rushi Tonde</h3>
                            <span>Latur, MH</span>
                        </div>
                    </div>
                    <p>description of the user and review should be wr chitten 
                        here we need to change once it is given by client description of the user and review should be wr chitten 
                        here we need to change once it is</p>
                </div>
            </li>
            <li className='list'>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user} alt="" />
                        <div>
                            <h3>Harsh</h3>
                            <span>Parli,MH</span>
                        </div>
                    </div>
                    <p>description of the user and review should be wr chitten 
                        here we need to change once it is given by client description of the user and review should be wr chitten 
                        here we need to change once it is</p>
                </div>
            </li>
            <li className='list'>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user} alt="" />
                        <div>
                            <h3>Harsh Birajdar</h3>
                            <span>Nande,MH</span>
                        </div>
                    </div>
                    <p>description of the user and review should be wr chitten 
                        here we need to change once it is given by client description of the user and review should be wr chitten 
                        here we need to change once it is</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default CustomerReview
