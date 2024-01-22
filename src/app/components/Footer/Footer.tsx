import Link from "next/link";

export const Footer = () => {
    return (
        <div className="flex justify-center items-center mt-5 md:w-full md:mt-10 bg-purple-600 p-10">
            <div>
                <div 
                    className="
                        grid 
                        gap-x-12 
                        mx-3 
                        gap-4 
                        grid-cols-3 
                        grid-rows-2 
                        text-white
                        md:gap-x-28 
                        md:gap-y-8
                        xl:flex 
                        xl:gap-12
                        2xl:flex"
                >
                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm">
                        Métodos de pagamento
                    </Link>

                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm">
                        Sobre nós
                    </Link>

                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm"
                    >
                        Denúncias
                    </Link>

                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm"
                    >
                        Termos do Flipmark
                    </Link>

                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm"
                    >
                        Extenção de garantia
                    </Link>
                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm">
                        Trocas e devoluções
                    </Link>

                    <Link
                        href="#" 
                        className="underline cursor-pointer text-sm">
                        Voltar ao inicio
                    </Link>
                    <Link
                        href="/" 
                        className="underline cursor-pointer text-sm">
                        Página Inicial
                    </Link>
                </div>
                <span 
                    className="mx-auto flex justify-center mt-10 text-black font-bold md:text-xl">
                    ATENÇÃO:
                    <span className="text-white no-underline ml-1 text-sm md:text-xl">
                        Todas as imagens presentes neste site são de cunho educativo, não há intenção alguma de se realizar comércio.
                    </span>
                </span>
            </div>
        </div>
    );
}