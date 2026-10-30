import { useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from '@tanstack/react-router'

const useSearchQuery = (): [
  Record<string, string>,
  (params: Record<string, string | number | null>) => void,
] => {
  const { search: queryParamsRaw, pathname } = useLocation()
  const queryParams = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(queryParamsRaw).map(([key, value]) => [
          key,
          String(value),
        ]),
      ),
    [queryParamsRaw],
  )
  const navigate = useNavigate()

  const setQueryParam = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearch = { ...queryParams } as Record<string, string | number>

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === '') {
          delete newSearch[key]
        } else {
          newSearch[key] = value
        }
      })

      const hasChanged =
        Object.keys(newSearch).length !== Object.keys(queryParams).length ||
        Object.entries(newSearch).some(
          ([key, value]) => String(value) !== queryParams[key],
        )

      if (!hasChanged) return

      void navigate({
        to: pathname,
        search: newSearch,
      }).catch((error) => {
        if (error instanceof DOMException && error.name === 'AbortError') return
        throw error
      })
    },
    [navigate, pathname, queryParams],
  )

  return [queryParams, setQueryParam] as const
}

export default useSearchQuery
