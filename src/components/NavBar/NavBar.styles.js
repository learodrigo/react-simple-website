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
`
