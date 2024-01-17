import { useFavorite } from "@/hooks/useFavorite";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ButtonMyItems = () => {
    const { data: session } = useSession();
    const { favoriteProducts } = useFavorite();
    const [favoriteTotal, setFavoriteTotal] = useState(0);

    useEffect(() => {
        if (favoriteProducts) {
            setFavoriteTotal(favoriteProducts.length);                  
        }
    }, [favoriteProducts]);

    return (
        <div>
            {session ? <>
                <Link href={"/favorite"} className="cursor-pointer">
                    <img src="https://cdn-icons-png.flaticon.com/128/2716/2716443.png"
                        title="Favoritos"
                        className="w-6 absolute right-[50px] 
                md:right-[85px] md:w-9
                xl:right-[190px]
                "
                    />

                    <span className="absolute text-xs right-[40px] top-[1.5px] lg:text-base lg:right-[185px] lg:top-[5px] bg-red-600 text-white h-5 w-5 rounded-full flex items-center justify-center">{favoriteTotal}</span>
                </Link>
            </> : <>
                <Link href={"/login"} className="cursor-pointer">
                    <img src="https://cdn-icons-png.flaticon.com/128/2716/2716443.png"
                        title="Favoritos"
                        className="w-6 absolute right-[50px] 
                md:right-[85px] md:w-9
                xl:right-[190px]
                "
                    />

                    <span className="absolute text-sm right-[0px] top-[1.5px] lg:text-base lg:right-[185px] lg:top-[5px] bg-red-600 text-white h-5 w-5 rounded-full flex items-center justify-center">{favoriteTotal}</span>
                </Link>

            </>}
        </div>
    );
}