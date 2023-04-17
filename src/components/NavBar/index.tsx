
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../../assets/logo.png'

const Nav = styled.nav`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border: 1px #ECEFF4 solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  position: sticky;
  top: 0;
  background-color: #FFF;
`

const NavLogContainer = styled.div`
  display: flex;
  align-items: center;
`
const NavImage = styled.img`
  width: 15rem;
`

const NavBar = (): JSX.Element => {
  return (
    <Nav>
      <NavLogContainer>
        <NavImage src={logo} alt="Logo" />
      </NavLogContainer>
      <div>
        <Link to="/" style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}> Home</Link>
        <Link to="/news" style={{ paddingLeft: '0,75rem', paddingRight: '0.75rem' }}>News</Link>
      </div>
    </Nav>
  )
}

export default NavBar