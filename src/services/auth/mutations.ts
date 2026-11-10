import { useMutation } from '@tanstack/react-query'
import type { ILoginPayload, IRegisterPayload } from './type'
import axios from 'axios'
import { toast } from '#/components/ui/toast'
import { useNavigate } from '@tanstack/react-router'
import useAuthStore from '#/stores/useAuthStore'
import { authApi } from '../api'

// register
const register = async (payload: IRegisterPayload) => {
  const response = await axios.post(
    'http://118.27.148.199:3080/api/auth/register',
    payload,
  )
  return response.data
}

export const useRegisterMutation = () => {
  const navigate = useNavigate()

  const { setInfo } = useAuthStore()

  return useMutation({
    mutationFn: (payload: IRegisterPayload) => register(payload),
    onSuccess: (data) => {
      setInfo(data.token, data.user)
      navigate({ to: '/dashboard' })
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

// login
const login = async (payload: ILoginPayload) => {
  const response = await axios.post(
    'http://118.27.148.199:3080/api/auth/login',
    payload,
  )
  return response.data
}

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { setInfo } = useAuthStore()

  return useMutation({
    mutationFn: (payload: ILoginPayload) => login(payload),
    onSuccess: (data) => {
      setInfo(data.token, data.user)
      navigate({ to: '/dashboard' })
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
