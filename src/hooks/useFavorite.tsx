"use client"
import { Product } from "@/types/Product";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast';

type FavoriteContextType = {
  favoriteTotal: number;
  favoriteProducts: Product[] | null;
  handleAddProductFavorite: (product: Product) => void;
  handleRemoveProductFavorite: (productId: number) => void;
  toggleProductFavorite: (product: Product) => void;
  favorite: boolean;
  setFavorite: any
}
export const FavoriteContext = createContext<FavoriteContextType | null>(null);

interface Props {
  [propName: string]: any
};

export const FavoriteContextProvider = (props: Props) => {
  const[favoriteTotal, setFavoriteTotal] = useState(0);
  const[favoriteProducts, setFavoriteProducts] = useState<Product[] | null>(null);
  const[favorite, setFavorite] = useState(false)

  useEffect(() => {
    const favoriteItems: any = localStorage.getItem("eShopFavoriteItens");
    const cProducts: Product[] | null = JSON.parse(favoriteItems); 

    setFavoriteProducts(cProducts)
  }, []);

  //Send favorite item from the "/favorite" router.
  const handleAddProductFavorite = useCallback((product: Product) => {
    setFavoriteProducts((prev) => {
      let updatedFavorite;

      if(prev) {
        updatedFavorite = [...prev, product]
      } else {
        updatedFavorite = [product]
      }

      localStorage.setItem("eShopFavoriteItens", JSON.stringify(updatedFavorite));
      return updatedFavorite;
    })
    
    toast.success("Produto adicionado aos favoritos");
  }, []);

  //Remove favorite item from the "/favorite" router.
  const handleRemoveProductFavorite= useCallback((productId: number) => {
    setFavoriteProducts((prev) => {
      if (prev) {
        const updatedFavoriteItens = prev.filter(item => item.id !== productId);
        localStorage.setItem("eShopFavoriteItens", JSON.stringify(updatedFavoriteItens));
        return updatedFavoriteItens;
      } else {
        return null;
      }
    });

    toast.success("Produto removido dos favoritos");
  }, []);

  //Toggle button favorite (this button is "Heart")
  const toggleProductFavorite = useCallback((product: Product) => {
    if (favoriteProducts) {
      const existingIndex = favoriteProducts.findIndex(existingProduct => existingProduct.id === product.id);

      if (existingIndex > -1) {
        handleRemoveProductFavorite(product.id);
      } else {
        handleAddProductFavorite(product);
      }
    }

    localStorage.setItem("eShopFavoriteItens", JSON.stringify(favoriteProducts));
  }, [favoriteProducts, handleAddProductFavorite, handleRemoveProductFavorite]);

  const value = {
    favoriteTotal,
    favoriteProducts,
    handleAddProductFavorite,
    handleRemoveProductFavorite,
    toggleProductFavorite,
    favorite,
    setFavorite
  }

  return <FavoriteContext.Provider value={value} {...props}/>
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if(context === null) {
    throw new Error("useFavorite must be used within a favoriteContextProvider")
  }
  return context;
}