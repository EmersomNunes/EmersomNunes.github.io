"use client"
import { getItemById } from "@/app/products/api";
import Heart from "react-animated-heart"
import { usePathname } from "next/navigation";
import { useFavorite } from "@/hooks/useFavorite";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";
import { Rating } from "@mui/material";
const InfoProduct = () => {
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;

    const { toggleProductFavorite } = useFavorite();
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
        // Recupere o estado do localStorage ao montar o componente
        const storedFavorite = localStorage.getItem('favoriteProduct');
        if (storedFavorite) {
            setIsFavoriteProduct(true);
        }
    }, []);

    const handleToggleFavorite = () => {
        toggleProductFavorite(favoriteProduct);
        setIsFavoriteProduct((prev) => !prev);

        // Atualize o localStorage ao alterar o estado
        if (!isFavoriteProduct) {
            localStorage.setItem('favoriteProduct', JSON.stringify(favoriteProduct));
        } else {
            localStorage.removeItem('favoriteProduct');
        }
    };

    return (
        <div>
            <div className=''>
                <div className="flex p-16 gap-10">
                    <img src={item?.image} className="w-72 h-96 rounded-md" />
                    <div className="mt-5 w-[28rem]">
                        <div className="font-semibold text-xl text-gray-600">{item?.name}</div>
                        <Rating value={3} className="mt-2"/>
                        <span className="absolute ml-80 top-[265px]">
                            <Heart
                                isClick={!isFavoriteProduct}
                                onClick={handleToggleFavorite}
                            />
                        </span>
                        <p className="hidden lg:block mt-2">{item?.description} <span className="underline ml-2">ver mais</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoProduct;