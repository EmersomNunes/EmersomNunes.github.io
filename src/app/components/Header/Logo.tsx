import { useRouter } from "next/navigation";

export const Logo = () => {
    const router = useRouter();

    return(
        <button onClick={() => router.push("/")} 
                className="flex absolute z-40 cursor-pointer" 
                title="Flipmark"
        >
            <span className="
                    hidden 
                    cursor-pointer 
                    md:flex
                    md:ml-8
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