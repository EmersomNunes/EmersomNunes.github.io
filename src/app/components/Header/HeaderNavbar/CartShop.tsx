import { useCart } from "@/hooks/useCart";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CartShop = () => {
    const { data: session } = useSession();
    const [cartTotal, setCartTotal] = useState(0);
    let { cartQt, cartProducts } = useCart();

    cartQt = cartProducts?.length as number;

    useEffect(() => {
        setCartTotal(cartQt)
    }, [cartQt])

    return (
        <div>
            {session ? <>
                <Link
                    href={`/cart`}
                    className="cursor-pointer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/34/34568.png"
                        title="Carrinho"
                        className="w-6 
                            absolute
                            z-40 
                            right-[8px]
                            md:right-[15px]
                            md:mt-[6px]
                            top-[12px]
                            md:w-9
                            xl:right-[110px]
                            "
                    />
                    <span
                        className="
                            absolute 
                            z-40 
                            text-sm 
                            right-[0px] 
                            top-[1.5px] 
                            lg:text-base 
                            lg:right-[105px] 
                            lg:top-[5px] 
                            bg-red-600 
                            text-white 
                            h-5 
                            w-5 
                            rounded-full 
                            flex 
                            items-center 
                            justify-center"
                    >
                        {cartTotal}
                    </span>
                </Link>

            </> : <>

                <Link
                    href={`/login`}
                    className="cursor-pointer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/34/34568.png"
                        title="Carrinho"
                        className="
                            w-6 
                            absolute
                            z-40 
                            right-[8px] 
                            top-[12px]
                            md:right-[25px] 
                            md:w-9
                            xl:right-[110px]"
                    />
                    <span
                        className="
                            absolute
                            z-40 
                            text-sm 
                            right-[0px] 
                            top-[1.5px] 
                            lg:text-base 
                            lg:right-[105px] 
                            lg:top-[5px] 
                            bg-red-600 
                            text-white 
                            h-5 
                            w-5 
                            rounded-full 
                            flex 
                            items-center 
                            justify-center"
                    >
                        {cartTotal}
                    </span>
                </Link>
            </>}
        </div>
    );
} 