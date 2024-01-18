"use client"
import { useFavorite } from "@/hooks/useFavorite";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiDeleteBinLine } from "react-icons/ri";

export const FavoriteFile = () => {
    const { favoriteProducts, handleRemoveProductFavorite } = useFavorite();
    const { data: session } = useSession();
    const router = useRouter();

    if (!favoriteProducts || favoriteProducts.length === 0 && session) {
        return (
            <div className="flex flex-col lg:py-52 lg:ml-[18rem] rounded-2xl shadow-md shadow-slate-400 mt-10 p-4 items-center">
                <div className="">
                    <div className="text-3xl text-purple-600 font-semibold">Nenhum produto no seus favoritos.</div>
                    <div>
                        <Link href={"/"} className="text-slate-600 flex flex-col items-center mt-2 justify-center">
                            <span className="text-[15px]">Você ainda não possui produtos nos seus favoritos.</span>
                            <button className="bg-purple-600 text-white rounded-lg p-3 mt-8">Inicie suas compras</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    };

    if (session) {
        return (
            <div className="lg:py-10 lg:ml-[18rem] rounded-2xl shadow-md shadow-slate-400 mt-10 p-4">
                <h1 className="text-2xl m-5 lg:m-0 lg:text-3xl text-gray-700 text-start font-bold">Favoritos</h1>
                <div className="mt-3">
                    {favoriteProducts.map(item => (
                        <div key={item.id} className="flex flex-col lg:flex-row lg:justify-between border rounded-md py-4 lg:p-8">
                            <div className="flex gap-3">
                                <Link href={`/products/${item.id}`}>
                                    <img src={item.image} className="w-24 ml-2 object-contain" />
                                </Link>
                                <div className="flex flex-col">
                                    <span className="text-base font-medium">{item.name}</span>
                                    <div className="text-xs mt-3">vendido e entregue por <span className="underline">flipmark</span></div>
                                    <span className="ml-7 mt-4 text-black text-xl font-semibold">
                                        Por {`${new Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(item.price)}`
                                        }
                                    </span>
                                    <button
                                        onClick={() => handleRemoveProductFavorite(item.id)}
                                        className="text-xl mt-4 w-5 text-red-600"><RiDeleteBinLine />
                                    </button>

                                </div>
                            </div>
                            <span
                                className="hidden lg:block left-[30%] top-[48%] lg:relative lg:top-auto lg:left-auto font-bold text-xl w-48 text-end">
                            </span>
                        </div>
                    ))}
                </div>
                <div className=" border-slate-200 py-4 flex justify-between gap-4">
                    <div className="text-sm flex flex-col gap-1 items-start">
                    </div>
                </div>
            </div>
        );
    } else {
        router.push("/login")
    }

}