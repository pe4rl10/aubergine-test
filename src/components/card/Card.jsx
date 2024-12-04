import React from 'react'
import './styles.scss'
const Card = ({index, university, link}) => {
  return (
    <div className='card' id={index}>
      <a href={link[0]} target='_blank'>
        <div className='university-text'>
          {university}
        </div>
      </a>
      <button>Download</button>
    </div>
  )
}

export default Card