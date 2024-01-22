import Link from "next/link"

export const SuporteComponent = () => {
    return (
        <div
            className="
                flex 
                flex-col 
                lg:py-[13.5rem] 
                lg:ml-[18rem] 
                rounded-2xl 
                shadow-md 
                shadow-slate-400 
                mt-10 
                -4 
                items-center
                text-3xl
                text-gray-600"
        >
            Precisa de suporte? Entre em contato
            <div  className="flex gap-10">
                <Link href={'https://github.com/EmersomNunes/ecommerce'}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                        className="w-10 h-10 mt-5"
                    />
                </Link>
                <Link href={'https://www.linkedin.com/in/emersom-nunes-b58553268/'}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
                        className="w-10 h-10 mt-5"
                    />
                </Link>
            </div>
        </div>
    );
}