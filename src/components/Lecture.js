import React from "react";
import './Lecture.css'
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import axios from "./api/axios";
const sliderClick = ()=>{
    axios.get('/register')
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}


const CardSlider =(slide)=>{
    const slides = [
        {image:'https://picsum.photos/200/100', title:"우영우", description:"변호사 알바", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/200', title:"퉁퉁이", description:"공연 공짜로 뜁니다.", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/300', title:"철수", description:"아역배우역 자리 찾습니다.", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/400', title:"머스크", description:"화성갑니다.", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/500', title:"잡스", description:"휴대폰 대리점 경력 10년입니다.", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/600', title:"백종원", description:"식당 일자리 찾습니다.", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/700', title:"KIM", description:"alba gu hab ni da", clickEvent:sliderClick},
        {image:'https://picsum.photos/200/300/?blur', title:"허태성", description:"알바 구합니다", clickEvent:sliderClick}

    ];


    const slideLeft =()=>{
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500;

    }
    const slideRight =()=>{
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500;
        
    }
    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40}className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               {
                slides.map((slide,index)=>{
                    return(
                        
                            
                        <div className="slider-card" key ={index} onClick={()=>slide.clickEvent()}>
                            <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                            <p className="slider-card-title">{slide.title}</p>
                            <p className="slider-card-description">{slide.description}</p>

                        </div>
                        
                    )
                })
                }
            </div>
            <MdChevronRight size={40}className="slider-icon right"onClick={slideRight}/>

        </div>
    )
}


export default CardSlider;