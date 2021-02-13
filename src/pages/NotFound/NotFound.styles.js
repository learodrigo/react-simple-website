import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    padding: 150px 0 150px;
    /* height: 80vh; */

    img {
        width: 300px;
        margin-right: 40px;
    }

    h1 {
        margin-bottom: 30px;
    }

    h3 {
        margin-bottom: 16px;
    }

    a {
        color: black;
        font-weight: bold;
        text-decoration: underline;
    }

    @media(max-width: 768px) {
        flex-direction: column;

        img {
            margin: 0 auto 40px auto;
        }
    }
`
