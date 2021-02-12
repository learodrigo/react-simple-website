import styled from 'styled-components'

export const Wrapper = styled.div`
    .container__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
        margin: 0 0 220px 0;
        padding: 0;
    }

    .list__item {
        margin-right: 10px;
        width: calc(100% / 3.5);

        &:nth-child(3n) {
            margin-right: 0;
        }

        &:nth-child(-n+3) {
            margin-bottom: 124px;
        }

        h3,
        p {
            font-size: 16px;
        }
    }

    .item__image {
        height: 200px;
        margin: 0 auto;
        width: 200px;
    }

    @media(max-width: 768px) {
        .container__list {
            margin-bottom: 40px;
            padding-top: 80px;
        }

        .list__item {
            margin-bottom: 60px !important;
            margin-right: 0 !important;
            width: 100%;

            h3, p {
                font-size: 14px;
            }
        }
    }
`
