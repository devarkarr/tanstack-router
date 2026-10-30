import type { IProduct } from '#/types'
import { useQuery } from '@tanstack/react-query'
import api from '../api'

// get products
const getProducts = async (tab: string) => {
  const response = await api.get<{
    products: IProduct[]
  }>(tab === 'all' ? 'products' : `products/category/${tab}`)
  return response.data
}

export const getProductsQuery = (tab: string) =>
  useQuery({
    queryKey: ['products', tab],
    queryFn: () => getProducts(tab),
    select: (data) => data.products,
    // enabled: false,
  })

//   get product by id
const getProductById = async (id: string) => {
  const response = await api.get<IProduct>(`products/${id}`)
  return response.data
}

export const getProductQuery = (id: string) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  })
