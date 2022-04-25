import { UseQueryOptions } from "react-query"
import { Product } from "../types"

export interface UseGetProductProps extends UseQueryOptions<Product | undefined, Error> {
    id: number
}

