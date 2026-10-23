import { Button } from '#/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Spinner } from '#/components/ui/spinner'
import { Link, useNavigate } from '@tanstack/react-router'
import { GitBranch, Search } from 'lucide-react'

const HomePage = () => {
  const router = useNavigate()
  const goAbout = () => {
    console.log('hi')
    router({ to: '/about' })
  }

  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
        <div>
          <a href="/about">About</a>

          <Link to="/about">About</Link>

          <Button onClick={goAbout}>Go to About</Button>
        </div>

        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button size="xs">Hello</Button>
        <Button variant="outline" className=" rounded-none">
          Hello
        </Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>

        <Button size="icon-lg" variant="outline" className="rounded-full">
          <Search />
        </Button>
        <Button variant="outline">
          <GitBranch data-icon="inline-start" />
          New Branch
        </Button>

        <Button variant="secondary">
          <Spinner data-icon="inline-start" />
          Updating
        </Button>
        <div className="grid grid-cols-4">
          <Card className="pt-0">
            <CardHeader className="p-0">
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent className="p-0">
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomePage
