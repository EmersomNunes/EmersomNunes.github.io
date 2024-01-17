import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { SuporteComponent } from "./components/SuporteComponent";

const Suporte = () => {
    return (
        <div>
            <Header />
            <div className="lg:w-[83.5%]">
                <SuporteComponent />
            </div>
            <Footer />
        </div>
    )
};

export default Suporte;