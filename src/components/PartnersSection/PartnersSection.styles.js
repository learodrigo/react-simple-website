import styled from 'styled-components'

export const Wrapper = styled.div`
    .container__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 100px 0 220px;
    }

    .list__item {
        margin-right: 10px;
        text-align: center;
        width: calc(100% / 3.5);

        &:nth-child(-n+3) {
            margin-bottom: 124px;
        }
        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    .item__image {
        height: 110px;
        margin: 0 auto;
        width: auto;
    }

    @media(max-width: 768px) {
        .container__list {
            padding-bottom: 52px;
        }

        .list__item {
            width: 98px;
            margin-right: 48px !important;
            margin-bottom: 48px !important;

            img {
                width: 100%;
            }
        }
    }
`
