import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, StyledList } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </StyledList>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;