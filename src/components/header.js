import React, { useState, useEffect } from "react";
import Link from 'gatsby-link';
import logo from '../images/main-logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'


const StyledHeader = styled.div`
  position: fixed;
  width: 100%;
  padding: 50px 0;
  z-index: 100;
  transition: all 1s cubic-bezier(0.2, 0.6, 0.2, 1);

  @media (max-width: 640px) {
    padding: 15px 0;
  }

  ${({ active }) => active && `
    background: rgba(0,0,0, 0.8);
    padding: 15px 0;
    backdrop-filter: blur(20px);
  `}
`

const StyledSpan = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 30px;

  & svg {
    position: static;
  }

  @media (max-width: 640px) {
    font-size: 25px;
  }
`

const ImageSpan = styled.span`
  position: relative;
  top: 6px;
`

const HeaderGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;

  @media (max-width: 640px) {
    overflow: hidden;
    width: 100%;
    
    & a:nth-child(4) {
      display:none;
    }
  }
`

export default function Header (props) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (event) => { 
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  return (
    <StyledHeader active={scroll}>
      <HeaderGroup>
        <Link to="/"><ImageSpan><img src={logo} width="45"/></ImageSpan></Link>
        <Link to="/"><StyledSpan>Services</StyledSpan></Link>
        <Link to="/"><StyledSpan>Dashboard</StyledSpan></Link>
        <Link to="/"><StyledSpan>Workshops</StyledSpan></Link>
        <Link to="/"><StyledSpan><FontAwesomeIcon icon={faUser} /></StyledSpan></Link>
      </HeaderGroup>
    </StyledHeader>
  );
}

