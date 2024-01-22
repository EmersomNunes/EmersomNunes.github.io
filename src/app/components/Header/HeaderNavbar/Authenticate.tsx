"use client"
import { CiUser } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export const UserIcon = () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div
            className="
                hidden 
                lg:block 
                absolute 
                z-40
                text-4xl 
                md:right-[130px] 
                xl:right-[470px] 
                cursor-pointer"
        >
            {session ? (
                <div className="group flex absolute">
                    <p className="text-4xl">
                        <CiUser />
                    </p>

                    <div className="pl-1 text-white">
                        <p className="text-base">
                            Olá,{`${session.user?.name?.split(' ')[0]}`}
                        </p>

                        <p className="text-xs">
                            acesse sua conta
                        </p>
                    </div>

                    <div
                        className="
                            absolute 
                            z-10 
                            hidden 
                            bg-white 
                            border 
                            rounded-md 
                            mt-10 
                            p-4 
                            w-52 
                            h-64 
                            -right-8 
                            group-hover:flex 
                            group-hover:flex-col 
                            text-sm 
                            transition-all 
                            duration-500 
                            ease-in-out
                            "
                    >
                        <Link
                            href="#"
                            className="
                                px-2 
                                py-4 
                                text-gray-800 
                                hover:text-blue-600 
                                border-b
                                "
                        >
                            lore
                        </Link>

                        <Link
                            href="#"
                            className="
                                px-2 
                                py-4 
                                text-gray-800 
                                hover:text-blue-600 
                                border-b
                                "
                        >
                            Item 2
                        </Link>

                        <Link
                            href="#"
                            className="
                                px-2 
                                py-5 
                                text-gray-800 
                                hover:text-blue-600 
                                border-b
                                "
                        >
                            Item 3
                        </Link>

                        <button
                            onClick={() => signOut()}
                            title="Sair"
                            className="
                                px-2 
                                py-4 
                                text-gray-800 
                                hover:text-blue-600 
                                flex
                                "
                        >
                            Sair
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex">
                    <button
                        onClick={() => router.push("/login")}
                        className="hidden lg:flex absolute"
                    >
                        <CiUser />
                        <p>
                            <span className="text-sm flex w-32 text-white">
                                Olá, faça seu login ou cadastre-se
                            </span>
                        </p>
                    </button>
                </div>
            )}
        </div>
    );
}