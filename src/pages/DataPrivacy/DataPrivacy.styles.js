import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 224px 0;

    > div {
        margin-right: 98px;
        width: 50%;
    }

    > div:last-child {
        margin: 0;
    }

    p {
        display: block;
        margin-bottom: 44px;
    }

    h2 {
        display: block;
        font-size: 16px;
        margin-bottom: 24px;
        text-align: left;
    }

    @media(max-width: 768px) {
        flex-direction: column;
        margin: 130px 0 60px;
        font-size: 14px;

        h2 {
            font-size: 14px;
            margin-bottom: 60px;
        }

        h3 {
            font-size: 14px;
            margin-bottom: 14px
        }

        .impressum__intro {
            margin-bottom: 60px !important;
        }

        div {
            width: 100%;
        }
    }
`
