import Link from "next/link";

export const ItemsSpecify = () => {
    return (
        <div className="flex justify-center mt-5 md:w-full md:mt-10">
            <div className="grid gap-x-12 mx-3 gap-4 grid-cols-3 grid-rows-2
        md:gap-x-28 md:gap-y-8
        xl:flex xl:gap-12
        2xl:flex 2xl:gap-x-20">
                <Link href="/books" className="bg-purple-600 flex flex-col rounded-full p-3 items-center md:p-3 lg:rounded-3xl cursor-pointer flex-grow shadow-lg shadow-indigo-500/50">
                    <img src="https://www.shutterstock.com/image-vector/book-icon-sign-design-600nw-553945819.jpg"
                        className="w-16 h-16 rounded-[50%]
                md:w-20 md:h-20
                lg:w-32 lg:h-32"/>
                    <p className="font-serif text-slate-600 md:text-black ml-3 md:ml-0 text-sm md:text-lg xl:text-xl md:text-center mt-2
                    hidden lg:block
                    ">Livros</p>
                </Link>

                <a className="bg-purple-600 flex flex-col rounded-full p-3 items-center md:p-3 lg:rounded-3xl cursor-pointer flex-grow
                shadow-lg shadow-indigo-500/50
                ">
                    <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/9688054-vector-sinal-do-sofa-moveis-simbolo-esta-isolado-em-um-fundo-branco-icone-de-sofa-moveis-cor-editavel-gratis-vetor.jpg"
                        className="w-16 h-16 rounded-[50%] bg-purple-600
                md:w-20 md:h-20
                lg:w-32 lg:h-32"/>
                    <p className="font-serif text-slate-600 md:text-black md:ml-0 text-sm md:text-lg xl:text-xl md:text-center mt-2
                    hidden xl:block
                    ">Móveis</p>
                </a>

                <a className="bg-purple-600 flex flex-col rounded-full pt-3 items-center md:p-3 lg:rounded-3xl cursor-pointer flex-grow
                shadow-lg shadow-indigo-500/50
                ">
                    <img src="https://img.freepik.com/vetores-premium/modelo-de-vetor-de-icone-de-tela-de-televisao_917138-3403.jpg?size=626&ext=jpg"
                        className="w-16 h-16 rounded-[50%] bg-purple-600
                    md:w-20 md:h-20
                    lg:w-32 lg:h-32"/>

                    <p className="font-serif text-slate-600 md:text-black text-sm md:text-lg xl:text-xl md:text-center mt-2
                        hidden lg:block
                        ">Áudio e vídeo</p>
                </a>

                <a className="bg-purple-600 flex flex-col rounded-full pt-3 items-center md:p-3 lg:rounded-3xl cursor-pointer flex-grow
                shadow-lg shadow-indigo-500/50
                ">
                    <img src="https://img.freepik.com/vetores-premium/icone-de-vetor-de-geladeira-em-um-fundo-branco_855620-184.jpg"
                        className="w-16 h-16 rounded-[50%] bg-purple-600
                    md:w-20 md:h-20
                    lg:w-32 lg:h-32"/>
                    <p className="font-serif text-slate-600 md:text-black text-sm md:text-lg xl:text-xl md:text-center mt-2
                        hidden lg:block
                        ">Elétrodomésticos</p>
                </a>

                <a className="bg-purple-600 flex flex-col rounded-full pt-3 items-center md:p-3 lg:rounded-3xl cursor-pointer flex-grow
                shadow-lg shadow-indigo-500/50
                ">
                    <img src="https://img.freepik.com/vetores-premium/icone-de-computador-portatil-em-estilo-simples-ilustracao-vetorial-de-notebook-em-fundo-branco-isolado-conceito-de-negocio-de-sinal-de-pc-portatil_157943-481.jpg"
                        className="w-16 h-16 rounded-[50%] bg-purple-600
                    md:w-20 md:h-20
                    lg:w-32 lg:h-32"/>
                    <p className="font-serif text-slate-600 md:text-black ml-1 text-sm md:text-lg xl:text-xl md:text-center mt-2
                        hidden lg:block
                        ">Notbooks</p>
                </a>

                <a className="bg-purple-600 flex flex-col rounded-full pt-3 items-center md:p-3 lg:rounded-3xl cursor-pointer flex-grow
                shadow-lg shadow-indigo-500/50
                ">
                    <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/18813321-icone-do-smartphone-telefone-em-tela-cheia-celular-fundo-branco-celular-preto-e-branco-transparente-handphone-em-tela-cheia-de-de-icone-vetor.jpg"
                        className="w-16 h-16 rounded-[50%] bg-purple-600
                    md:w-20 md:h-20
                    lg:w-32 lg:h-32"/>
                    <p className="font-serif text-slate-600 md:text-black text-sm md:text-lg xl:text-xl md:text-center mt-2 
                        hidden lg:block
                        ">Smartphones</p>
                </a>
            </div>
        </div>
    );
}