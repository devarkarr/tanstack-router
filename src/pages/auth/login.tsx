import { Button } from '#/components/ui/button'
import { useLoginMutation } from '#/services/auth/mutations'
import type { ILoginPayload } from '#/services/auth/type'
import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) => {
  const [formData, setFormData] = useState<ILoginPayload>({
    email: '',
    password: '',
  })

  const login = useLoginMutation()

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          login.mutate(formData)
        }}
      >
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </>
  )
}

export default Login
