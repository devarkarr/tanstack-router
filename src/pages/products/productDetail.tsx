import { getProductQuery } from '#/services/products/queries'
import type { IProduct } from '#/services/products/type'
import { useParams } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const { productId } = useParams({ from: '/(shop)/products/$productId' })
  const { data: product } = getProductQuery(productId)

  const [previewImg, setPreviewImg] = useState('')

  useEffect(() => {
    if (product?.images.length) {
      setPreviewImg(product.images[0])
    }
  }, [product?.images])

  // useEffect(() => {
  //   ;(async () => {
  //     const response = await axios.get<IProduct>(
  //       `https://dummyjson.com/products/${productId}`,
  //     )
  //     setProduct(response.data)
  //   })()

  //   ;(async () => {
  //     const response = await axios.get(
  //       `https://dummyjson.com/products/category/${search.category}`,
  //     )
  //     setCategories(response.data)
  //   })()
  // }, [])

  // /prodcuts/

  const handleImg = (img: string) => {
    setPreviewImg(img)
  }

  return (
    <div>
      <div>
        <div>
          <img src={previewImg} className="size-52" alt="" />
        </div>
        <div className="flex items-center gap-3">
          {product?.images.map((img, idx) => (
            <img
              onClick={() => handleImg(img)}
              key={idx}
              src={img}
              className={`size-20 border-2 ${img === previewImg && 'border-orange-500'} `}
            />
          ))}
        </div>
      </div>

      <p>{product?.title}</p>
      {/* <Child product={product} /> */}
    </div>
  )
}

const Child = ({ product }: { product: IProduct | undefined }) => {
  return (
    <div>
      <p>{product?.title}</p>
    </div>
  )
}
export default ProductDetail
