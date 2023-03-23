import React from 'react'
import HeaderLogo from './components/HeaderLogo';
import HeaderNav from './components/HeaderNav';
import HeaderRight from './components/HeaderRight';
import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderWrapper>
    <HeaderLogo />
    <HeaderNav />
    <HeaderRight />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header