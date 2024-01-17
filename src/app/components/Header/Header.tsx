"use client"
import { Menu } from "./SidebarMobile/Menu";
import { UserIcon } from "./HeaderNavbar/Authenticate";
import { CartShop } from "./HeaderNavbar/CartShop";
import { InputSearch } from "./InputSearch";
import { ButtonMyItems } from "./HeaderNavbar/ButtonMyFavoriteItens";
import { ButtonSupport } from "./HeaderNavbar/ButtonSupport";
import { Logo } from "./Logo";
import { LogoMobile } from "./LogoMobile";

export const Header = () => {
  return (
  <div>
      <div 
      className="hidden md:flex absolute bg-white -top-3 w-full h-[5rem] justify-center items-center text-3xl text-red-600 font-bold">
        Ofetas de fim de ano, não percaaaa!!
      </div>
    <div className="bg-purple-600 h-36 lg:mt-16 lg:h-28 lg:flex shadow-lg shadow-purple-500/50">
      <div className="font-bold md:w-[78%] xl:w-[70%] mx-auto lg:mt-6">
        <Menu />
        <div className="flex pt-3 items-start relative">
          <Logo />
          <LogoMobile />
          <UserIcon />
          <CartShop />
          <ButtonMyItems />
          <ButtonSupport />
          <InputSearch />
        </div>
      </div>
    </div>
  </div>
  );
}
