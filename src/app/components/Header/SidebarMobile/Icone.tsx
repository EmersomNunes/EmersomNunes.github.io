export const Icone = (props: any) => {
    const { setView, view } = props;

    const handleView = () => {
        setView(!view);
    }

    return (
        <>
            <div 
                className={`
                    flex 
                    flex-col 
                    absolute 
                    top-0 
                    z-30 
                    pt-4 
                    pl-2 
                    ${view ? "right-0" : "left-0"} 
                    pr-1 
                    md:hidden 
                    lg:hidden 
                    xl:hidden 
                    2xl:hidden 
                    3xl:hidden
                    `}
                onClick={handleView}
            >
                <div 
                    className={`
                        ${view && "rotate-45 translate-y-2 "}
                        h-1
                        w-6
                        mb-1
                        bg-blackburguer 
                        transition 
                        duration-500
                        `} 
                />
                <div 
                    className={`
                        ${view && "-rotate-45"} 
                        h-1 
                        w-6 
                        mb-1 
                        bg-blackburguer 
                        transition 
                        duration-500
                        `} 
                />
                <div 
                    className={`
                    ${view ? "hidden" : "flex"} 
                    h-1 
                    w-6 
                    bg-blackburguer 
                    transition 
                    duration-500
                    `} 
                />
            </div>
        </>
    );
}