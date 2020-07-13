import React from 'react'
import Link from 'gatsby-link'
import styled, {keyframes} from 'styled-components';
import logo from '../images/logo.png';
import logo2 from '../images/logo-2.png';
import logo3 from '../images/logo-3.png';
import logo4 from '../images/logo-4.png';
import logo5 from '../images/logo-5.png';
import logo6 from '../images/logo-6.png';
import wallpaper from '../images/wallpaper.jpg';
import wallpaper2 from '../images/wallpaper2.jpg';
import wallpaper3 from '../images/wallpaper3.jpg';
import wallpaper4 from '../images/wallpaper4.jpg';
import Card from '../components/card';
import Wave from '../components/wave';
import { Section } from '../components/section';
import { SectionTwo } from '../components/section-two';
import { Footer } from '../components/footer'

const heroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px)
  }
`

const Hero = styled.div`
  background: url(${wallpaper3});
  height: 928px;
  background-size: cover;
  background-position: center;
`

const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 500px;
  padding: 150px 50px;
  text-align: center;
`

const HeroHeader = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
  opacity: 0;
  animation: ${heroAnimation};
  animation-duration: 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(.2, .8, .2, 1);
`

const HeroParagraph = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  line-height: 1.5;
  opacity: 0;
  animation: ${heroAnimation};
  animation-duration: 3s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(.2, .8, .2, 1);
`

const HeroSpan = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: rgba(0,0,0, 0.7);
  padding: 9px 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  &:hover {
    background: #fff;
    color: #000;
    transition: 1s cubic-bezier(.2, .8, .2, 1);
  }
`

const Logos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 40px;
  margin: 100px 0;
  justify-items: center;
  @media (max-width: 640px) {
    padding: 15px 0;
    display: none;
  }
`

const CardHeader = styled.div`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: -webkit-linear-gradient( #050a27, #4a538c);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const CardGroup = styled.div`
  margin: 50px 40px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;

  & div:nth-child(4) {
    grid-column: span 3;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    height: 1200px;
    width: 100%;
    margin: 40px 0px;
    grid-gap: 0px;
    overflow: hidden;

    & div:nth-child(4) {
      grid-column: span 1;
    }
  }
`
export const WaveBottom = styled.div`
  & svg {
    bottom: auto;
  }
  @media (max-width: 640px) {
    & svg {
      bottom: -290px;
    }
  }
`


const IndexPage = () => (
  <div>
    <Hero>
      <HeroGroup>
        <HeroHeader>Dive into the future</HeroHeader>
        <HeroParagraph>Complete SaaS bundle for your cryptocurrency needs</HeroParagraph>
        <HeroParagraph>Be the vanguard</HeroParagraph>
        <Link to="/page-2/"><HeroSpan>Watch our video</HeroSpan></Link>
        <Logos>
          <img src={logo} width="50" />
          <img src={logo2} width="50" />
          <img src={logo3} width="50" />
          <img src={logo4} width="50" />
          <img src={logo5} width="50" />
          <img src={logo6} width="50" />
        </Logos>
        <WaveBottom><Wave /></WaveBottom>
      </HeroGroup>
    </Hero>
    <div>
      <CardHeader>Services</CardHeader>
        <CardGroup>
          <Card 
            title="Banking"
            text="$2.99/month"
            image={wallpaper}
          />
          <Card 
            title="Trading"
            text="$4.99/month"
            image={wallpaper2}
          />
          <Card 
            title="Payment"
            text="$9.99/month"
            image={wallpaper3}
          />
          <Card 
            title="Automated Trading"
            text="$15.99/month"
            image={wallpaper4}
          />
        </CardGroup>
    </div>
    <Section
      image={wallpaper2}
      logo={logo}
      title="Cryptocurrency for retail investors"
      text="Have all the tools in order to succeed with our broad range of SaaS services specially tailored towards your needs."
    />
    <SectionTwo
      image={wallpaper3}
      mainTitle="World-class SaaS solutions"
      title="Reach us to us."
      titleTwo="Our specialists will respond shortly."
      text="Find out how our world-class SaaS services can help you reach your goals."
      textTwo="Ask one of your experts how we can help."
      textThree="If you have any other question, feel free to ask them."
    />
    <Footer />
  </div>
)

export default IndexPage
