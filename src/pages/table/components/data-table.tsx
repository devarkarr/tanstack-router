import { useTable } from '@tanstack/react-table'
import type { ColumnDef, RowData } from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { features } from './data-table-features'
import type { DataTableFeatures } from './data-table-features'
import { Button } from '#/components/ui/button'
import { Loader } from 'lucide-react'
import { Skeleton } from '#/components/ui/skeleton'

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
  pageCount: number
  onPaginationChange: (p: number) => void
  pageIndex: number
  isLoading: boolean
}

function DataTable<TData extends RowData>({
  columns,
  data,
  pageCount,
  onPaginationChange,
  pageIndex,
  isLoading,
}: DataTableProps<TData>) {
  const table = useTable({
    features,
    data,
    columns,
    manualPagination: true,
    state: {
      pagination: {
        pageIndex: pageIndex - 1,
        pageSize: 10,
      },
    },
    pageCount,
    onPaginationChange: (updater) => {
      const next =
        typeof updater === 'function'
          ? updater({ pageIndex: pageIndex - 1, pageSize: 10 })
          : updater
      onPaginationChange(next.pageIndex + 1)
    },
  })

  return (
    <>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <table.FlexRender header={header} />
                      )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading &&
              new Array(10).fill(null).map((_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={columns.length} className="h-12.5">
                    <Skeleton className="w-full h-full" />
                  </TableCell>
                </TableRow>
              ))}

            {table.getRowModel().rows.length
              ? table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        <table.FlexRender cell={cell} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : !isLoading && (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default DataTable
