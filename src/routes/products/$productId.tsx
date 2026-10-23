import ProductDetail from '#/pages/products/productDetail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
})
