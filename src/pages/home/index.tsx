import { Skeleton } from '#/components/ui/skeleton'
import { getProductsQuery } from '#/services/products/queries'
import { Link } from '@tanstack/react-router'
import Categories from './components/categories'
import { useState } from 'react'
import useSearchQuery from '#/hooks/useSearchQuery'

// interface ICategoryTab {
//   category: string
// }
const HomePage = () => {
  const [queryParams, setQueryParam] = useSearchQuery()

  // const navigate = useNavigate()

  const [tab, setTab] = useState(queryParams.category)

  const { data: products, isPending } = getProductsQuery(tab)

  // const [products, setProducts] = useState<IProduct[]>([])
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   ;(async () => {
  //     setIsLoading(true)
  //     const response = await axios.get<{
  //       products: IProduct[]
  //     }>(' https://dummyjson.com/products')
  //     setIsLoading(false)
  //     setProducts(response.data.products)
  //   })()
  // }, [])

  const handleCategory = (e: string) => {
    setTab(e)

    setQueryParam({ category: e })

    // navigate({
    //   to: '/',
    //   search: { category: e },
    // })
  }

  return (
    <>
      <Categories tab={tab} handleCategory={handleCategory} />

      <div className="grid grid-cols-4 gap-3">
        {isPending &&
          new Array(12).fill(0).map((_, idx) => {
            return <Skeleton key={idx} className="h-40 w-full" />
          })}

        {products?.map((p) => (
          <div className="" key={p.id}>
            <Link
              to="/products/$productId"
              params={{
                productId: `${p.id}`,
              }}
            >
              <img src={p.thumbnail} className="size-28" alt="" />
              <p className="text-lg">{p.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage

// const router = useNavigate()
// const goAbout = () => {
//   console.log('hi')
//   router({ to: '/about' })
// }

// return (
//   <>
//     <div className="p-8">
//       {/* <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
//       <div>
//         <a href="/about">About</a>

//         <Link to="/about">About</Link>

//         <Button onClick={goAbout}>Go to About</Button>
//       </div>

//       <Button>Hello</Button>
//       <Button>Hello</Button>
//       <Button size="xs">Hello</Button>
//       <Button variant="outline" className=" rounded-none">
//         Hello
//       </Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="ghost">Ghost</Button>
//       <Button variant="destructive">Destructive</Button>
//       <Button variant="link">Link</Button>

//       <Button size="icon-lg" variant="outline" className="rounded-full">
//         <Search />
//       </Button>
//       <Button variant="outline">
//         <GitBranch data-icon="inline-start" />
//         New Branch
//       </Button>

//       <Button variant="secondary">
//         <Spinner data-icon="inline-start" />
//         Updating
//       </Button> */}
//       <div className="grid grid-cols-4">
//         <Card className="pt-0">
//           <CardHeader className="p-0">
//             <CardTitle>Card Title</CardTitle>
//             <CardDescription>Card Description</CardDescription>
//             <CardAction>Card Action</CardAction>
//           </CardHeader>
//           <CardContent className="p-0">
//             <p>Card Content</p>
//           </CardContent>
//           <CardFooter>
//             <p>Card Footer</p>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   </>
// )
