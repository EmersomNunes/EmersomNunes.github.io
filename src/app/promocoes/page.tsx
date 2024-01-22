"use client"
import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { products } from '@/utils/products';
import { useRating } from '@/hooks/useRating'
import { Rating } from '@mui/material'
import Link from 'next/link';

const Promocoes = () => {
    const { calculateAverageRating,
        handleRatingCarousel,
    } = useRating();

    return (
        <div>
            <Header />
            <div className='my-10 mx-52'>
                <h1
                    className='text-3xl text-gray-600 font-semibold my-8'>
                    Produtos em Promoção
                </h1>

                <div className='grid grid-cols-3 gap-20'>
                    {products.filter((item) => item.category === "promocoes")
                        .map((item) => (
                            <Link
                                key={item.id}
                                href={`/products/${item.id}`}
                                className="
                                    cursor-pointer 
                                    translate 
                                    hover:scale-95 
                                    border 
                                    p-2"
                            >
                                <img
                                    src={item.image}
                                    className="
                                    h-36 
                                    lg:h-56 
                                    lg:mt-4 
                                    mx-auto 
                                    rounded-md 
                                    object-contain"
                                />
                                <p
                                    className="
                                    mt-3 
                                    lg:mt-10 
                                    lg:mb-3"
                                >
                                    {item.name}
                                </p>

                                <Rating
                                    value={calculateAverageRating(item.id)}
                                />

                                <span className="absolute">
                                    {(!handleRatingCarousel(item.id) || handleRatingCarousel(item.id) <= 0)
                                        ? <>
                                            <a
                                                className='
                                                    text-xs 
                                                    ml-1 
                                                    underline 
                                                    text-sky-700 
                                                    cursor-pointer'
                                            >
                                                {handleRatingCarousel(item.id)} sem avaliações
                                            </a>

                                        </> :

                                        handleRatingCarousel(item.id) === 1 ?

                                            <>
                                                <a
                                                    className='
                                                        text-xs 
                                                        ml-1 
                                                        underline 
                                                        text-sky-700 
                                                        cursor-pointer'
                                                >
                                                    {handleRatingCarousel(item.id)} avaliação
                                                </a>

                                            </> :

                                            <>
                                                <a className='text-xs ml-1 underline text-sky-700 cursor-pointer'>
                                                    {handleRatingCarousel(item.id)} avaliações
                                                </a>
                                            </>}
                                </span>

                                <p className="mt-3 lg:text-lg font-extrabold lg:mb-4">
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(parseInt(item.price as any))}
                                </p>
                            </Link>
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Promocoes;