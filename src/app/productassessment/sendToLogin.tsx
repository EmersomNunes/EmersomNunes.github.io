"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export const sendToLogin = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center items-center lg:py-10 lg:ml-[18rem] mt-64 lg:mt-10 lg:p-4 lg:w-[69%] h-[533px] p-5">
            <h1
                className="text-2xl text-center text-gray-600 font-medium">
                Parece que você não está logado, faça o login para acessar seu carrinho.
            </h1>
            <div className="mt-10">
                <button
                    onClick={() => router.push("/login")}
                    className="border-2 text-white bg-purple-600 rounded-xl p-2 px-20 text-xl cursor-pointer hover:opacity-90">
                    Fazer login
                </button>
            </div>
        </div>
    );
}
