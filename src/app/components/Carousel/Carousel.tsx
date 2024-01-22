"use client"
import { products } from "@/utils/products";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider, { ResponsiveObject } from "react-slick";

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`arrow1 ${className}`}
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
      className={`arrow2 ${className}`}
    >
      <AiOutlineArrowRight
        className="arrows"
        style={{ color: "black" }}
      />
    </div>
  )
}

export const Carousel = () => {

  const item = products[1];
  const item2 = products[17];
  const item3 = products[20];
  const item4 = products[23];

  const settings = {
    dots: false,
    lazyLoad: undefined,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
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
          <Link href={`/products/${item3.id}`} 
                className="rounded-2xl text-center cursor-pointer"
          >
            <img
              src={item3.image}
              className="object-contain h-96 md:pt-8 mx-auto"
            />
          </Link>
        </div>

        <div>
          <Link href={`/products/${item2.id}`} 
                className="rounded-2xl text-center cursor-pointer"
          >
            <img
              src={item2.image}
              className="
                  object-contain 
                  h-96
                  md:pt-8 
                  mx-auto"
            />
          </Link>
        </div>

        <div>
          <Link href={`/products/${item.id}`} 
                className="rounded-2xl text-center cursor-pointer"
          >
            <img
              src={item.image} 
              className="
                  object-contain 
                  h-96
                  md:pt-8 
                  mx-auto
                "
            />
          </Link>
        </div>

        <div>
          <Link href={`/products/${item4.id}`} className="rounded-2xl text-center cursor-pointer">
            <img
              src={item4.image}
              className="
                  object-contain 
                  h-96
                  md:pt-8 
                  mx-auto"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;