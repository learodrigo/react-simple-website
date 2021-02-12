import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 130px 0 200px;

    .section__text {
        width: calc((100% / 12) * 7);

        p {
            font-size: 28px;
        }
    }

    .section__links {
        color: black;
        list-style-type: '→  ';
        padding: 0;
        margin: 0;
        width: calc((100% / 12) * 3);

        a {
            color: black;
            font-size: 16px;
        }
    }

`
