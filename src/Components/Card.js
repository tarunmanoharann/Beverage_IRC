import React from 'react';
import Img1 from '../assets/images/Tea.jpg';
import Img2 from '../assets/images/coffee.jpg';
import Img3 from '../assets/images/softdrinks.jpg';
import Img4 from '../assets/images/wine.jpg';
import Img5 from '../assets/images/whisky.jpg';
import '../assets/css/card.css';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <div id="scene">
      <div id="left-zone">
        <ul className="list">
          <li className="item">
            <input type="radio" id="first" name="basic_carousel" value="first" checked />
            <label className="label_one" htmlFor="first">Showcase</label>
            <div className="content content_one">
              <div className="cardcontainer">
                <Link to="/tea" className='card' style={{opacity:'0.9'}}>
                  <h3 className="card-title">Tea</h3>
                  <img src={Img1}  alt='img'/>
                </Link>

                <Link to="/coffee" className="card" style={{opacity: '0.9' }}>
                  <h3 className="card-title">Coffee</h3>
                  <img src={Img2} alt='img'/>
                </Link>

                <Link to="/softdrinks" className="card" style={{opacity: '0.9' }}>
                  <h3 className="card-title">Soft Drinks</h3>
                  <img src={Img3} alt='img'/>
                </Link>

                <Link to="/wine" className="card" style={{opacity: '0.9' }}>
                  <h3 className="card-title">Wine</h3>
                  <img src={Img4} alt='img'/>
                </Link>

                <Link to="/whisky" className="card" style={{opacity: '0.9' }}>
                  <h3 className="card-title">Whisky</h3>
                  <img src={Img5} alt='img'/>
                </Link>
                
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
  );
}


export default Card;
