import { UseQueryOptions } from "react-query"
import { Product } from "../types"

export interface UseListProductProps extends UseQueryOptions<Product[], Error> { }

