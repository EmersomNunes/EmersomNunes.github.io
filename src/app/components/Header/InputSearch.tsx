"use client"
import { useState } from "react";

export const InputSearch = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="relative flex mt-14 items-center justify-center md:mt-1 w-full lg:w-7/12">
            <input
                type="text"
                title="Pesquisar"
                className="h-8 w-11/12 rounded-xl placeholder:text-sm p-4 outline-none outline-salmon
                md:ml-36 md:placeholder:text-base md:w-5/6
                xl:ml-52 xl:w-full xl:h-10 xl:rounded-full
                "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pesquisar..."
            />
            <div className="absolute right-2 md:right-4 xl:-right-[4px]">
                <button className="p-1">
                    <img src="https://cdn-icons-png.flaticon.com/128/5272/5272056.png" className="w-6 m-1 mr-3"/>
                </button>
            </div>
        </div>
    );
};


