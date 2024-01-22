"use client"
import Slider, { ResponsiveObject } from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { Rating } from "@mui/material";
import { useRating } from "@/hooks/useRating";
import { products } from "@/utils/products";
import { usePathname } from "next/navigation";
import { getItemById } from "@/app/products/api";
import { Product } from "@/types/Product";
import { getRandomizedItemsCarousel } from "@/utils/getRandomItemsCarousel";

const SamplePrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`}>
            <AiOutlineArrowLeft className="arrows" style={{ color: "black" }} />
        </div>
    );
};

const SampleNextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div onClick={onClick} className={`arrow ${className}`}>
            <AiOutlineArrowRight className="arrows" style={{ color: "black" }} />
        </div>
    );
};

const CarouselOtherPeolplesBuyThis: React.FC = () => {
    const { calculateAverageRating, handleRatingCarousel } = useRating();
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const itemid = id !== null ? getItemById(id) : null;

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
        <div className="md:w-[78%] xl:w-[67%] text-center mx-auto overflow-hidden rounded-xl">
            <div className="mx-auto px-5">
                <h2 className="hidden lg:flex text-start text-2xl mb-10 font-bold text-gray-500">
                    Outras pessoas também compraram
                </h2>
                <Slider {...settings}>
                    {getRandomizedItemsCarousel(products.filter((item) => item.category === itemid?.category))
                        .map((item: Product) => (
                            <Link 
                                key={item.id} 
                                href={`/products/${item.id}`}
                                className="cursor-pointer translate hover:scale-95 lg:mt-0 lg:mb-0">

                                <img 
                                    src={item.image} 
                                    className="h-36 lg:h-56 mx-auto rounded-md object-contain" 
                                />

                                <div className="flex flex-col justify-center lg:block">
                                    <p className="mt-3 lg:mt-10 lg:mb-3 truncate lg:w-96">
                                        {item.name}
                                    </p>

                                    <Rating 
                                        value={calculateAverageRating(item.id)} 
                                        className="flex justify-center lg:block"
                                    />

                                    <span className="block">
                                        {(!handleRatingCarousel(item.id) || handleRatingCarousel(item.id) <= 0) ?
                                         <>
                                            <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                                {handleRatingCarousel(item.id)} sem avaliações
                                            </a>
                                        </> : handleRatingCarousel(item.id) === 1 ?
                                         <>
                                            <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                                {handleRatingCarousel(item.id)} avaliação
                                            </a>
                                        </> :
                                         <>
                                            <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                                {handleRatingCarousel(item.id)} avaliações
                                            </a>
                                        </>}
                                    </span>
                                </div>
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

export default CarouselOtherPeolplesBuyThis;
