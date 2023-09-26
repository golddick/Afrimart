import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1 style={{color:'orange', fontFamily:"italic"}}>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
