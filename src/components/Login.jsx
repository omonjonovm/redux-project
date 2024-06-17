import React from 'react'
import { useState } from 'react'
import { Input } from "../ui"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='text-center'>
      <main className='form-sign w-25 m-auto'>
        <form>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="" width={'72px'} height={'60px'} />
          <h1 class="h3 mb-3 fw-normal">Please Login</h1> <br />
          <Input label={"Email address"} state={email} setState={setEmail} /> <br />
          <Input label={"Password"} type={'password'} state={password} setState={setPassword} />
          <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Login</button>
          <p className="mt-5 mb-3 text-body-secondary">© 1958–2024</p>
        </form>
      </main>
    </div>
  )
}

export default Login