import { Button } from '#/components/ui/button'
import { useRegisterMutation } from '#/services/auth/mutations'
import type { IRegisterPayload } from '#/services/auth/type'
import React, { useState } from 'react'

type Props = {}

const Register = (props: Props) => {
  const [formData, setFormData] = useState<IRegisterPayload>({
    username: '',
    email: '',
    password: '',
  })

  const register = useRegisterMutation()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        register.mutate(formData)
      }}
    >
      <div>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, username: e.target.value }))
          }}
          placeholder="Username"
        />
      </div>
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
      <Button type="submit">Register</Button>
    </form>
  )
}

export default Register
