import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    padding: 50px 0px;
    text-align: center;
    width: 100%;

    .divider-text {
        font-size: 16px;
    }

    @media(max-width: 768px) {
        padding: 14px 0;

        .divider-text {
            font-size: 14px;
        }
    }
`
