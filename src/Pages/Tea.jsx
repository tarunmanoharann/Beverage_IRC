import React,{useEffect,useRef} from 'react'
import '../assets/css/carousel.css'

import tea01 from '../assets/images/tea/tea1.jpg'
import tea02 from '../assets/images/tea/tea2.jpg'
import tea03 from '../assets/images/tea/tea3.jpg'
import tea04 from '../assets/images/tea/tea4.jpg'
import tea05 from '../assets/images/tea/tea5.jpg'


export default function Tea() {

  const progress = useRef(50);
  const startX = useRef(0);
  const active = useRef(0);
  const isDown = useRef(false);
  const $itemsRef = useRef([]);
  const $cursorsRef = useRef([]);
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)));

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$itemsRef.current], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / $itemsRef.current.length);
  };

  const animate = () => {
    progress.current = Math.max(0, Math.min(progress.current, 100));
    active.current = Math.floor(progress.current / 100 * ($itemsRef.current.length - 1));

    $itemsRef.current.forEach((item, index) => displayItems(item, index, active.current));
  };

  useEffect(() => {
    $itemsRef.current = document.querySelectorAll('.carousel-item');
    $cursorsRef.current = document.querySelectorAll('.cursor');

    $itemsRef.current.forEach((item, index) => displayItems(item, index, active.current));

    $itemsRef.current.forEach((item, i) => {
      item.addEventListener('click', () => {
        progress.current = (i / $itemsRef.current.length) * 100 + 10;
        animate();
      });
    });

    document.addEventListener('mousewheel', handleWheel);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      // Remove event listeners when component unmounts
      document.removeEventListener('mousewheel', handleWheel);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []); 

  const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel;
    progress.current = progress.current + wheelProgress;
    animate();
  };

  const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
      $cursorsRef.current.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (!isDown.current) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX.current) * speedDrag;
    progress.current = progress.current + mouseProgress;
    startX.current = x;
    animate();
  };

  const handleMouseDown = e => {
    isDown.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  return (
    <>    
    <div className="carousel">
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">01</div>
    
          <img src={tea01} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">02</div>
          <img src={tea02} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">03</div>
          <img src={tea03} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">04</div>
          <img src={tea04} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">05</div>
          <img src={tea05} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">06</div>
          <img src={tea01} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">07</div>
          <img src={tea02} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">08</div>
          <img src={tea03} alt="card-effect" />
        </div>
      </div>
    
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">09</div>
          <img src={tea04} alt="card-effect" />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-box">
          <div className="title">10</div>
          <img src={tea05} alt="card-effect" />
        </div>
      </div>

      <div className="layout">
      <div className="box">Tea</div>
      </div>



    </div>
    
   
    
    <div className="cursor"></div>
    <div className="cursor cursor2"></div>
         </>
  )
}
