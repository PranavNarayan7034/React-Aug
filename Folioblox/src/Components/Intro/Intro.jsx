import React from 'react'
import Hero from '../../assets/Heroimage.jpg'

const Intro = () => {
  return (
    <div
      className='h-[95vh] bg-no-repeat bg-cover bg-center rounded-b-[70px]'
      style={{backgroundImage:`URL(${Hero})`}}>

    </div>
  )
}

export default Intro