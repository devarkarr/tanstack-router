import type { IProduct } from '#/types'
import { useParams } from '@tanstack/react-router'
import axios from 'axios'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct | null>(null)
  const { productId } = useParams({ from: '/products/$productId' })

  useEffect(() => {
    ;(async () => {
      const response = await axios.get<IProduct>(
        `https://dummyjson.com/products/${productId}`,
      )
      setProduct(response.data)
    })()
  }, [])

  return <div>{product?.title}</div>
}

export default ProductDetail
