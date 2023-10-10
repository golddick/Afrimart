import React, {useState} from 'react'
import {GrAdd} from 'react-icons/gr'
import './style.css'

function Faq() {
    const [openAns, setOpenAns] = useState()
    const [openAns2, setOpenAns2] = useState()
    const [openAns3, setOpenAns3] = useState()
    const handleOpenAns =() =>{
        setOpenAns(!openAns)
    }
    const handleOpenAns2 =() =>{
        setOpenAns2(!openAns2)
    }
    const handleOpenAns3 =() =>{
        setOpenAns3(!openAns3)
    }
  return (
    <div className='Faq'>
        <div className="header">
            <h6 className='headerText'>FAQ</h6>
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
                    <span className='queAns'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                     Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                     Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </span>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>How to register on Afrimart</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns2}/>
                </div>
                <div className="faq_ans">
                {
                openAns2 && (
                    <span className='queAns'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                     Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                     Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </span>
                )
               }
                </div>
            </div>
            <div className="faqText">
                <div className="faq_Que">
                <span className='queText'>what we offer?</span>
                <GrAdd className='faqIcon' onClick={handleOpenAns3}/>
                </div>
                <div className="faq_ans">
                {
                openAns3 && (
                    <span className='queAns'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                     Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                     Donec quam felis, ultricies nec,pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </span>
                )
               }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq
