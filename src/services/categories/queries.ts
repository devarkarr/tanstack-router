import { useQuery } from '@tanstack/react-query'
import api from '../api'

const getCategories = async () => {
  const response = await api.get<string[]>('products/category-list')
  return response.data
}

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: ['category-list'],
    queryFn: getCategories,
  })
