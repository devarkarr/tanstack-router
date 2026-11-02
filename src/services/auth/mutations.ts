import { useMutation } from '@tanstack/react-query'
import type { ILoginPayload, IRegisterPayload } from './type'
import axios from 'axios'
import { toast } from '#/components/ui/toast'
import Cookie from 'js-cookie'
import { useNavigate } from '@tanstack/react-router'

// register
const register = async (payload: IRegisterPayload) => {
  const response = await axios.post(
    'http://localhost:3001/api/auth/register',
    payload,
  )
  return response.data
}

export const useRegisterMutation = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (payload: IRegisterPayload) => register(payload),
    onSuccess: (data) => {
      Cookie.set('token', data.token, {
        expires: 7,
      })
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
    'http://localhost:3001/api/auth/login',
    payload,
  )
  return response.data
}

export const useLoginMutation = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (payload: ILoginPayload) => login(payload),
    onSuccess: (data) => {
      Cookie.set('token', data.token, {
        expires: 7,
      })
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
