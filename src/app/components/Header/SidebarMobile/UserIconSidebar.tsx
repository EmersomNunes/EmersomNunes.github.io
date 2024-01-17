import { signIn, useSession } from "next-auth/react";

export const UserIconSidebar = () => {
    const { data: session } = useSession();
    return (
        <>
            {session ? <>
            <button className="mb-5">
                <img className="text-sm absolute top-6 ml-5 w-8 h-8 rounded-full" src={`${session.user?.image}`}/>
            </button>
            </> : <>
            <button onClick={() => signIn("google")}>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/4211/4211178.png"
                    className="w-6 absolute top-3 ml-5"
                />
            </button>      
            </>}
        </>
    );
}