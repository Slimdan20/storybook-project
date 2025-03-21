import React from 'react'
import './Project.css'

const Project = ({ image, name, description, price, bgColor }) => {
    const output = () => {
        console.log(`${name} added to cart`)
    }

  return (
    <div >
        <div className='container'>
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div className='name'>
        <h1>{name}</h1>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <div className='price' style={{color: bgColor}}>
        <p>{price}</p>
      </div>
      <div className='cart' style={{background: bgColor}} onClick={output}>
        <p>Add To Cart</p>
      </div>
      </div>
    </div>
  )
}

export default Project
