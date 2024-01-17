"use client"
import { getItemById } from '@/app/products/api';
import { usePathname } from 'next/navigation';
import { formatNumber } from '@/utils/formatNumber';
import { FaCreditCard } from "react-icons/fa6";
import ButtonAddToCart from './buttonAddToCart';

const discont = 1 - 0.03;

const PaymentForm = () => {
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;

    return (
        <div>
            <div className='w-96 my-20 shadow-md shadow-gray-300 rounded-md h-96 p-4'>
                <div className='border-2 h-32 p-8 rounded-lg'>
                    <div className='font-bold text-2xl flex flex-col'>
                        <sup className='absolute lg:top-[22.9rem] line-through text-sm text-red-600'>
                            {formatNumber(item?.price)}
                        </sup>

                        {formatNumber((item?.price as number) * (discont))}
                        <span className='text-lg mb-2 font-semibold'>no pix</span>
                        <p className='text-sm font-semibold text-gray-600 flex gap-2'>
                        <FaCreditCard className="text-lg"/>{formatNumber(item?.price as number)} ou em até 6x de {formatNumber(item?.price as number / 6)}
                        </p>

                        <sup className='absolute items-center text-sm rounded-lg bg-green-600 lg:top-[22.8rem] px-[2px] ml-[6.4rem] text-white'>
                            <i className="fa fa-arrow-down ml-1 mr-1"></i>3%
                        </sup>
                    </div>
                    <ButtonAddToCart />
                </div>
            </div>
        </div>
    )
}

export default PaymentForm;