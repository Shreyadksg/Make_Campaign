import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
const HeaderNav = () => {
  const Router=useRouter();
  return (
    <HeaderNavWrapper>
      <Link href={'/'} style={{ textDecoration: 'none' }}><HeaderNavLinks active={Router.pathname =='/' ? true:false}>
        Campaigns
      </HeaderNavLinks></Link>
     <Link href={'/createcampaign'} style={{textDecoration: 'none'}}> <HeaderNavLinks active={Router.pathname == '/createcampaign' ? true : false}>
        Create Campaign
      </HeaderNavLinks></Link>
      <Link href={'/dashboard'} style={{ textDecoration: 'none' }}><HeaderNavLinks active={Router.pathname == '/dashboard' ? true : false}>
        Dashboard
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper= styled.div`
display: flex;
background-color: ${(props)=> props.theme.bgDiv};
padding: 6px;
height: 50%;
align-items: center;
border-radius: 10px;
justify-content: space-between;
`
const HeaderNavLinks=styled.div`
font-family: 'Epilogue';
margin: 7px;
background-color: ${(props)=>props.active? props.theme.bgSubDiv:props.theme.bgDiv};
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 5px 0 5px;
border-radius: 10px;
cursor: pointer;
text-decoration: none;
`
export default HeaderNav