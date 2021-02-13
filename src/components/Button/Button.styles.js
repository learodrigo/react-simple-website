import styled from 'styled-components'

export const Wrapper = styled.div`
    .btn {
        background-color: #282828;
        border: none;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        outline: none;
        padding: 13px;

        &.squre {
            border-radius: 50%;
            font-size: 24px;
            height: 50px;
            width: 50px;
        }
    }

    @media(max-width: 768px) {
        .btn.square {
            height: 45px;
            width: 45px;
        }
    }
`
