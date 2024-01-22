"use client"
import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { formatNumber } from "@/utils/formatNumber";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const discont = 1 - 0.03;

export const Cart = () => {
  const {
    cartProducts,
    handleDeleteProductCart
  } = useCart();

  const [
    productQuantities,
    setProductQuantities
  ] = useState<{ [key: number]: number }>({});

  const { data: session } = useSession();
  const router = useRouter();

  //Lógica para diminuir item do carrinho.
  const handleQtyDecrease = (productId: number) => {
    setProductQuantities((prev) => {
      const newQuantity = Math.max(prev[productId] - 1, 1);
      return { ...prev, [productId]: newQuantity };
    });
  };

  //Lógica para aumentar item no carrinho.
  const handleQtyIncrease = (productId: number) => {
    setProductQuantities((prev) => {
      const newQuantity = Math.min((prev[productId] || 1) + 1, 99);
      return { ...prev, [productId]: newQuantity };
    });
  };

  //Logica para calcular valor total dos produtos.
  const calculateSubtotal = () => {
    return (cartProducts || []).reduce((subtotal, item) => {
      const quantity = productQuantities[item.id] || 1;
      return subtotal + item.price * quantity;
    }, 0);
  };

  const handleCLoseOrder = () => {
    alert("Compra bem sucedida!! (Lógica de pagamento em construção...)")
    router.push("/")
  }

  const subtotal = calculateSubtotal();

  //Caso o carrinho esteja vazio ou o usuário não esteja logado.
  if (!cartProducts || cartProducts.length === 0 && session) {
    return (
      <div
        className="flex flex-col rounded-2xl shadow-md shadow-slate-400 mt-10 p-4 items-center 
        lg:py-52 lg:ml-[18rem]"
      >
        <div>
          <div className="text-3xl text-purple-600 font-semibold">
            Seu carrinho está vazio
          </div>

          <Link
            href={"/"}
            className="text-slate-600 flex flex-col items-center mt-2 justify-center"
          >
            <span
              className="text-[15px]">
              Você ainda não possui itens no seu carrinho.
            </span>

            <button className="bg-purple-600 text-white rounded-lg p-3 mt-8">
              Inicie suas compras
            </button>
          </Link>
        </div>
      </div>
    )
  };

  //Caso o usuário esteja logado.
  if (session?.user) {
    return (
      <div>
        <div className="rounded-2xl shadow-md shadow-slate-400 mt-64
             lg:py-10 lg:ml-[6.5rem] lg:p-4 lg:w-[65%] lg:mt-10"
        >
          <h1 className="text-2xl m-5 lg:m-0 lg:text-3xl text-gray-700 text-start font-bold">
            Carrinho de Compras
          </h1>

          <div className="hidden lg:flex justify-end font-semibold mr-11">
            Preço
          </div>

          <div className="mt-3">
            {cartProducts.map(item => (
              <div className="flex flex-col border rounded-md py-4 
                   lg:p-8 lg:flex-row lg:justify-between"
              >
                <div className="flex gap-3">
                  <Link
                    href={`/products/${item.id}`}
                  >
                    <img
                      src={item.image}
                      className="w-24 ml-2 object-contain"
                    />
                  </Link>

                  <div className="flex flex-col">
                    <span className="text-base font-medium">
                      {item.name}
                    </span>

                    <div className="text-xs mt-3">
                      vendido e entregue por
                      <span
                        className="underline">
                        flipmark
                      </span>
                    </div>

                    <div className="flex mt-5">
                      Quantidade:
                      <div
                        id='accordion-item'
                        className="flex justify-center ml-14"
                      >

                        <div className="relative text-center border-2 h-8 w-12">
                          <p className="mx-auto font-medium">
                            {productQuantities[item.id] || 1}
                          </p>
                        </div>

                        <button
                          onClick={() => handleQtyDecrease(item.id)}
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
                            justify-center">
                          -
                        </button>

                        <button
                          onClick={() => handleQtyIncrease(item.id)}
                          className="
                            text-bold 
                            text-lg 
                            absolute 
                            bg-gray-100 
                            w-6 
                            rounded-full 
                            shadow-md 
                            shadow-slate-400 
                            ml-[90px] 
                            flex 
                            justify-center">
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteProductCart(item.id)}
                      className="text-xl mt-4 w-5 text-red-600"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>

                <span
                  className="
                    hidden 
                    lg:block 
                    left-[30%] 
                    top-[48%] 
                    lg:relative 
                    lg:top-auto   
                    lg:left-auto 
                    font-bold 
                    text-xl 
                    w-48 
                    text-end"
                >
                  {/* Valor de cada produto. */}
                  {formatNumber(item.price < 200 ?
                    item.price * productQuantities[item.id] || item.price :
                    item.price * discont * productQuantities[item.id] || item.price * discont)}

                  <div className="hidden lg:flex text-base text-gray-600 font-normal mt-5">
                    à vista no Pix e boleto ou em até 6x de
                    {`${(item?.price as number / 6 * productQuantities[item.id] || item.price / 6).toFixed(2).replace(".", ",")}`}
                    sem juros
                  </div>
                </span>

                <div
                  className="
                    mt-8 
                    lg:mt-0 
                    lg:p-4 
                    flex 
                    lg:justify-center 
                    absolute 
                    top-[150px] 
                    lg:top-64 
                    lg:right-20"
                >
                  <div
                    className="lg:py-5 rounded-2xl lg:shadow-md shadow-slate-400 lg:p-10"
                  >
                    <div className="flex flex-col gap-5 lg:mt-0">
                      {subtotal > 150 ?
                        <>
                          <span className="text-base mb-2 flex gap-2">
                            <span className="text-green-600 text-xl mt-[2px]">
                              <MdCheckCircle />
                            </span>
                            Este produto se qualifica como frete grátis!
                          </span>

                          <span className="text-gray-800 text-xl">
                            Subtotal: ({cartProducts?.length} Produtos):
                            <span className="font-bold text-black">
                              {item.price > 200 ? formatNumber(subtotal * discont) : formatNumber(subtotal)}
                            </span>
                          </span>

                          <button
                            className="
                            border-2 
                          text-white 
                          bg-purple-600 
                            rounded-xl 
                            p-2 
                            cursor-pointer 
                            w-screen 
                            lg:w-[50%]"
                          >
                            Fechar Pedido
                          </button>

                          <hr
                            className="lg:hidden xl:hidden 2xl:hidden 3xl:hidden border-[1.5px] mt-5"
                          />

                        </> :
                        <>
                          <span className="text-gray-800 text-xl">
                            {/* Quantidade de produtos*/}
                            Subtotal: ({cartProducts?.length} Produtos):

                              {/* Subtotal do valor de todos produtos. */}
                            <span className="font-bold text-black">
                              {formatNumber(subtotal)}
                            </span>
                          </span>

                          <button
                            onClick={handleCLoseOrder}
                            className="
                            border-2 
                            text-white 
                            bg-purple-600 
                            rounded-xl 
                            p-2 
                            cursor-pointer 
                            w-[50%] 
                            hover:opacity-60"
                          >
                            Fechar Pedido
                          </button>
                        </>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    //Caso o usuário não esteja logado.
  } else {
    return (
      <div
        className="
          flex 
          flex-col 
          justify-center 
          items-center 
          lg:py-10 
          lg:ml-[18rem] 
          mt-64 
          lg:mt-10 
          lg:p-4 
          lg:w-[69%] 
          h-[533px] 
          p-5"
      >

        <h1 className="text-2xl text-center text-gray-600 font-medium">
          Parece que você não está logado, faça o login para acessar seu carrinho.
        </h1>

        <div className="mt-10">
          <button
            onClick={() => router.push("/login")}
            className="
              border-2 
              text-white 
              bg-purple-600 
              rounded-xl 
              p-2 
              px-20 
              text-xl 
              cursor-pointer 
              hover:opacity-90"
          >
            Fazer login
          </button>
        </div>
      </div>
    )
  };
};