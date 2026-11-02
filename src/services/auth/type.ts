import type z from 'zod'
import type { me } from './schema'

export interface ILoginPayload {
  email: string
  password: string
}

export interface IRegisterPayload extends ILoginPayload {
  username: string
}

export type MeType = z.infer<typeof me>
