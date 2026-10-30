import { ScrollArea } from '#/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '#/components/ui/tabs'
import { useCategoriesQuery } from '#/services/categories/queries'

type Props = {
  tab: string
  handleCategory: (e: string) => void
}

const Categories = ({ tab, handleCategory }: Props) => {
  const { data } = useCategoriesQuery()

  return (
    <div>
      <ScrollArea>
        <Tabs
          value={tab}
          // defaultValue={tab}
          onValueChange={handleCategory}
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value={'all'}>all</TabsTrigger>
            {data?.map((c) => (
              <TabsTrigger key={c} value={c}>
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </ScrollArea>
    </div>
  )
}

export default Categories
