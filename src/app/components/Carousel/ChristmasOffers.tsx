"use client"
import React, { Component } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";


const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
    >
      <AiOutlineArrowLeft
        className="arrows"
        style={{ color: "black" }}
      />
    </div>
  )
}

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow ${className}`}
    >
      <AiOutlineArrowRight
        className="arrows"
        style={{ color: "black" }}
      />
    </div>
  )
}


export default class ChirstmasOffers extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow to="next" />,
      prevArrow: <SamplePrevArrow to="prev" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            nextArrow: undefined,
            prevArrow: undefined,
          }
        }
      ]
    };
    return (
      <div className="mx-auto xl:w-8/12 md:w-4/6">
        <div>
          <h2 className="md:flex lg:flex text-start mb-8 text-2xl font-bold text-red-600">
            Promoções de natal
          </h2>

          <Slider {...settings}>
            <div className="border border-gray-200 lg:p-4">
              <img
                src="https://th.bing.com/th/id/OIP.widuAEj4UbYw0y3Vp3f92wHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
                className="object-contain mx-auto h-72"
                alt=""
              />
            </div>

            <div
              className="border border-gray-200 lg:p-4">
              <img
                src="https://th.bing.com/th/id/OIP.widuAEj4UbYw0y3Vp3f92wHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
                className="object-contain mx-auto h-72"
                alt=""
              />
            </div>

            <div className="border border-gray-200 lg:p-4">
              <img
                src="https://th.bing.com/th/id/OIP.widuAEj4UbYw0y3Vp3f92wHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
                className="object-contain mx-auto h-72"
                alt="" />
            </div>

            <div className="border border-gray-200 lg:p-4">
              <img
                src="https://th.bing.com/th/id/OIP.widuAEj4UbYw0y3Vp3f92wHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
                className="object-contain mx-auto h-72"
                alt="" />
            </div>

            <div className="border border-gray-200 lg:p-4">
              <img
                src="https://th.bing.com/th/id/OIP.widuAEj4UbYw0y3Vp3f92wHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
                className="object-contain mx-auto h-72"
                alt="" />
            </div>

            <div
              className="border border-gray-200 lg:p-4">
              <img
                src="https://th.bing.com/th/id/OIP.widuAEj4UbYw0y3Vp3f92wHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7"
                className="object-contain mx-auto h-72"
                alt="" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}