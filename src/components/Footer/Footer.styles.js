import styled from 'styled-components'

export const Wrapper = styled.footer`
    background-color: #282828;
    display: block;
    padding: 50px 0 112px;

    .container {
        display: flex;
    }

    .container > div {
        margin-right: 26px;
        width: calc(33% - 26px);
    }
    .container > div:last-child {
        margin-right: 0;
    }

    p {
        color: white;
        display: block;
    }

    .footer__link {
        color: white;
        display: block;
    }
`
