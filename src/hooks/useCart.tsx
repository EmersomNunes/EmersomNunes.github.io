import { Product } from "@/types/Product";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';

type CartContextType = {
  cartQt: number;
  cartProducts: Product[] | null;
  handleAddProductCart: (product: Product) => void;
  handleDeleteProductCart: (productId: number) => void;
  handleCartQtyIncrease: (product: Product) => void;
}
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any
};

export const CartContextProvider = (props: Props) => {
  const [cartQt, setCartTotal] = useState(0);
  const [cartProducts, setCartProducts] = useState<Product[] | null>(null);

  const router = useRouter();

  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItens")
    const cProducts: Product[] | null = JSON.parse(cartItems)

    setCartProducts(cProducts)
  }, []);

  //Send product to router "/cart"
  const handleAddProductCart = useCallback((product: Product) => {
    setCartProducts((prev) => {
      if (prev) {
        if (prev.some((item) => item.id === product.id)) {
          router.push("/cart")
          return prev;
        }
  
        const updatedCart = [...prev, product];
        localStorage.setItem("eShopCartItens", JSON.stringify(updatedCart));
        toast.success("Produto adicionado ao carrinho");
        return updatedCart;
      } else {
        const updatedCart = [product];
        localStorage.setItem("eShopCartItens", JSON.stringify(updatedCart));
        toast.success("Produto adicionado ao carrinho");
        return updatedCart;
      }
    });
  }, [setCartProducts]);
  

  //Delete product from the "/cart"
  const handleDeleteProductCart = useCallback((productId: number) => {
    setCartProducts((prev) => {
      if (prev) {
        const updatedCart = prev.filter(item => item.id !== productId);
        localStorage.setItem("eShopCartItens", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        return null;
      }
    });

    toast.success("Produto removido do carrinho");
  }, []);

  //Increase item in the amount quantity and set value to 2 items.
  const handleCartQtyIncrease = useCallback((product: Product) => {
    if (product.quantity === 99) {
      toast.error('Oppps! Limite máximo atingido');
      return;
    }

    if (cartProducts) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: Math.min(item.quantity + 1, 99) } : item
      );

      setCartProducts(updatedCart);
      localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
    }
  }, [cartProducts, setCartProducts]);

  const value = {
    cartQt,
    cartProducts,
    handleAddProductCart,
    handleDeleteProductCart,
    handleCartQtyIncrease,
    setCartTotal
  };

  return <CartContext.Provider value={value} {...props} />
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider")
  }
  return context;
};