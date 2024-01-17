export const Footer = () => {
    return (
        <div className="flex justify-center items-center mt-5 md:w-full md:mt-10 bg-purple-600 p-10">
            <div>
                <div className="grid gap-x-12 mx-3 gap-4 grid-cols-3 grid-rows-2 text-white
            md:gap-x-28 md:gap-y-8
            xl:flex xl:gap-12
            2xl:flex">
                    <a href="#" className="underline cursor-pointer text-sm">Métodos de pagamento</a>
                    <a href="#" className="underline cursor-pointer text-sm">Sobre nós</a>
                    <a href="#" className="underline cursor-pointer text-sm">Denúncias</a>
                    <a href="#" className="underline cursor-pointer text-sm">Termos do Flipmark</a>
                    <a href="#" className="underline cursor-pointer text-sm">Extenção de garantia</a>
                    <a href="#" className="underline cursor-pointer text-sm">Trocas e devoluções</a>
                    <a href="#" className="underline cursor-pointer text-sm">Voltar ao inicio</a>
                </div>
                <span className="mx-auto flex justify-center mt-10 text-black font-bold">
                    ATENÇÃO:
                    <span className="text-white no-underline ml-1 text-sm md:text-base">Todas as imagens presentes neste site são de cunho educativo, não há intenção alguma de se realizar comércio.</span>
                </span>
            </div>
        </div>
    );
}