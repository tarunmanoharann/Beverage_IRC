import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../assets/images/Tea.jpg';
import Img2 from '../assets/images/coffee.jpg';
import Img3 from '../assets/images/softdrinks.jpg';
import Img4 from '../assets/images/wine.jpg';
import Img5 from '../assets/images/whisky.jpg';
import '../assets/css/card.css';

const products = [
  { name: 'Tea', image: Img1, link: '/tea' },
  { name: 'Coffee', image: Img2, link: '/coffee' },
  { name: 'Soft Drinks', image: Img3, link: '/softdrinks' },
  { name: 'Wine', image: Img4, link: '/wine' },
  { name: 'Whisky', image: Img5, link: '/whisky' },
];

function Card() {
  return (
    <div id="scene">
      <ul className="list">
        <li className="item">
          <input type="radio" id="first" name="basic_carousel" value="first" defaultChecked />
          <div className="cardcontainer">
            {products.map((product, index) => (
              <Link key={index} to={product.link} className='card'>
                <img src={product.image} alt={product.name} />
                <h3 className="card-title">{product.name}</h3>
              </Link>
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Card;