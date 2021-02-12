import styled from 'styled-components'

export const Wrapper = styled.div`
    .modal {
        background-color: #f9f8ea;
        /* height: 100vh; */
        left: 0;
        /* position: fixed; */
        top: 0;
        width: 100%;

        .container {
            padding-top: 50px;

            h2 {
                display: block;
                font-size: 16px;
                margin-bottom: 100px;
                text-align: center;
            }
        }

        .modal__button {
            margin: 0;
            padding: 13px;
            position: absolute;
            right: 30px;
            top: 30px;
        }
    }

    .modal-container .row {
        align-items: center;
        display: flex;
        justify-content: space-around;
    }

    .modal-container .modal__links {
        align-self: flex-start;
    }

    .information__text {
        color: #000;
        display: block;
        margin-bottom: 80px;
        width: calc(100% / 12 * 7);
    }

    .information__buttons > button,
    .form__submit > button {
        align-self: flex-end;
        background-color: #ff5000;
        border: 0;
        color: white;
        cursor: pointer;
        margin-right: 15px;
        outline: none;
        padding: 13px 42px;
    }

    .information__buttons > button:hover,
    .form__submit > button:hover {
        background-color: #282828;
    }

    .modal__button {
        border-radius: 26px;
        height: 50px;
        margin-right: 16px;
        padding: 0 26px;
    }

    .modal__form {
        background-color: #282828;
        display: flex;
        flex-direction: column;
        width: calc(100% / 12 * 7);
    }

    .form__big {
        margin-bottom: 55px;
    }

    .form__label {
        color: white;
        display: block;
        width: 100%;
    }

    #help-textarea {
        color: white;
        background-color: #4a4a4a;
        border: none;
        font-size: 28px;
        height: 396px;
        outline: none;
        padding: 36px 30px;
        resize: none;
        width: 100%;
    }

    .form__double {
        display: flex;
        justify-content: space-between;
        margin-bottom: 55px;
    }

    .form__double > div {
        width: calc(50% - 10px)
    }

    .form__double input,
    .form__simple input {
        color: white;
        background-color: #4a4a4a;
        border: none;
        font-size: 28px;
        outline: none;
        padding: 23px 30px;
        resize: none;
        width: 100%;
    }

    .form__simple {
        margin-bottom: 55px;
    }

    .form__submit {
        display: flex;
        justify-content: flex-end;
    }

    .submit__button {
        margin-right: 0 !important;
    }

`
