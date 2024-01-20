"use client"
import { useRating } from "@/hooks/useRating";
import { products } from "@/utils/products";
import { Rating } from "@mui/material";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight, } from "react-icons/ai";
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

const NewsBooks = () => {

  const {
    calculateAverageRating,
    handleRatingCarousel
  } = useRating();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    className: "slides",
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
    <div
      className="
        mt-5 
        md:w-[78%] 
        xl:w-[67%] 
        text-center 
        mx-auto 
        overflow-hidden 
        rounded-xl"
    >
      <div className="mx-auto p-8">
        <h2 className="md:flex lg:flex text-start mb-8 text-2xl font-bold">
          Lançamentos
        </h2>

        <Slider {...settings}>
          {products.filter(item => item.carouselCategory === "newBooks")
            .map(item => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="cursor-pointer translate hover:scale-95"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-36 
                    lg:h-56 
                    xl:mt-4 
                    mx-auto 
                    xl:w-[200px] 
                    rounded-md 
                    object-contain
                  "
                />
                
                <p className="mt-3 lg:mt-10 lg:mb-3 truncate ml-8">
                  {item.name}
                </p>

                <Rating
                  value={calculateAverageRating(item.id)}
                />

                <span className="absolute">
                  {(!handleRatingCarousel(item.id) || handleRatingCarousel(item.id) <= 0) ?
                    <>
                      <a className="text-xs ml-1 underline text-sky-700 cursor-pointer">
                        {handleRatingCarousel(item.id)} sem avaliações
                      </a>
                      
                    </> :
                    handleRatingCarousel(item.id) === 1 ?

                      <>
                        <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                          {handleRatingCarousel(item.id)} avaliação
                        </a>
                    </> :
                      <>
                        <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                          {handleRatingCarousel(item.id)} avaliações
                        </a>
                    </>
                  }
                </span>

                <p className="mt-3 lg:text-lg font-extrabold lg:mb-4">
                  {new Intl.NumberFormat('pt-BR', {
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
};

export default NewsBooks;