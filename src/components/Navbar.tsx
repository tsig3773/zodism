import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.space.md};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <NavLink to="/">Zodism</NavLink>
      </Logo>
      <NavLinks>
        <StyledNavLink to="/analysis">Analyze</StyledNavLink>
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;