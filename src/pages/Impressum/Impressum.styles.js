import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 224px 0;

    h2 {
        display: block;
        font-size: 16px;
        margin-bottom: 72px;
        text-align: left;
    }

    div {
        margin-right: 98px;
        width: 50%;

        &:last-child {
            margin: 0;
        }
    }

    h3 {
        font-size: 16px;
        margin-bottom: 24px;
    }

    a {
        color: black;
    }


    p {
        display: block;
        margin-bottom: 44px;

        &.impressum__intro {
            margin-bottom: 68px;
        }
    }
`
