import Link from "next/link"

export const NavSprite = () => {
    return(
        <div className="w-full bg-purple-500 text-white py-4">
            <div className="mx-72">
            <div className="group flex absolute top-[18.5%]">
                    <div className="pl-1 text-white cursor-pointer">
                        <p className="text-base">Todas as categorias</p>
                    </div>

                    <div
                        className="absolute z-[150] hidden bg-white border rounded-md mt-[1.7rem] p-3 w-[1000px] h-64 -right-[53rem] group-hover:grid group-hover:grid-cols-4 text-sm transition-all duration-500 ease-in-out">
                        <Link href="#" className="px-2 py-4 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            lore
                        </Link>
                        <Link href="#" className="px-2 py-4 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 2
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <Link href="#" className="px-2 py-5 text-gray-800 hover:text-blue-600 w-16 h-10 hover:underline">
                            Item 3
                        </Link>
                        <button title="Sair" className="px-2 py-4 text-gray-800 hover:text-blue-600 flex">
                            Sair
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}