import React, { useState } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NextArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick = {onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) => {
    const {onClick} = props
    return (
        <div className="control-btn" onClick = {onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}

export const BebidaCard = ({bebidaItems, addToCart}) => {
    const [count, setCount] = useState(0)
    const increment =() =>{
        setCount(count +1)
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      }
        return (
            <>
                <Slider {...settings}>
                {
                    bebidaItems.map((bebidaItems) => {
                    return (    
                    
                        <div className="box">
                            <div className="product mtop">
                                <div className="img">
                                    <span className="discount">{bebidaItems.discount} %off</span>
                                    <img src={bebidaItems.cover} alt="" />
                                    <div className="product-like">
                                        <label>{count}</label> <br />
                                        <i className="fa fa-heart" onClick={increment}></i>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{bebidaItems.name}</h3>
                                    <div className="rate">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    
                                    <div className="price">
                                        <h4>{bebidaItems.price}.00</h4>
                                        <button onClick={() => addToCart(bebidaItems)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                })
            }
            </Slider>
            </>
        )
}

export default BebidaCard