import styled from 'styled-components'

export const LandingSection = styled.div`
    position: relative;
    background: url('https://www.ciit.edu.ph/wp-content/uploads/2018/09/Software-Engineering-Career-2-1024x683.jpg') no-repeat center center/cover;
    height: 100vh;
   
    h1 {
        font-size: 4rem;
        line-height: 1.2;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 700px) {
        h1 {
            margin-top: 8rem
        }
        p {
            font-size: 1rem;
        }
    }
`
export const DarkOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const LandingInner = styled.div`
    color: #fff;
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`