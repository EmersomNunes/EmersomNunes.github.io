import { getItemById } from "@/app/products/api";
import { Product } from "@/types/Product";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';

type CartContextType = {
  cartQt: number;
  cartProducts: Product[] | null;
  handleAddProductCart: (product: Product) => void;
  handleDeleteProductCart: (productId: number) => void;
  handleCartQtyIncrease: (product: Product) => void;
  productQuantities: any;
  setProductQuantities: any;
  handleQtyIncrease: (productId: number) => void;
  handleQtyDecrease: (productId: number) => void;

}
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any
};

export const CartContextProvider = (props: Props) => {
  const [cartProducts, setCartProducts] = useState<Product[] | null>(null);
  const [productQuantities, setProductQuantities] = useState<{ [key: number]: number }>(() => {
    const savedQuantities = localStorage.getItem('productQuantities');
    return savedQuantities ? JSON.parse(savedQuantities) : {};
  });
  const [cartQt, setCartTotal] = useState(0);
  const router = useRouter();
  const pathname: string | null = usePathname();
  const id: number | null = pathname !== null ? parseInt(pathname.split('/').pop() || '', 10) || null : null;
  const item = id !== null ? getItemById(id) : null;

  useEffect(() => {
    localStorage.setItem('productQuantities', JSON.stringify(productQuantities));
  }, [productQuantities]);

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
        router.push("/cart")
        return updatedCart;
      } else {
        const updatedCart = [product];
        localStorage.setItem("eShopCartItens", JSON.stringify(updatedCart));
        router.push("/cart")
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

  const value = {
    cartQt,
    cartProducts,
    handleAddProductCart,
    handleDeleteProductCart,
    handleCartQtyIncrease,
    setCartTotal,
    productQuantities,
    setProductQuantities,
    handleQtyIncrease,
    handleQtyDecrease
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