import TablePage from '#/pages/table'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/table/')({
  component: TablePage,
})
