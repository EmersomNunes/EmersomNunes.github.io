import { useState } from "react";
import { Icone } from "./Icone";
import { Nav } from "./Nav";

export const Menu = () => {
    const [isView, setIsView] = useState<boolean>(false);
    return (
        <nav className="absolute z-10 w-full">
            <Icone view={ isView } setView={setIsView}/>
            <Nav view={isView}/>
        </nav>
    );
}