import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 100vh;
    left: 0;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999;

    .navbar__icon {
        position: absolute;
        right: 30px;
        top: 30px;
        transform: rotate(45deg)
    }

    /* Modal yellow */
    .modal__yellow {
        background-color: #f9f8ea;
        display: block;
        height: auto;
        padding-bottom: 124px;
    }

    .modal__info {
        display: flex;
        justify-content: space-around;
        padding-top: 80px;
    }

    .info__column {
        width: calc(100% / 12 * 7);
    }

    .information__text {
        font-size: 28px;
        margin-bottom: 80px;

        a {
            color: black;
            text-decoration: underline;
        }
    }

    .info__link {
        margin-left: calc(100% / 12 * 2);
        width: calc(100% / 12 * 3);

        ul {
            list-style-type: '→  ';

            li a {
                color: black;
            }
        }
    }

    /* Modal dark */
    .modal__dark {
        background-color: #3c3c3c;
        color: white;
    }

    .modal__column {
        display: flex;
        padding: 80px 0 150px;
    }

    .modal__form {
        width: calc(100% / 12 * 7);

        input,
        textarea {
            background-color: #4a4a4a;
            border: 0;
            color: white;
            font-size: 28px;
            margin-bottom: 55px;
            outline: none;
            width: 100%;
        }

        input {
            padding: 23px 30px 21px
        }

        textarea {
            height: 396px;
            padding: 36px 30px;
            resize: none;
        }
    }

    .form__label {
        display: block;
        font-size: 16px;
        margin-bottom: 16px;
    }

    .form__double {
        display: flex;
        justify-content: space-between;

        div {
            width: calc(50% - 10px)
        }
    }

    /* Buttons */
    .modal__buttons {
        display: block;
        position: relative;

        button {
            background-color: #ff5000;
            border: 0;
            color: white;
            font-size: 16px;
            margin-right: 16px;
            outline: none;
            padding: 13px 42px;
            position: relative;

            &:hover {
                background-color: #282828;
                cursor: pointer;
            }
        }

        .submit__button {
            right: 0;
            position: absolute;
        }
    }

    @media(max-width: 768px) {
        .modal__yellow {
            height: auto;
            padding: 10px 0 100px;
        }

        .navbar__icon {
            height: 45px !important;
            padding: 10px;
            right: 15px;
            top: 15px;
            width: 45px !important;
        }

        .container .modal__info {
            padding-top: 72px;
        }

        .information__text {
            margin-bottom: 60px;
        }

        .modal__info {
            flex-direction: column;
        }

        .info__column {
            font-size: 18px;
            width: 100%;
        }

        .modal__buttons {
            margin-bottom: 60px;

            button {
                margin-right: 0;
                margin-bottom: 15px;
                width: 100%
            }
        }

        .info__link {
            margin-left: 24px;
            width: 90%;
        }

        .modal__dark {
            padding: 10px 0 100px;

            .modal__column {
                flex-direction: column;
                padding: 70px 0 0;
            }
        }

        .modal__form {
            width: 100%;

            input,
            textarea {
                margin-bottom: 24px;
            }

            .modal__buttons {
                margin: 55px 0 175px;
            }
        }

        .form__double {
            flex-direction: column;

            div {
                width: 100%;
            }
        }
    }

`
