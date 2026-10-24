import type { IProduct } from '#/types'
import { useLocation, useParams } from '@tanstack/react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct | null>(null)
  const { productId } = useParams({ from: '/(shop)/products/$productId' })
  const [categories, setCategories] = useState([])

  const { search } = useLocation()

  useEffect(() => {
    ;(async () => {
      const response = await axios.get<IProduct>(
        `https://dummyjson.com/products/${productId}`,
      )
      setProduct(response.data)
    })()

    ;(async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${search.category}`,
      )
      setCategories(response.data)
    })()
  }, [])

  console.log(categories)

  // /prodcuts/

  return <div>{product?.title}</div>
}

export default ProductDetail
