"use client"
import { getItemById } from '@/app/products/api';
import { usePathname } from 'next/navigation';
import { formatNumber } from '@/utils/formatNumber';
import { FaCreditCard } from "react-icons/fa6";
import ButtonAddToCart from './buttonAddToCart';
import { useState } from 'react';

const discont = 1 - 0.03;

const PaymentForm = () => {
    const [productValue, setProductValue] = useState(200);
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;

    return (
        <div>
            <div className='lg:w-96 lg:my-14 shadow-md shadow-gray-300 rounded-md lg:h-96 lg:p-6'>
                {item?.price as number > productValue ? <>
                    <div className='lg:border-2 p-3 lg:h-36 lg:p-6 my-3 rounded-lg'>
                        <div className='font-bold text-2xl flex flex-col lg:py-5'>
                            <sup className='lg:absolute lg:top-[23.2rem] line-through text-sm text-red-600'>
                                {formatNumber(item?.price)}
                            </sup>

                            {formatNumber((item?.price as number) * (discont))}
                            <span className='text-lg mb-2 font-semibold'>no pix</span>
                            <p className='text-sm font-semibold text-gray-600 flex gap-2 w-96'>
                                <FaCreditCard className="text-lg" />{formatNumber(item?.price as number)} ou em até 6x de {formatNumber(item?.price as number / 6)}
                            </p>

                            <sup
                                className='absolute items-center text-sm rounded-lg bg-green-500 top-[35.8rem] ml-[6.5rem] lg:top-[23.2rem] px-[2px] lg:ml-[7.8rem] text-white'>
                                <i className="fa fa-arrow-down ml-1 mr-1"></i>3%
                            </sup>
                        </div>
                        <ButtonAddToCart />
                        <p className='text-sm text-gray-600 mt-6'>Produto vendido e entregue por Flipmark</p>
                    </div>
                </> : <>
                    <div className='lg:border-2 p-3 lg:h-32 lg:p-3 rounded-lg'>
                        <div className='font-bold text-2xl flex flex-col'>
                            {formatNumber((item?.price as number) * (discont))}
                            <span className='text-lg mb-2 font-semibold'>no pix</span>
                            <p className='text-sm font-semibold text-gray-600 flex gap-2'>
                                <FaCreditCard className="text-lg" />{formatNumber(item?.price as number)} ou em até 3x de {formatNumber(item?.price as number / 3)}
                            </p>
                        </div>
                        <ButtonAddToCart />
                            <p className='text-sm text-gray-600 mt-6'>Produto vendido e entregue por Flipmark</p>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default PaymentForm;