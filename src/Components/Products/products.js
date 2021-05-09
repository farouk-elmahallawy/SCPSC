import React,{useState} from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import photo1 from "../images/brand1.png"
import photo2 from "../images/brand2.png"
import photo3 from "../images/brand3.png"
import photo4 from "../images/brand4.png"
import photo5 from "../images/brand5.png"
import photo6 from "../images/brand6.png"
import './products.css'

function Products() {
    const SliderImage = [
        {
            image : './carousel1.jpeg'
        },
        {
            image : './carousel2.jpeg'
        },
        {
            image : './carousel3.jpeg'
        },
        {
            image : './carousel4.jpeg'
        },
        {
            image : './carousel5.jpeg'
        },
        {
            image : './carousel6.jpeg'
        },
        {
            image : './carousel7.jpeg'
        },
        {
            image : './carousel8.jpeg'
        },
    ]
    const [current,SetCurrent] = useState(0);
    const length = SliderImage.length;
    const slideNext = () =>{
        SetCurrent(current === length -1 ? 0 : current + 1)
    }
    const slidePrev = () =>{
        SetCurrent(current === 0 ? length - 1 : current - 1)
    }
    return (
        <div className ='component'>
                    <h1> Our Products</h1>
            <div className="carousel-banner">
                <FaArrowAltCircleLeft className="left" onClick={slidePrev}/>
                <FaArrowAltCircleRight className="right" onClick={slideNext}/>
                {SliderImage.map((slide,index) => (
                    <div key={index} className={index === current ? 'slide active' : 'slide'}>
                        {index === current && (
                         <img  className="image" src={require(`${slide.image}`).default} alt='slide'/>
                        )}
                    </div>
                ))}
            </div>
            <div className="brands">
                <img src={photo1} alt="brands"/>
                <img src={photo2} alt="brands"/>
                <img src={photo3} alt="brands"/>
                <img src={photo4} alt="brands"/>
                <img src={photo5} alt="brands"/>
                <img src={photo6} alt="brands"/>
            </div>
        </div>
    )
}

export default Products
