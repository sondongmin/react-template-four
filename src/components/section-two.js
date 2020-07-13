import React from 'react';
import styled from 'styled-components';
import Wave from '../components/wave';
import { SectionGroup, WaveTop } from './shared/styled-components';
import { inputStyle, gridSingleColumn } from './shared/shared-styles';

const SectionFormGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: 300px;
`

const SectionTitleGroup = styled.div`
    ${gridSingleColumn}
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    margin-top: 200px;
    height: 100px;
`

const SectionContentGroup = styled.div`
    ${gridSingleColumn}
`

const SectionTextGroup = styled.div`
    ${gridSingleColumn}
    grid-row-gap: 1px;
    margin-top: 20px;
    height: 100px;

    @media (max-width: 640px) {
        margin-top: 160px;
    }
`

const SectionInputGroup = styled.div`
    ${gridSingleColumn}
    grid-row-gap: 1px;
    margin-top: 220px;
    height: 100px;
`

const SectionInput = styled.input`
    ${inputStyle}
    margin-bottom: 30px;

    @media (max-width: 900px) {
        width: 70%;
    }
`

const SectionTextarea = styled.textarea`
    ${inputStyle}
    height: 300px;

    @media (max-width: 900px) {
        width: 70%;
    }
`

const SectionTitle = styled.h3`
    color: #fff;
    font-size: 30px;
    margin: 0;
    line-height: 1.2;
    text-align: center;
`

const SectionText = styled.p`
    color: #fff;
    text-align: center;
    margin: 3px 2px;
    @media (max-width: 900px) {
        margin: 10px 2px;
    }
`

const Button = styled.button`
    padding: 8px 20px;
    font-size: 20px;
    background: #e91e63;
    color: #fff;
    border: none;
    width: 300px;
    margin: 30px 10px 10px 0;
    font-weight: 700;
    border-radius: 2px;
    outline: none;
    cursor: pointer;

    @media (max-width: 900px) {
        width: 200px;
    }
`


export const SectionTwo = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave/></WaveTop>
        <SectionFormGroup>
            <SectionContentGroup>
                <SectionTitleGroup>
                    <SectionTitle>{props.title}</SectionTitle>
                    <SectionTitle>{props.titleTwo}</SectionTitle>
                </SectionTitleGroup>
                <SectionTextGroup>
                    <SectionText>{props.text}</SectionText>
                    <SectionText>{props.textTwo}</SectionText>
                    <SectionText>{props.textThree}</SectionText>
                </SectionTextGroup>
            </SectionContentGroup>
            <SectionInputGroup>
                <SectionInput placeholder="Name" />
                <SectionInput placeholder="Email" />
                <SectionTextarea placeholder="Comment" cols="40" rows="10" />
                <Button>Send</Button>
            </SectionInputGroup>
        </SectionFormGroup>
    </SectionGroup>
)