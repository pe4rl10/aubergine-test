import React from 'react'
import './styles.scss'
import { toJpeg } from "html-to-image";

const Card = ({index, university, link}) => {
  function downloadCard(cardId) {
      const card = document.getElementById(cardId);
      toJpeg(card, { quality: 0.95 }).then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${cardId}.jpeg`;
        link.click();
      });
  }
  return (
    <div className='card' id='index'>
      <a href={link[0]} target='_blank'>
        <div className='university-text'>
          {university}
        </div>
      </a>
      <button onClick={() => downloadCard(index)}>Download</button>
    </div>
  )
}

export default Card