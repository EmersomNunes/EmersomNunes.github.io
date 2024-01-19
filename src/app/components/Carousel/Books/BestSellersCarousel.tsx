"use client"
import Slider, { ResponsiveObject } from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { Rating } from "@mui/material";
import { useRating } from "@/hooks/useRating";
import { products } from "@/utils/products";

const SamplePrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className=
      {`arrow ${className}`}
    >
      <AiOutlineArrowLeft
        className="arrows"
        style={{ color: "black" }}
      />
    </div>
  );
};

const SampleNextArrow = (props: any) => {
  const {
    className,
    onClick } = props;
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
  );
};

const BestSellersCarousel: React.FC = () => {
  const {
    calculateAverageRating,
    handleRatingCarousel
  } = useRating();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      } as ResponsiveObject,
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          nextArrow: undefined,
          prevArrow: undefined,
          slidesToScroll: 2,
        },
      } as ResponsiveObject,
    ],
  };

  return (
    <div
      className="
        mt-2 
        lg:mt-5 
        md:w-[78%] 
        xl:w-[67%] 
        text-center 
        mx-auto 
        overflow-hidden 
        rounded-xl
      "
    >
      <div
        className="
          mx-auto 
          p-8
        "
      >
        <h2
          className="
            md:flex 
            lg:flex 
            text-start 
            mb-8 
            text-2xl 
            font-bold
          "
        >
          Os livros mais vendidos
        </h2>

        <Slider
          {...settings}
        >
          {products.filter((item) => item.carouselCategory === "bestSellersCarousel")
            .map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="
                  cursor-pointer 
                  translate 
                  hover:scale-95
                "
              >
                <img
                  src={item.image}
                  className="
                    h-36 
                    lg:h-56 
                    lg:mt-4 
                    mx-auto 
                    rounded-md 
                    object-contain
                  "
                />

                <p
                  className="
                    mt-3 
                    lg:mt-10 
                    lg:mb-3 
                    truncate 
                    ml-8
                  "
                >
                  {item.name}
                </p>

                <Rating
                  value={calculateAverageRating(item.id)}
                />
                <span
                  className="
                    absolute
                  "
                >
                  {(!handleRatingCarousel(item.id) || handleRatingCarousel(item.id) <= 0) ?
                    <>
                      <a
                        className="
                          text-xs 
                          ml-1 
                          underline 
                          text-sky-700 
                          cursor-pointer
                        "
                      >
                        {handleRatingCarousel(item.id)} sem avaliações
                      </a>

                    </> :

                    handleRatingCarousel(item.id) === 1 ?

                      <>
                        <a
                          className="
                            text-xs 
                            ml-1 
                            underline 
                            text-sky-700 
                            cursor-pointer
                          "
                        >
                          {handleRatingCarousel(item.id)} avaliação
                        </a>

                      </> :

                      <>
                        <a
                          className='
                            text-xs 
                            ml-1 
                            underline 
                            text-sky-700 
                            cursor-pointer
                          '
                        >
                          {handleRatingCarousel(item.id)} avaliações
                        </a>
                      </>}
                </span>

                <p 
                  className="
                    mt-3 
                    lg:text-lg 
                    font-extrabold 
                    lg:mb-4
                  "
                >
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

export default BestSellersCarousel;
