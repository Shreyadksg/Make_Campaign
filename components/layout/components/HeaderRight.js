import React from 'react'
import styled from 'styled-components';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {App} from '../Layout';
import {useContext} from 'react';
import Wallet from './Wallet';
const HeaderRight = () => {
  const ThemeToggler= useContext(App);
  return (
    <HeaderRightWrapper>
      <Wallet />
      <ThemeToggle>
        {ThemeToggler.theme === 'dark' ? <DarkModeIcon onClick={ThemeToggler.changeTheme} />: <WbSunnyIcon onClick={ThemeToggler.changeTheme} />}
      
      </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper=styled.div`
  font-family: 'Epilogue';
  margin-right: 15px;
  height: 60%;
  display:flex;
  justify-content: center;
  align-items: center;
  
  `
const ThemeToggle=styled.div`
 height: 100%;
  cursor:pointer
  padding : 5px;
  width:50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default HeaderRight