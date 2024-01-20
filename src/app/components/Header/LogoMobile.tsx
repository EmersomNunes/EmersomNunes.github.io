import Link from "next/link";

export const LogoMobile = () => {
    return(
        <Link href={'/'} 
              className="flex absolute cursor-pointer">
            <span 
                className="
                cursor-pointer 
                md:hidden 
                lg:hidden 
                xl:hidden 
                2xl:hidden
                text-2xl 
                font-extrabold 
                text-white 
                font-DM-mono 
                tracking-widest 
                ml-14
            ">
                FLIPMARK
            </span>
        </Link>
    );
}