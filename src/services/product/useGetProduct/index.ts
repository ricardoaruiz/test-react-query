import { useQuery } from "react-query";
import { getProductById } from "../fetchers";
import { Product } from "../types";
import { UseGetProductProps } from "./types";

export const useGetProduct = ({ id, ...options }: UseGetProductProps) => {
    return useQuery<Product | undefined, Error>(['getProduct', id], () => getProductById(id), {
        ...options,
        enabled: !!id
    })
}
