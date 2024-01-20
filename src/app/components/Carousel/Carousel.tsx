"use client"
import React, { Component } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider, { ResponsiveObject } from "react-slick";

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return(
    <div 
      onClick={onClick} 
      className={`arrow1 ${className}`}
     >
      <AiOutlineArrowLeft 
        className="arrows" 
        style={{color:"black"}}
      />
    </div>
  )
  }

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return(
    <div 
      onClick={onClick} 
      className={`arrow2 ${className}`} 
    >
      <AiOutlineArrowRight 
        className="arrows" 
        style={{color:"black"}}
      />
    </div>
  )
}

export class Carousel extends Component {
  
  render() {

    const settings = {
      dots: false,
      lazyLoad: undefined,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      className:"slides",
      nextArrow: <SampleNextArrow to="next" />,
      prevArrow:  <SamplePrevArrow to="prev" />,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          }
        } as ResponsiveObject,
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            nextArrow: undefined,
            prevArrow: undefined,
          }
        } as ResponsiveObject,
      ],
    };
    return (
      <div 
        className="
          mx-auto 
          xl:w-5/12 
          md:w-4/6
        "
      >
        <Slider 
          {...settings}
        >
          <div>
            <a className="rounded-2xl text-center cursor-pointer">
              <img 
                src="https://images.samsung.com/br/smartphones/galaxy-s23/images/galaxy-s23-common-buynow-banner-s.jpg" className="object-contain h-96 md:pt-8 mx-auto" 
              />
            </a>
          </div>

          <div>
            <a className="rounded-2xl text-center cursor-pointer">
              <img 
                src="https://www.lg.com/br/images/tv/md07505989/gallery/1100_1.jpg" 
                className="
                  object-contain 
                  h-96
                  md:pt-8 
                  mx-auto" 
              />
            </a>
          </div>

          <div>
            <a className="rounded-2xl text-center cursor-pointer">
              <img 
                src="https://5.imimg.com/data5/SELLER/Default/2022/5/HN/DN/OS/152764592/lenovo-ideapad-amd-ryzen-7-gaming-laptop.jpg" className="
                  object-contain 
                  h-96
                  md:pt-8 
                  mx-auto
                " 
              />
            </a>
          </div>
          
          <div>
            <a className="rounded-2xl text-center cursor-pointer">
              <img 
                src="https://m.media-amazon.com/images/I/61qdEFm7fGL._AC_UF1000,1000_QL80_.jpg" 
                className="
                  object-contain 
                  h-96
                  md:pt-8 
                  mx-auto" 
              />
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}