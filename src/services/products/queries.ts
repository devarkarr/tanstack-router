import type { IProduct } from '#/types'
import { useQuery } from '@tanstack/react-query'
import api from '../api'

// get products
const getProducts = async () => {
  const response = await api.get<{
    products: IProduct[]
  }>('products')
  return response.data
}

export const getProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (data) => data.products,
    // enabled: false,
  })

//   get product by id
const getProductById = async (id: string) => {
  const response = await api.get<{
    products: IProduct[]
  }>(`products/${id}`)
  return response.data
}
