import { getItemById } from "@/app/products/api";
import { Product } from "@/types/Product";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const AmountCart = () => {
  const pathname: string | null = usePathname();

  const id: number | null = pathname !== null ?
    parseInt(pathname.split('/').pop() || '', 10) || null :
    null;

  const item = id !== null ?
    getItemById(id) :
    null;

  const [cartProduct,
    setCartProduct
  ] = useState<Product>({
    id: item?.id as number,
    name: item?.name as string,
    category: item?.category as string,
    description: item?.description as string,
    image: item?.image as string,
    price: item?.price as number,
    quantity: typeof item?.quantity === 'number' ?
      item.quantity :
      1
  })

  const handleQtyDecrease = () => {
    setCartProduct((prev) => {
      const newQuantity = Math.max(prev.quantity - 1, 1);
      return { ...prev, quantity: newQuantity };
    });
  };

  const handleQtyIncrease = () => {
    setCartProduct((prev) => {
      const newQuantity = Math.min(prev.quantity + 1, 99);
      return { ...prev, quantity: newQuantity };
    });
  };

  return (
    <div
      id='accordion-item'
      className="
        flex 
        justify-center 
        ml-14"
    >

      <div
        className="
          relative 
          text-center 
          border-2 
          h-8 
          w-12"
      >
        <p
          className="
            mx-auto 
            font-medium"
        >
          {cartProduct.quantity}
        </p>
      </div>

      <button
        onClick={handleQtyDecrease}
        className="
          text-bold 
          text-lg 
          absolute 
          bg-gray-100 
          w-6 
          rounded-full 
          shadow-md 
          shadow-slate-400 
          mr-[90px] 
          flex 
          justify-center"
      >
        -
      </button>

      <button
        onClick={handleQtyIncrease}
        className="
          text-bold 
          text-lg 
          absolute 
          bg-gray-100 
          w-6 rounded-full 
          shadow-md 
          shadow-slate-400 
          ml-[90px] 
          flex 
          justify-center"
      >
        +
      </button>
    </div>
  );
}