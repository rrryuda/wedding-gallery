// React
import React from 'react';

// CSS
import './css/RElement.css';

// Img
import img01 from './source/placeholder-01.jpg';
import img02 from './source/placeholder-02.jpg';
import img03 from './source/placeholder-03.jpg';
import img04 from './source/placeholder-04.jpg';
import img05 from './source/placeholder-05.jpg';

const RImg = () => {
  return (
    <div className="rimg">
      <ul>
        <li>
          <img src={img01} alt="" />
          <img src={img02} alt="" />
          <img src={img03} alt="" />
          <img src={img04} alt="" />
          <img src={img05} alt="" />
        </li>
        <li>
          <img src={img01} alt="" />
          <img src={img02} alt="" />
          <img src={img03} alt="" />
          <img src={img04} alt="" />
          <img src={img05} alt="" />
        </li>
        <li>
          <img src={img01} alt="" />
          <img src={img02} alt="" />
          <img src={img03} alt="" />
          <img src={img04} alt="" />
          <img src={img05} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default RImg;