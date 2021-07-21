import styled from 'styled-components'
import theme from '../../styles/theme'

export const Main = styled.div`
    font: 400 16px Roboto, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    line-height: 1.6;

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`

export const Container = styled.div`
    max-width: 1100px;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;

    h1 { 
        font-size: 3rem;
        line-height: 1.2;
        margin-bottom: 1rem;
        color: ${theme.colors.primaryColor}
    }

    small {
        display: block;
        margin-top: 0.3rem;
        color: #888;
    }

    @media (max-width: 700px) {
        margin-top: 8rem;

        h1 { 
            font-size: 2rem
        }
    }
`

export const Lead = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 700px) {
        font-size: 1rem;
    }
`

export const Form = styled.form`
    margin: 1.2rem 0;
    color: black;

    small {
        display: block;
        margin-top: 0.3rem;
        color: #888;
    }

    input[type='text'],
    input[type='email'],
    input[type='password'],
    input[type='date'],
    select,
    textarea {
      display: block;
      width: 100%;
      padding: 0.4rem;
      font-size: 1.2rem;
      border: 1px solid #ccc;
      color: black;
    }

    input[type='submit'],
    button {
      font: inherit;
    }
`

export const FormSocialInput = styled.form`
    margin: 1.2rem 0;
    color: black;
    padding: 0.5rem;
    width: 65rem;
    display: flex;

    small {
        display: block;
        margin-top: 0.3rem;
        color: #888;
    }

    input[type='text'],
    input[type='email'],
    input[type='password'],
    input[type='date'],
    select,
    textarea {
      display: block;
      width: 100%;
      padding: 0.4rem;
      font-size: 1.2rem;
      border: 1px solid #ccc;
      color: black;
    }

    input[type='submit'],
    button {
      font: inherit;
    }
`

export const My2 = styled.div`
    margin: 2rem 0;
`
export const Button = styled.button`
    display: inline-block;
    background: ${theme.colors.lightColor};
    color: #333;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
`

