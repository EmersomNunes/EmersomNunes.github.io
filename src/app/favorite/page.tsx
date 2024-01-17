"use client"
import { FavoriteFile } from "./components/FavoriteFile";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

const Favorite = () => {
  return (
    <div>
      <Header />
      <div className="lg:w-[83%]">
        <FavoriteFile />
      </div>
      <Footer />
    </div>
  );
}

export default Favorite;