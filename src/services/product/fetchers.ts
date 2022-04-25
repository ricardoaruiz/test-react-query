import api from '../../config/api'
import { Product } from "./types"

const PRODUCT_URL = '/product'

export const listAllProducts = async (): Promise<Product[]> => {
    const response = await api.get<Product[]>(PRODUCT_URL)
    return response.data
}

export const getProductById = async (id: number | undefined): Promise<Product | undefined> => {
    const response = await api.get<Product>(`${PRODUCT_URL}/${id}`)
    return response.data
}
