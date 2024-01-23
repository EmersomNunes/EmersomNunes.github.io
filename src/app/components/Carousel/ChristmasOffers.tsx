"use client"
import { products } from "@/utils/products";
import Link from "next/link";
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


export const ChirstmasOffers = () => {

  const item = products[17];
  const item2 = products[1];
  const item3 = products[0];
  const item4 = products[12];
  const item5 = products[18];
  const item6 = products[21]

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
          Produtos Vendidos
        </h2>

        <Slider {...settings}>
          <Link 
            href={`/products/${item.id}`} 
            className="lg:p-4"
          >
            <img
              src={item.image}
              className="object-contain mx-auto h-72"
              alt={item.name}
            />
          </Link>

          <Link
            href={`/products/${item2.id}`}
            className="lg:p-4"
          >
            <img
              src={item2.image}
              className="object-contain mx-auto h-72"
              alt={item2.name}
            />
          </Link>

          <Link 
            href={`/products/${item3.id}`} 
            className="lg:p-4"
          >
            <img
              src={item3.image}
              className="object-contain mx-auto h-72"
              alt={item3.name} />
          </Link>

          <Link 
            href={`/products/${item4.id}`} 
            className="lg:p-4"
          >
            <img
              src={item4.image}
              className="object-contain mx-auto h-72"
              alt={item4.name} />
          </Link>

          <Link 
            href={`/products/${item5.id}`} 
            className="lg:p-4"
          >
            <img
              src={item5.image}
              className="object-contain mx-auto h-72"
              alt={item5.name} />
          </Link>

          <Link
            href={`/products/${item6.id}`}
            className="lg:p-4">
            <img
              src={item6.image}
              className="object-contain mx-auto h-72"
              alt={item6.name} />
          </Link>
        </Slider>
      </div>
    </div>
  );
}

export default ChirstmasOffers;