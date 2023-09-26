import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"
import SuccessCard from './SuccessCard'

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='The problem' subtitle='Africa’s trade currently faces the challenges of low visibility of tradable products, poor cross-border payments & logistics infrastructure, among others.' />
          <FeaturedCard  />
        </div>
        <br/>
        <div className='container'>
          <Heading title='The Solution' subtitle='Afrimart ecosystem promotes three primary tenets,  which are Visibility, Integrity and Access.' />
          <SuccessCard  />
        </div>
      </section>
    </>
  )
}

export default Featured
