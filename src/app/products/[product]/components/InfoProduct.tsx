"use client"
import { getItemById } from "@/app/products/api";
import Heart from "react-animated-heart"
import { usePathname } from "next/navigation";
import { useFavorite } from "@/hooks/useFavorite";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import { Rating } from "@mui/material";
import { useRating } from "@/hooks/useRating";

const InfoProduct = () => {
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;
    const { calculateAverageRating, handleRatingCarousel } = useRating()

    const { toggleProductFavorite, handleAddProductFavorite } = useFavorite();
    const [isFavoriteProduct, setIsFavoriteProduct] = useState(false);
    const [favoriteProduct, setFavoriteProduct] = useState<Product>({
        id: item?.id as number,
        name: item?.name as string,
        category: item?.category as string,
        description: item?.description as string,
        image: item?.image as string,
        price: item?.price as number,
        quantity: item?.quantity as number
    });

    useEffect(() => {
        const storedFavorite = localStorage.getItem('favoriteProduct');
        if (storedFavorite) {
            setIsFavoriteProduct(true);
        }
    }, []);

    const handleToggleFavorite = () => {
        toggleProductFavorite(favoriteProduct);
        setIsFavoriteProduct((prev) => !prev);

        if (!isFavoriteProduct) {
            localStorage.setItem('favoriteProduct', JSON.stringify(favoriteProduct));
        } else {
            localStorage.removeItem('favoriteProduct');
        }
    };

    return (
        <div>
            <div className=''>
                <div className="p-3 lg:flex lg:p-12 lg:gap-10">
                    <div className="flex justify-center">
                        <img src={item?.image} className="lg:w-80 lg:h-[25rem] w-52 rounded-md object-contain" />
                    </div>
                    <div className="lg:mt-10 lg:w-[28rem]">
                        <div className="font-semibold text-xl text-gray-600">{item?.name}</div>
                        <Rating value={calculateAverageRating(item?.id as number)} className="mt-2" />
                        <span className="absolute mt-2 ml-2">
                            {(!handleRatingCarousel(item?.id as number) || handleRatingCarousel(item?.id as number) <= 0) ? <>
                                <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                    {handleRatingCarousel(item?.id as number)} sem avaliações
                                </a>
                            </> : handleRatingCarousel(item?.id as number) === 1 ? <>
                                <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                    {handleRatingCarousel(item?.id as number)} avaliação
                                </a>
                            </> : <>
                                <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                    {handleRatingCarousel(item?.id as number)} avaliações
                                </a>
                            </>}
                        </span>
                        <span className="absolute top-[18%] ml-36 lg:ml-72 lg:top-[265px]">
                            <Heart
                                isClick={!isFavoriteProduct}
                                onClick={handleToggleFavorite}
                            />
                        </span>
                        <p className="hidden lg:block mt-2">{item?.description} <span className="underline ml-2 cursor-pointer">ver mais</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct;