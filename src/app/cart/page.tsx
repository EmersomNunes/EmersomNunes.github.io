import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Cart } from "./Cart";
export const page = () => {
    return (
        <div>
            <Header />
            <div>
                <Cart />
            </div>
            <Footer />
        </div>
    );
};

export default page;
