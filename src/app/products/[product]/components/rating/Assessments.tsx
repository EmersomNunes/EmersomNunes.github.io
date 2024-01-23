"use client"
import { getItemById } from "@/app/products/api";
import { useRating } from "@/hooks/useRating";
import { Rating } from "@mui/material"
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation"

const Assessments = () => {
    const router = useRouter();
    const { calculateAverageRating, itemRatings } = useRating();
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;

    return (
        <div className='lg:w-[70%] mt-10 lg:mt-0 lg:mx-auto border lg:h-[600px] md:p-8'>
            <div className='flex justify-start flex-col md:grid md:grid-cols-[200px_minmax(100px,_1fr)] gap-5 lg:gap-10'>
                <div className='flex flex-col justify-center items-center lg:ml-4 lg:block'>        
                    <button
                        onClick={() => router.push(`/productassessment/${item?.id}`)}
                        className='bg-purple-600 px-4 p-2 lg:ml-6 rounded-lg text-white hover:opacity-95 mb-5 lg:mb-8'>
                        Fazer avaliação
                    </button>

                    <div className='lg:absolute lg:w-48 lg:h-48 p-5 shadow-md shadow-gray-400 rounded-lg'>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className='text-xl text-gray-600'>
                                Notas
                            </div>
                            <Rating value={calculateAverageRating(item?.id as number)} />
                            <p className="">
                                {calculateAverageRating(item?.id as number).toFixed(1)}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className='border col-span-1 shadow-sm shadow-gray-500 rounded-xl p-4'>
                    <div className='mt-5'>
                        <h1 className='flex justify-center text-3xl text-gray-600 mb-5'>
                            Avaliações
                        </h1>
                    </div>

                    <hr className='py-5' />

                    <ul className="flex flex-col gap-7">
                        {itemRatings[item?.id as number]?.map(item => (
                            <li className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <div className="text-sm ml-2">
                                        {item.name}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Rating 
                                        value={item.rating} 
                                        className="" 
                                        size={"medium"} 
                                    />
                                    <span className="text-xl text-gray-800 font-medium ">
                                        {item.title}
                                    </span>
                                </div>
                                
                                <div className="max-w-lg">
                                    {item.label}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Assessments