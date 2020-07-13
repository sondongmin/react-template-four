import React from 'react';
import styled from 'styled-components';
import Wave from './wave';
import { SectionGroup, WaveTop, WaveBottom } from './shared/styled-components';

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 3px;
    height: 240px;
    justify-content: center;
    text-align: center;
`

const SectionTitle = styled.h3`
    color: #fff;
    font-size: 60px;
    margin: 25px 0 20px 0;
    line-height: 1.2;
    text-align: center;
`

const SectionText = styled.p`
    color: #fff;
    text-align: center;
    max-width: 500px;
    margin: auto;
`

export const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaveBottom><Wave /></WaveBottom>
    </SectionGroup>
)