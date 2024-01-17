"use client"
import { signIn } from "next-auth/react";

export const EnterWithSocialMedia = () => {

    const handlerLoginSocial = () => {
        signIn('google');
    }

    return (
        <div className="mt-[10%]">
            <div className="flex flex-col justify-center items-center gap-10 border border-gray-400 rounded-md py-20 px-10 ">
                <p className="text-sm p-3">Acesse sua conta com o google</p>
                <div className="flex cursor-pointer p-2">
                    <button onClick={handlerLoginSocial} className="border px-10 py-8 flex gap-2 border-slate-400 dark:border-slate-700 rounded-lg text-slate-700 dark:text-black hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-700 hover:shadow transition duration-150">
                        <img className="w-8 h-8" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                        <span className="text-xl">Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}