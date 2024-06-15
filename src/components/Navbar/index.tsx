import React, { FC, memo } from 'react'
import { NavbarWrapper } from './css'
import { Link } from 'react-router-dom'
interface IProps {
  children?: React.ReactNode
}
const Navbar: FC<IProps> = (props) => {
  return (
    <NavbarWrapper>
      <Link to="/pageA">
        <button>PageA</button>
      </Link>
      <Link to="/pageB">
        <button>PageB</button>
      </Link>
      <Link to="/fatherPage">
        <button>fatherPage</button>
      </Link>
    </NavbarWrapper>
  )
}

export default memo(Navbar)
