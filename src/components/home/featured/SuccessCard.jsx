import React from "react"
import { success } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop' style={{display:'flex', width:'100%', justifyContent:"space-evenly"}}>
        {success.map((items, index) => (
          <div className='box' key={index} style={{width:'500px'}}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
