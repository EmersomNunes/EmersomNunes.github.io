"use client"
import { usePathname, useRouter } from "next/navigation";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { getItemById } from "@/app/products/api";
import { useEffect, useState } from "react";
import { useRating } from "@/hooks/useRating";
import {  Rating } from "@mui/material";
import { useSession } from "next-auth/react";

const productAssessment = () => {
    const { textAreaValue, setTextAreaValue, rating, setRating, handleAddAssessments } = useRating();
    const router = useRouter();
    const { data: session } = useSession();
    const [hasReviewed, setHasReviewed] = useState(false);

    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;

    const checkUserReview = () => {
        if (session && item) {
            const hasReview = localStorage.getItem(`userReview_${session.user?.email}_${item.id}`);
            setHasReviewed(!!hasReview);
        }
    };
    useEffect(() => {
        checkUserReview();
    }, [session, item]);

    const handleAddAssessmentsAndReturn = () => {
        if (!hasReviewed) {
            if (session) {
                handleAddAssessments();
                setHasReviewed(true);
                localStorage.setItem(`userReview_${session.user?.email}_${item?.id}`, 'true');
                router.push(`/products/${item?.id}`);
            } else {
                router.push('/login');
            }
        }
    };

    return (
        <div>
            <Header />
            <div className="flex flex-col lg:ml-[18rem] lg:mt-10 rounded-2xl shadow-md shadow-slate-400 p-7 w-[68%] lg:h-[800px]">
                {!hasReviewed ? (<>
                    <h1 className="text-3xl text-gray-600 mt-5 ml-2">Faça uma avaliação</h1>
                    <div className="flex gap-4 mt-5">
                        <img src={item?.image} className="w-20 object-contain" />
                        <span className="flex items-center">{item?.name}</span>
                    </div>
                    <hr className="my-5 border-gray-800" />
                    <h1 className="text-2xl text-gray-600">Classificação</h1>
                    <div className="flex items-center mt-1 text-[12px] lg:text-xl">
                        <Rating value={rating}
                            onChange={(event, newValue: any) => setRating(newValue)}
                        />
                    </div>
                    <hr className="my-5 border-gray-800" />
                    <div>
                        <h1 className="text-2xl text-gray-600">Descrição</h1>
                        <textarea value={textAreaValue}
                            onChange={(e) => setTextAreaValue(e.target.value)}

                            className="border-2 border-gray-600 mt-3 w-[80%] h-56 max-h-56 text-black p-2"
                            placeholder="O que achou do produto?" />
                    </div>
                    <hr className="my-6 border-gray-800" />
                    <button
                        onClick={handleAddAssessmentsAndReturn}
                        className="bg-purple-600 rounded-2xl text-white flex flex-col justify-center items-center p-3 w-48"
                    >
                        Enviar
                    </button>
                </>) : (<>
                    <div className="flex flex-col lg:py-52 rounded-2xl mt-10 p-4 items-center">
                        <div>
                            <div className="text-4xl text-purple-600 font-semibold ml-[17.5rem] mb-6">Oooppss!</div>
                            <div>
                                <div className="text-red-600 flex flex-col items-center mt-2 justify-center">
                                    <span className="text-[20px]">desculpe, mas você não pode adicionar mais de uma avaliação a um produto.</span>
                                    <button onClick={() => router.push(`/products/${item?.id}`)} className="bg-purple-600 text-white rounded-lg p-3 mt-8 w-48">Voltar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)}
            </div>
            <Footer />
        </div>
    );
};

export default productAssessment;