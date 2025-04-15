import React from 'react'

const WhoServeCard = ({title, style, textStyle}) => {
  return (
    <>
    <div className='bg-primary px-6 py-4 rounded-lg lg:w-fit hover:bg-dark-primary transition-all duration-300' style={style}>
        <p className='text-white font-bold text-xl lg:text-xl' style={textStyle}>{title}</p>
    </div>
    </>
  )
}

export default WhoServeCard