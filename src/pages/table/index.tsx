import { getProductsPaginationQuery } from '#/services/products/queries'
import { useState } from 'react'
import columns from './components/columns'
import DataTable from './components/data-table'

const TablePage = () => {
  const [page, setPage] = useState(0)
  const { data } = getProductsPaginationQuery(page * 10)

  return (
    <div className="max-w-6xl mx-auto">
      <DataTable
        columns={columns}
        data={data?.products || []}
        pageCount={data?.total ? Math.floor(data.total / 10) : 0}
        pageIndex={page}
        onPaginationChange={(p) => setPage(p)}
      />
    </div>
  )
}

export default TablePage
