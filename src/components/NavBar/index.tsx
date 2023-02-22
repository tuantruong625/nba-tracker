import { Spacing, Colors } from "@tuantruong625/quotidian-component-library"
import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../../assets/logo.png'

const Nav = styled.nav`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.size5} 0;
  border: 1px ${Colors.gray1} solid;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  position: sticky;
  top: 0;
  background-color: ${Colors.white};
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
        <Link to="/" style={{ paddingLeft: Spacing.size3, paddingRight: Spacing.size3 }}> Home</Link>
        <Link to="/news" style={{ paddingLeft: Spacing.size3, paddingRight: Spacing.size3 }}>News</Link>
      </div>
    </Nav>
  )
}

export default NavBar