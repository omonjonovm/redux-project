import { useState } from 'react'
import { Input } from "../ui"
import { useDispatch, useSelector } from 'react-redux'
import { registerUserStart } from '../slice/auth'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const registerHandler = e => {
    e.preventDefault()
    dispatch(registerUserStart())
  }
  return (
    <div className='text-center'>
      <main className='form-sign w-25 m-auto'>
        <form>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="" width={'72px'} height={'60px'} />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1> <br />
          <Input label={"Username"} state={name} setState={setName} /> <br />
          <Input label={"Email address"} state={email} setState={setEmail} /> <br />
          <Input label={"Password"} type={'password'} state={password} setState={setPassword} />
          <button className="btn btn-primary w-100 py-2 mt-3" disabled={isLoading} onClick={registerHandler} type="submit">
            {isLoading ? 'Loading...' : 'Register'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 1958–2024</p>
        </form>
      </main>
    </div>
  )
}

export default Register