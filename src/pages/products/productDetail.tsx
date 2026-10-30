import { getProductQuery } from '#/services/products/queries'
import { useParams } from '@tanstack/react-router'

const ProductDetail = () => {
  const { productId } = useParams({ from: '/(shop)/products/$productId' })

  const { data: product } = getProductQuery(productId)

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

  return (
    <div>
      <img src={product?.thumbnail} alt="" />

      <p>{product?.title}</p>
    </div>
  )
}

export default ProductDetail
