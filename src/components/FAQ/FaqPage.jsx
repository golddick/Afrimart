import React, {useState} from 'react'
import {GrAdd} from 'react-icons/gr'
import {BiSolidRightArrowAlt} from 'react-icons/bi'
import Back from '../common/Back'
import Img from '../images/pricing.jpg'
import '../home/FAQ/style.css'

function FaqPage() {
  const [openAns, setOpenAns] = useState()
  const [openAns2, setOpenAns2] = useState()
  const [openAns3, setOpenAns3] = useState()
  const [openAns4, setOpenAns4] = useState()
  const [openAns5, setOpenAns5] = useState()
  const [openAns6, setOpenAns6] = useState()
  const [openAns7, setOpenAns7] = useState()
  const handleOpenAns =() =>{
      setOpenAns(!openAns)
  }
  const handleOpenAns2 =() =>{
      setOpenAns2(!openAns2)
  }
  const handleOpenAns3 =() =>{
      setOpenAns3(!openAns3)
  }
  const handleOpenAns4 =() =>{
    setOpenAns4(!openAns4)
}
  const handleOpenAns5 =() =>{
      setOpenAns5(!openAns5)
  }
  const handleOpenAns6 =() =>{
      setOpenAns6(!openAns6)
  }
  const handleOpenAns7 =() =>{
      setOpenAns7(!openAns7)
  }
  return (
    <div className='Faq' >
   <div className="faq_body">
   <Back name='Frequently Asked Questions' title='How can we help?' cover={Img}  />
        <div className="header">
            <h6 className='FaqHeader'>Frequently Asked Questions (FAQ)</h6>
        </div>
        <div className="faqBody">
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>what is afrimart?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns}/>
                </div>
                <div className="faq_ans">
               {
                openAns && (
                    <div >
                        <ul className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/> Afrimart is Africa’s first intra-continental online business-to-business trade platform.</li>
                            <li><BiSolidRightArrowAlt/>This platform is designed to create new business opportunities for African SMEs and general merchants on the quest for growth and expansion by creating visibility and accessibility to African buyers and suppliers</li>
                           
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>What are the benefits of joining Afrimart?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns2}/>
                </div>
                <div className="faq_ans">
                {
                openAns2 && (
                 
                    <div>
                        <ul  className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/> Visibility and accessibility to African buyers and suppliers</li>
                            <li><BiSolidRightArrowAlt/> Free membership for a year</li>
                            <li><BiSolidRightArrowAlt/> Payment security</li>
                            <li><BiSolidRightArrowAlt/> Supplier verification</li>
                            <li><BiSolidRightArrowAlt/> Network of logistics partners</li>
                            <li><BiSolidRightArrowAlt/> Location based lead generation</li>
                            <li><BiSolidRightArrowAlt/> Ecosystem of payment partners (Afrexim & other payment companies)</li>
                            <li><BiSolidRightArrowAlt/> Business tools for sellers: analytics, inventory management, selling tips, etc.</li>
                            <li><BiSolidRightArrowAlt/> Multilingual platform</li>
                            <li><BiSolidRightArrowAlt/> Growth and scale opportunity for African manufacturing industries.</li>
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>Is there a fee to join Afrimart?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns3}/>
                </div>
                <div className="faq_ans">
                {
                openAns3 && (
                <div >
                        <ul className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/> Afrimart is Africa’s first intra-continental online business-to-business trade platform.</li>
                            <li><BiSolidRightArrowAlt/>This platform is designed to create new business opportunities for African SMEs and general merchants on the quest for growth and expansion by creating visibility and accessibility to African buyers and suppliers</li>
                           
                        </ul>
                </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>Does Afrimart sell products?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns4}/>
                </div>
                <div className="faq_ans">
                {
                openAns4 && (
                <div >
                        <ul className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/>No, Afrimart is neither a supplier nor a buyer.</li>
                        </ul>
                </div>
                )
               }
                </div>
            </div>

            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How do I place an order?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns5}/>
                </div>
                <div className="faq_ans">
               {
                openAns5 && (
                    <div >
                        <ul className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/> Search for the product(s) you want OR request a quotation for the product and a matched supplier(s) may respond to you</li>
                            <li><BiSolidRightArrowAlt/>Once you’ve identified your desired product, contact the supplier to initiate the buying process</li>     
                            <li><BiSolidRightArrowAlt/>Once you’re ready to make a payment, click here to pay using our Secure Escrow Platform</li>
                           
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How do I change the price to my local currency?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns6}/>
                </div>
                <div className="faq_ans">
                {
                openAns6 && (
                 
                    <div >
                        <ul className="faqAnsBody">
                            <li><BiSolidRightArrowAlt/> Afrimart integrates a currency converter that automatically tracks your current country location and shows prices in your local currency.</li>
                             <li><BiSolidRightArrowAlt/>You can also view prices in the currency of the country you’re transacting with and in US$ for reference</li>
                        </ul>
                    </div>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How do I attract more buyers?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns7}/>
                </div>
                <div className="faq_ans">
                {
                openAns7 && (
                <div >
                        <ul className="faqAnsBody"> 
                            <li><BiSolidRightArrowAlt className='ansIcon'/>Become a verified seller</li>
                            <li><BiSolidRightArrowAlt  className='ansIcon'/> Make sure the product picture has a high resolution (always use flash on the camera, even in natural light). Be sure that the environment is clean and attractive to look at.</li>
                           
                            <li><BiSolidRightArrowAlt  className='ansIcon'/>Close-up pictures draw more attention</li>
                            <li><BiSolidRightArrowAlt  className='ansIcon'/> Create catchy headings with popular keywords</li>
                           
                            <li><BiSolidRightArrowAlt  className='ansIcon'/>Don’t overemphasize or be too dramatic when describing the product, it comes off as dishonest…keep it as simple and detailed as possible</li>
                            <li><BiSolidRightArrowAlt  className='ansIcon'/>Be competitive with prices, make sure you are within the range of other similar product offerings </li>
                           
                            <li><BiSolidRightArrowAlt  className='ansIcon'/>Maintain a high seller's rating</li>
                           <div className="extraInfo" style={{marginLeft:'50px'}}>
                           <li><b>1.</b> Maintain great communication with buyers, respond to emails quickly</li>
                            <li><b>2.</b> Ship within 24 hours if possible, otherwise, keep it within the stated time frame</li>
                            <li><b>3.</b> Keep your customer as happy as possible</li>
                            <li><b>4.</b> Be as honest and accurate about the product (this prevents returns)</li>
                            <li><b>5.</b> Leave positive feedbacks for buyers and they will more than likely, do the same</li>
                           
                           </div>
                        </ul>
                </div>
                )
               }
                </div>
            </div>
          
        </div>
   </div>
    </div>
  )
}

export default FaqPage