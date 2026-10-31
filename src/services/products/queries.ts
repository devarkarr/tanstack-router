import { useQuery } from '@tanstack/react-query'
import api from '../api'
import { productsSchema, productsValidation } from './schema'

// get products
const getProducts = async (tab: string) => {
  const response = await api.get(
    tab === 'all' ? 'products' : `products/category/${tab}`,
  )
  return productsSchema.parse(response.data.products)
}

export const getProductsQuery = (tab: string) =>
  useQuery({
    queryKey: ['products', tab],
    queryFn: () => getProducts(tab),
    // select: (data) => data,
    // enabled: false,
  })

//   get product by id
const getProductById = async (id: string) => {
  const response = await api.get(`products/${id}`)
  return productsValidation.parse(response.data)
}

export const getProductQuery = (id: string) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  })
