import { useMutation } from '@tanstack/react-query'
import type { ILoginPayload, IRegisterPayload } from './type'
import axios, { Axios, AxiosError } from 'axios'
import { toast } from '#/components/ui/toast'

const register = async (payload: IRegisterPayload) => {
  const response = await axios.post(
    'http://localhost:3000/api/auth/register',
    payload,
  )
  return response.data
}

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (payload: IRegisterPayload) => register(payload),
    onSuccess: (data) => {
      console.log(data)
      return data
    },
    onError: (data: { error: string }) => {
      toast.add({
        type: 'error',
        title: data.error,
        description: 'Sunday, December 3 at 9:00 AM',
      })
      return data
    },
  })
}

const login = async (payload: ILoginPayload) => {
  const response = await axios.post(
    'http://localhost:3000/api/auth/login',
    payload,
  )
  return response.data
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload: ILoginPayload) => login(payload),
    onSuccess: (data) => {
      console.log(data)

      
      return data
    },
    onError: (data: { error: string }) => {
      toast.add({
        type: 'error',
        title: data.error,
        description: 'Sunday, December 3 at 9:00 AM',
      })
      return data
    },
  })
}
