import { useEffect, useState } from 'react'
import axios from 'axios'
import type { IProduct } from '#/types'
import { Link } from '@tanstack/react-router'

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const response = await axios.get<{
        products: IProduct[]
      }>(' https://dummyjson.com/products')
      setProducts(response.data.products)
    })()
  }, [])

  console.log(products)
  return (
    <div>
      {products.length &&
        products.map((p) => (
          <div className="" key={p.id}>
            <Link
              to="/products/$productId"
              params={{
                productId: `${p.id}`,
              }}
            >
              <p className="text-xl">{p.title}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default ProductPage
