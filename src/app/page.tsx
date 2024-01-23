import { Carousel } from "@/app/components/Carousel/Carousel";
import HomeAppliencesCarousel from "@/app/components/Carousel/HomeApplicens/HomeAppliencesCarousel";
import { ItemsSpecify } from "@/app/components/maintop2/ItemsSpecify";
import BestSellersCarousel from "@/app/components/Carousel/Books/BestSellersCarousel"
import NewsBooks from "@/app/components/Carousel/Books/NewsBooks.Carousel";
import PromotionHomeApplicens from "@/app/components/Carousel/HomeApplicens/PromotionHomeApplicens";
import ChirstmasOffers from "@/app/components/Carousel/ChristmasOffers";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <hr className="sm:block h-[1px] bg-gray-200 border-0 dark:bg-yellow-700"></hr>
      <div>
        <Carousel />
        <ItemsSpecify />

        <hr className="from-neutral-950 border-[1px] border-gray-500 md:mb-10 md:w-9/12 mx-auto" />

        <div>
          <BestSellersCarousel />
          <NewsBooks />
        </div>

        <hr className="from-neutral-950 border-[1px] border-gray-500 mt-10 mb-10 md:w-9/12 mx-auto" />
        <ChirstmasOffers />
        <hr className="from-neutral-950 border-[1px] border-gray-500 mt-10 mb-10 md:w-9/12 mx-auto" />

        <div>
          <HomeAppliencesCarousel />
          <PromotionHomeApplicens />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;

