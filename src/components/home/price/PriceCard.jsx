import React from "react"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
      <div className='content flex mtop' style={{width:"100%", height:'auto'}}>
        {price.map((item, index) => (
          <div className='box shadow' key={index} style={{width:'500px', height:'700px'}}>
            {/* <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div> */}
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#fff",
                        color: change === "color" ? "#dc3848" : "orange",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='btn5'
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "orange",
                border:'2px solid orange'
              }}
            >
              Start 
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
