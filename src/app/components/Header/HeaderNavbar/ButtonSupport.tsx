import Link from "next/link";

export const ButtonSupport = () => {
    return (
        <Link
            href="/suporte"
        >
            <img
                src="https://cdn-icons-png.flaticon.com/128/159/159832.png"
                title="Suporte"
                className="
                    hidden 
                    md:absolute
                    md:right-[25px] 
                    md:w-9 
                    md:flex
                    z-40 
                    xl:right-[30px]
                    "
            />
        </Link>
    );
}