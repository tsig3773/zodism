import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.space.lg};
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;