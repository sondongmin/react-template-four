import styled from 'styled-components';

export const SectionGroup = styled.div`
    background: url(${props => props.image });
    height: 1000px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

export const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -16px;
    transform: rotate(180deg);
`

export const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -16px;
`