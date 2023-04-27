import React from 'react';
import './AdvertisementCard.css';

function AdvertisementCard() {
  return (
    <div className="advertisement-card">
      <a href="https://www.bata.in/sale/?gad=1&gclid=CjwKCAjwuqiiBhBtEiwATgvixP4874z19Ux33MdbDZvxHAvTB4cDigAWRVcPMvIj8nWFdwiBS06NqRoCt78QAvD_BwE" target="_blank" rel="noopener noreferrer">
        <div className="advertisement-content">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f3723297524223.5ec6dcf06eeec.gif" alt="Mamaearth Offer" className="advertisement-image" />
          <h2 className="advertisement-title">GET YOUR BATA NOW</h2>
          <ul className="advertisement-offers-list">
            <li>upto 50% off</li>
            <li>Free shipping on orders above Rs. 1000</li>
          </ul>
          <button className="advertisement-button">Shop Now</button>
        </div>
      </a>
    </div>
  );
}

export default AdvertisementCard;
