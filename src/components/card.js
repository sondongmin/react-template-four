import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 300px;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0, .25);
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: all 1s cubic-bezier(0.2, 0.4, 0.4, 1);

    &:hover {
        transform: scale(1.1, 1.1);
        box-shadow: 0 30px 60px rgba(0,0,0,.5);
    }
`

const Image = styled.img`
    position: absolute;
    top: 0;
    height: 140%;
    z-index: -1;
    transition: all 1s cubic-bezier(0.2, 0.4, 0.4, 1);

    &:hover ${Wrapper} {
        transform: translateY(-20px);
    }
`
const Header = styled.h1`
    color: white;
    font-size: 30px;
    margin: 20px 0 0 20px;
    width: 190px;
`

const Paragraph = styled.p`
    color: rgba(255, 255, 255, .8);
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    align-self: end;
    margin: 0 0 20px 20px;
`

const Card = props => (
    <Wrapper>
        <Image src={props.image} />
        <Header>{props.title}</Header>
        <Paragraph>{props.text}</Paragraph>
    </Wrapper>
)

export default Card;