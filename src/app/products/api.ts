import { products } from "@/utils/products";

export const getItemById  = (itemId: number) => {
    const product = products.find(item => item.id === itemId);
    return product;
}