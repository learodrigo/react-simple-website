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
        height: 100%;
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

`
