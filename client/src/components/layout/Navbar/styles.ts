import styled from 'styled-components'
import theme from '../../../styles/theme'

export const DarkNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 0;
    border-bottom: solid 1px ${theme.colors.primaryColor};
    opacity: 0.9;

    background: ${theme.colors.darkColor};
    color: #fff;

    ul {
        display: flex;
    }
    a {
        color: #fff;
        padding: 0.45rem;
        margin: 0 0.25rem;
    }
    a:hover {
        color: ${theme.colors.primaryColor};
    }
    .welcome span {
        margin-right: 0.6rem;
    }

    @media (max-width: 700px) {   
        display: block;
        text-align: center;
        ul {
            text-align: center;
            justify-content: center;
        }
        h1 {
            margin-bottom: 1rem;
        }
        .welcome {
            display: none;
        }
    }
`
