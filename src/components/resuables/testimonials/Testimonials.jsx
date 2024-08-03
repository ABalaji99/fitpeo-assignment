import { Rating } from '@mui/material'
import React from 'react'


const Testimonials = ({user , testi , rate}) => {
  return (
    <div>
       <Rating name="half-rating-read" defaultValue={rate} precision={0.1} readOnly />
        <h1>{user}</h1>
        <p>{testi}</p>
    </div>
  )
}

export default Testimonials