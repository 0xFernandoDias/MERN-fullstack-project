import styled from 'styled-components'
import theme from '../styles/theme'

export const App = styled.div`
    font: 400 16px Roboto, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.6;
    a {
        color: ${theme.colors.primaryColor};
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    img {
        width: 100%;
    }
`
