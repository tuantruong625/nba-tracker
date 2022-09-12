import { Spacing, Colors, Body } from "@tuantruong625/quotidian-component-library"
import { Link } from "react-router-dom"
import styled from "styled-components"

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

const NavHeader = styled(Body)`
  padding-left: ${Spacing.size2};
  color: ${Colors.gray7};
`

const NavImage = styled.img`
  width: ${Spacing.size7};
`

const NavBar = (): JSX.Element => {
  return (
    <Nav>
      <NavLogContainer>
        {/* <NavImage src={logo} alt="Logo" /> */}
        <NavHeader isCapitalized>nba tracker</NavHeader>
      </NavLogContainer>
      <div>
        <Link to="/" style={{ paddingLeft: Spacing.size3, paddingRight: Spacing.size3 }}> Home</Link>
        <Link to="/news" style={{ paddingLeft: Spacing.size3, paddingRight: Spacing.size3 }}>News</Link>
      </div>
    </Nav>
  )
}

export default NavBar