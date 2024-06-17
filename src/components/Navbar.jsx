import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container py-3">
      {/* <span class="fs-4">Navbar</span> */}
      <Link to={'/'} className='fs-4' >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="" width={'100px'} height={'80px'}/></Link>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={'/login'} className='me-3 py-2 link-body-emphasis text-decoration-none'>
          Login
        </Link>
        <Link to={'/register'} className='me-3 py-2 link-body-emphasis text-decoration-none'>
          Register
        </Link>
      </nav>
    </div></div>
  )
}

export default Navbar