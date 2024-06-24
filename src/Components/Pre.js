// Pre.js
import React, { useEffect, useState } from 'react';
import '../assets/css/Pre.css';

const Pre = ({ setLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [setLoading]);

  return (
    <div className="preloader">
      <div className="pre-logo">
      <span className="smoothgulp-title">
           Smooth<span className="gulp">G<span className="drop"></span>ulp</span>
          <span className="bubble"></span>
          </span> 
    </div>
      <div className="liquid-container">
        <div className="liquid" style={{ height: `${progress}%` }}></div>
      </div>
      <div className="loading-text">{Math.round(progress)}%</div>
    </div>
  );
};

export default Pre;

