import { UserIconSidebar } from "./UserIconSidebar";
import { signOut } from "next-auth/react";

export const Nav = (props: any) => {
    const { view } = props;
    return (
        <div className="
            flex 
            absolute 
            z-10
            "
        >
            <ul 
                className={`
                    lg:hidden 
                    xl:hidden 
                    md:hidden 
                    ${view ? "w-full sm:w-48" : "w-0"} 
                    transition-width 
                    duration-100
                    flex 
                    flex-col 
                    font-bold 
                    h-full 
                    fixed 
                    left-0 
                    pt-[50px] 
                    bg-white
                    `}
            >
                <UserIconSidebar />

                <li 
                    className=
                        {`${view ? 'flex' : "hidden"} 
                        text-black 
                        hover:text-salmon 
                        w-full 
                        sm:w-32 
                        p-5 
                        justify-start
                        hover:bg-blackHoverburguer
                        `}
                >
                    Inicio
                </li>

                <li 
                    className={`
                        ${view ? 'flex' : "hidden"} 
                        text-black 
                        hover:text-salmon 
                        w-full 
                        sm:w-32 
                        p-5 
                        justify-start 
                        hover:bg-blackHoverburguer
                        `}
                >
                    Categorias
                </li>
                
                <li 
                    className={`
                        ${view ? 'flex' : "hidden"} 
                        text-black 
                        hover:text-salmon 
                        w-full 
                        sm:w-32 
                        p-5 
                        justify-start
                        hover:bg-blackHoverburguer
                        `}
                >
                    Filtros
                </li>
                
                <li 
                    className={`
                        ${view ? 'flex' : "hidden"} 
                        text-black 
                        hover:text-salmon 
                        w-full 
                        sm:w-32 
                        p-5 
                        justify-start
                        hover:bg-blackHoverburguer
                        `}
                >
                    Sobre
                </li>

                <li 
                    className={`
                        ${view ? 'flex' : "hidden"} 
                        text-black 
                        hover:text-salmon 
                        w-full 
                        sm:w-32 
                        p-5 
                        justify-start
                        hover:bg-blackHoverburguer
                        `}
                >
                    FAQ
                </li>

                <li 
                    className={`
                        ${view ? 'flex' : "hidden"} 
                        text-black 
                        hover:text-salmon 
                        w-full 
                        sm:w-32 
                        p-5 
                        justify-start
                        hover:bg-blackHoverburguer
                        `}
                >
                    <button 
                        onClick={() => signOut()}
                    >
                        Sair
                    </button>
                </li>
            </ul>
        </div>
    );
}