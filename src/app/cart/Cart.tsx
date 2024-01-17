"use client"
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { formatNumber } from "@/utils/formatNumber";


const discont = 1 - 0.03;

export const Cart = () => {
  const { cartProducts, handleDeleteProductCart } = useCart();
  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>({});

  const handleQtyDecrease = (productId: number) => {
    setProductQuantities((prev) => {
      const newQuantity = Math.max(prev[productId] - 1, 1);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const handleQtyIncrease = (productId: number) => {
    setProductQuantities((prev) => {
      const newQuantity = Math.min((prev[productId] || 1) + 1, 99);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const calculateSubtotal = () => {
    return (cartProducts || []).reduce((subtotal, item) => {
      const quantity = productQuantities[item.id] * discont  || 1;
      return subtotal + item.price * quantity;
    }, 0);
  };
  
  formatNumber(calculateSubtotal);

  const subtotal = calculateSubtotal();


  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col lg:py-52 lg:ml-[18rem] rounded-2xl shadow-md shadow-slate-400 mt-10 p-4 items-center">
        <div className="">
          <div className="text-3xl text-purple-600 font-semibold">Seu carrinho está vazio</div>
          <div>
            <Link href={"/"} className="text-slate-600 flex flex-col items-center mt-2 justify-center">
              <span className="text-[15px]">Você ainda não possui itens no seu carrinho.</span>
              <button className="bg-purple-600 text-white rounded-lg p-3 mt-8">Inicie suas compras</button>
            </Link>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div>
      <div className="lg:py-10 lg:ml-[6.5rem] rounded-2xl shadow-md shadow-slate-400 mt-64 lg:mt-10 lg:p-4 lg:w-[65%]">
        <h1 className="text-2xl m-5 lg:m-0 lg:text-3xl text-gray-700 text-start font-bold">Carrinho de Compras</h1>
        <div className="hidden lg:flex justify-end font-semibold mr-11">Preço</div>
        <div className="mt-3">
          {cartProducts.map(item => (
            <div className="flex flex-col lg:flex-row lg:justify-between border rounded-md py-4 lg:p-8">
              <div className="flex gap-3">
                <Link href={`/products/${item.id}`}>
                  <img src={item.image} className="w-24 ml-2 object-contain" />
                </Link>
                <div className="flex flex-col">
                  <span className="text-base font-medium">{item.name}</span>
                  <div className="text-xs mt-3">vendido e entregue por <span className="underline">flipmark</span></div>
                  <div className="flex mt-5">Quantidade: <div id='accordion-item' className="flex justify-center ml-14">
                    <div className="relative text-center border-2 h-8 w-12">
                      <p className="mx-auto font-medium">{productQuantities[item.id] || 1}</p>
                    </div>
                    <button onClick={() => handleQtyDecrease(item.id)}
                      className="text-bold text-lg absolute bg-gray-100 w-6 rounded-full shadow-md shadow-slate-400 mr-[90px] flex justify-center"
                    >
                      -
                    </button>

                    <button onClick={() => handleQtyIncrease(item.id)}
                      className="text-bold text-lg absolute bg-gray-100 w-6 rounded-full shadow-md shadow-slate-400 ml-[90px] flex justify-center"
                    >
                      +
                    </button>
                  </div></div>
                  <button
                    onClick={() => handleDeleteProductCart(item.id)}
                    className="text-xl mt-4 w-5 text-red-600"><RiDeleteBinLine />
                  </button>
                </div>
              </div>
              <span
                className="hidden lg:block left-[30%] top-[48%] lg:relative lg:top-auto lg:left-auto font-bold text-xl w-48 text-end">
                {formatNumber(item.price < 200 ? item.price * productQuantities[item.id] || item.price :
                   item.price * discont * productQuantities[item.id] || item.price)}
                <div className="hidden lg:flex text-base text-gray-600 font-normal mt-5">
                  à vista no Pix e boleto ou em até 6x de {`${(item?.price as number  / 6 * productQuantities[item.id] || item.price / 6).toFixed(2).replace(".", ",")}`} sem juros
                </div>
              </span>
              <div className="mt-8 lg:mt-0 lg:p-4 flex lg:justify-center absolute top-[150px] lg:top-64 lg:right-20">
                <div className="lg:py-5 rounded-2xl lg:shadow-md shadow-slate-400 lg:p-10">
                  <div className="flex flex-col gap-5 lg:mt-0">
                    {subtotal > 150 ? <>
                      <span className="text-base mb-2 flex gap-2">
                        <span className="text-green-600 text-xl mt-[2px]"><MdCheckCircle /></span>
                        Este produto se qualifica como frete grátis!
                      </span>
                      <span className="text-gray-800 text-xl">
                        Subtotal: ({cartProducts?.length} Produtos):
                        <span className="font-bold text-black"> {formatNumber(subtotal)}</span>
                      </span>
                      <button
                        className="border-2 text-white bg-purple-600 rounded-xl p-2 cursor-pointer w-screen lg:w-[50%]">
                        Fechar Pedido
                      </button>
                      <hr className="lg:hidden xl:hidden 2xl:hidden 3xl:hidden border-[1.5px] mt-5" />
                    </> : <>
                      <span className="text-gray-800 text-xl">
                        Subtotal: ({cartProducts?.length} Produtos):
                        <span className="font-bold text-black"> {formatNumber(subtotal)}</span>
                      </span>
                      <button
                        className="border-2 text-white bg-purple-600 rounded-xl p-2 cursor-pointer w-[50%] hover:opacity-60">
                        Fechar Pedido
                      </button>
                    </>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" border-slate-200 py-4 flex justify-between gap-4">
          <div className="text-sm flex flex-col gap-1 items-start">
          </div>
        </div>
      </div>
    </div>
  );
}