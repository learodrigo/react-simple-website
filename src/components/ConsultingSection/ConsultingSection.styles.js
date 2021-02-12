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

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 80px 0 100px;

        .section__text {
            margin-bottom: 60px;
            width: 100%;

            p {
                font-size: 18px;
            }
        }

        .section__links {
            margin-left: 5%;
            width: 100%;

            a {
                font-size: 14px;
            }
        }
    }

`
