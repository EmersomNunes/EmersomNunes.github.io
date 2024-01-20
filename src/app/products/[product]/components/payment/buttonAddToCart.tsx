import { getItemById } from "@/app/products/api";
import { useCart } from "@/hooks/useCart";
import { usePathname } from "next/navigation";
import { BsCartPlus } from "react-icons/bs";

const ButtonAddToCart = () => {
    const pathname: string | null = usePathname();
    const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
    const item = id !== null ? getItemById(id) : null;

    const { handleAddProductCart } = useCart();

    const handleAddToCart = () => {
        if (item) {
            handleAddProductCart(item)
        }
    }

    return (
        <div className='mt-10 flex justify-center'>
            <button
                onClick={handleAddToCart}
                className='
                    bg-purple-600 
                    p-3 
                    px-12 
                    rounded-2xl 
                    text-white 
                    text-2xl 
                    flex 
                    flex-col 
                    font-bold 
                    hover:opacity-90'   
            >
                <span className="flex gap-2">
                    <BsCartPlus/>COMPRAR
                </span>

                <p className='text-sm font-normal'>
                    COLOCAR NO CARRINHO
                </p>
            </button>
        </div>
    )
}

export default ButtonAddToCart;