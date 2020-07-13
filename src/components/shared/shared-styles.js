import {css} from 'styled-components'

export const inputStyle = css`
    font-family: 'Open Sans',sans-serif;
    background-color: #fff;
    font-size: 16px;
    line-height: 27px;
    padding: 8px 20px;
    display: inline-block;
    min-height: 40px;
    width: 90%;
    vertical-align: middle;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 3px;
`

export const gridSingleColumn = css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`