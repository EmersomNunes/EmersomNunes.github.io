import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();

    return(
        <button onClick={() => router.push("/")} 
                className="flex absolute z-10 cursor-pointer" 
                title="Flipmark"
        >
            <span className="
                    hidden 
                    cursor-pointer 
                    md:hidden 
                    lg:flex 
                    xl:flex 
                    2xl:flex
                    text-3xl 
                    font-extrabold 
                    mt-[7px] 
                    text-white 
                    font-DM-mono 
                    tracking-widest"
            >
                FLIPMARK
            </span>
        </button>
    );
}