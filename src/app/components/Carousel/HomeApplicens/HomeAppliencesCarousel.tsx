"use client"
import { useRating } from "@/hooks/useRating";
import { products } from "@/utils/products";
import { eletrodomesticos } from "@/utils/productsCarousel";
import { Rating } from "@mui/material";
import Link from "next/link";
import React, { Component } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider, { ResponsiveObject } from "react-slick";

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft className="arrows" style={{ color: "black" }} />
    </div>
  )
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight className="arrows" style={{ color: "black" }} />
    </div>
  )
}

const HomeAppliencesCarousel = () => {

  const { handleRatingCarousel, calculateAverageRating } = useRating()

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      } as ResponsiveObject,
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          nextArrow: undefined,
          prevArrow: undefined,
          slidesToScroll: 2,
        }
      } as ResponsiveObject,
    ],
  }

  return (
    <div className="md:w-[78%] xl:w-[67%] text-center mx-auto overflow-hidden rounded-xl">
      <div className="mx-auto p-8 pb-10" >
        <h2 className="md:flex lg:flex text-start mb-8 text-2xl font-bold">Eletrodomésticos</h2>
        <Slider {...settings}>
          {products.filter(item => item.carouselCategory === "HomeAppliences").map(item => (
            <Link
              key={item.id} href={`/products/${item.id}`}
              className="rounded-2xl text-center cursor-pointer translate hover:scale-95">

              <img src={item.image} className="h-36 lg:h-56 lg:mt-4 mx-auto lg:w-[200px] rounded-md object-contain" />
              <p className="mt-3 lg:mt-10 mb-3 truncate">{item.name}</p>
              <Rating value={calculateAverageRating(item.id)} />
              <span className="absolute">
                {(!handleRatingCarousel(item.id) || handleRatingCarousel(item.id) <= 0) ? <>
                  <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                    {handleRatingCarousel(item.id)} sem avaliações
                  </a>
                </> : handleRatingCarousel(item.id) === 1 ? <>
                  <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                    {handleRatingCarousel(item.id)} avaliação
                  </a>
                </> : <>
                  <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                    {handleRatingCarousel(item.id)} avaliações
                  </a>
                </>}
              </span>
              <p
                className="mt-3 lg:text-lg font-extrabold">{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(parseInt(item.price as any))}
              </p>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeAppliencesCarousel;
