import Link from 'next/link';
import React from 'react'
import styled from "styled-components";
import Logo from '../molecules/Logo';
import Navlinks from '../molecules/Navlinks'


const Navdata = [
    {
    iconUrl: "/icons/homelogo.svg",
    text: "Home",
    url: "/"
    },

    {
    iconUrl: "/icons/profilelogo.svg",
    text: "Profile",
    url: "/"
    },
    
    {
    iconUrl: "/icons/categorylogo.svg",
    text: "Category",
    url: "/"
    },

    {
    iconUrl: "/icons/messagelogo.svg",
    text: "Message",
    url: "/"
    },

    {
    iconUrl: "/icons/settingslogo.svg",
    text: "Settings",
    url: "/"
    },

    {
    iconUrl: "/icons/helpslogo.svg",
    text: "Helps",
    url: "/"
    },
]



function Navigation() {
  return (
     <MainContainer>
         <Logo /> 
         {Navdata.map((item, i)=>(
             <Link href={item.url} key={i}>
                 <Navlinks text={item.text} iconUrl={item.iconUrl}/>
            </Link>
         ))}
         
     </MainContainer>
  )
}

export default Navigation

const MainContainer = styled.div`
    margin: 20px 0 33px 30px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 20px;

`