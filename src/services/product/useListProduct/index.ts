import { useQuery } from "react-query";
import { listAllProducts } from "../fetchers";
import { Product } from "../types";
import { UseListProductProps } from "./types";

export const useListProduct = (options: UseListProductProps) => {    
    return useQuery<Product[], Error>('listAllProducts', listAllProducts, options)    
}