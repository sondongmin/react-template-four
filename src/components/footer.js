import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import logo from '../images/main-logo.png';


const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: 300px;
    background-color: #000;

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
        height: 1200px;
    }
`

const ContentWrapper = styled.div`
    padding: 50px 30px;
    background-color: #000;
`

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
`

const ImageSpan = styled.span`
    margin: 30px 20px 30px 20px;
`
const SectionText = styled.p`
    color: #fff;
    font-size: 14px;
    text-align: left;
    margin: 10px 100px 0 20px;
`

const FooterHeader = styled.h4`
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    margin: 30px 20px 30px 20px;
`

const StyledSpan = styled.span`
    color: #fff;
    font-size: 14px;
    margin: 50px 20px 30px 20px;
    
    & svg {
        position: static;
    }
`

export const Footer = props => (
    <ContentWrapper>
    <FooterWrapper>
            <FooterColumn>
                <ImageSpan><img src={logo} width="120"/></ImageSpan>
                <SectionText>Bitwave is the leading SaaS provider for all things related to cryptocurrency.</SectionText>
            </FooterColumn>
            <FooterColumn>
                <FooterHeader>Navigation</FooterHeader>
                <FooterColumn>
                    <Link to="/"><StyledSpan>Services</StyledSpan></Link>
                    <Link to="/"><StyledSpan>Dashboard</StyledSpan></Link>
                    <Link to="/"><StyledSpan>Workshops</StyledSpan></Link>
                </FooterColumn>
            </FooterColumn>
            <FooterColumn>
                <FooterHeader>Support</FooterHeader>
                <FooterColumn>
                    <Link to="/"><StyledSpan>Contact Us</StyledSpan></Link>
                    <Link to="/"><StyledSpan>FAQ</StyledSpan></Link>
                    <Link to="/"><StyledSpan>Documentation</StyledSpan></Link>
                </FooterColumn>
            </FooterColumn>
            <FooterColumn>
                <FooterHeader>Legal</FooterHeader>
                <FooterColumn>
                    <Link to="/"><StyledSpan>Terms & Conditions</StyledSpan></Link>
                    <Link to="/"><StyledSpan>Privacy Policy</StyledSpan></Link>
                    <Link to="/"><StyledSpan>Terms of use</StyledSpan></Link>
                </FooterColumn>
            </FooterColumn>
            

    </FooterWrapper>
    </ContentWrapper>
)