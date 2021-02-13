import styled from 'styled-components'

export const Wrapper = styled.nav`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999;

    /* Control buttons */
    .btn {
        transform: rotate(0deg);

        .rotated {
            transition: all 0.25s ease;
            transform: rotate(45deg);
        }
    }

    .navbar__menu {
        display: flex;
        right: 30px;
        position: absolute;
        top: 30px;
        z-index: 9999;

        .modal__button {
            border-radius: 25px;
            height: 50px;
            margin-right: 16px;
            padding: 13px 26px;
        }
    }

    .navbar__container {
        background-color: #ff5000;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
        opacity: 1;
        padding: 60px;
        width: 510px;
    }

    .hidden {
        display: none;
        opacity: 0;
    }

    /* UL */
    .navbar__links {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .navbar__link {
        a.font-sans {
        color: white;
        font-size: 28px;

            &:hover {
                color: #282828 !important;
            }
        }
    }

    .navbar__contact {
        color: #fff;
        font-size: 16px;
    }

    @media(max-width: 768px) {
        width: 100%;

        .navbar__menu {
            right: 15px;
            top: 15px;

            .modal__button {
                font-size: 14px;
                height: 45px;
                margin-right: 10px;
                padding: 10px 25px;
            }

            .navbar__icon {
                height: 45px;
                padding: 10px;
                width: 45px;
            }
        }

        .navbar__container {
            width: 100%;
        }

        a.font-sans {
            font-size: 22px !important;
        }

        .navbar__contact {
            font-size: 14px;
        }
    }
`
