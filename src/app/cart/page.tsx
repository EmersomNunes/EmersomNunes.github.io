import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Cart } from "./Cart";
export const PageCart = () => {
    return (
        <div>
            <Header />
            <div className="">
                <Cart />
            </div>
            <Footer />
        </div>
    );
};

export default PageCart;
