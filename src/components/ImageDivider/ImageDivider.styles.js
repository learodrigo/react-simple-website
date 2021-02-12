import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #a5d3d4;
    display: block;
    height: 900px;
    position: relative;
    width: 100%;

    &.yellow {
        background-color: #f9f8ea !important;
    }
    &.red {
        background-color: #ff5000 !important;
    }

    .image-divider__image-container {
        display: flex;
        height: 100%;
        width: 100%;

        &.absolute-pos {
            bottom: 0;
            display: block;
            height: auto;
            position: absolute;
        }
    }

    .image-divider__img {
        display: block;
        margin: 0 auto;
        width: calc(100% / 12 * 8);
    }
`
