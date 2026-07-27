import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: min(100%, 460px);
        min-height: 50px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 15px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 15px;
        background: rgba(8, 8, 10, 0.62);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        transition:
            border-color 180ms ease,
            background-color 180ms ease,
            box-shadow 180ms ease;

        .searchIcon {
            flex-shrink: 0;
            width: 19px;
            height: 19px;
            color: rgba(255, 255, 255, 0.48);
        }

        input {
            width: 100%;
            min-width: 0;
            border: 0;
            outline: 0;
            background: transparent;
            color: #ffffff;
            font-family: inherit;
            font-size: 14px;
        }

        input::placeholder {
            color: rgba(255, 255, 255, 0.38);
        }

        input::-webkit-search-cancel-button {
            display: none;
        }

        button {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.65);
            cursor: pointer;
            transition:
                background-color 180ms ease,
                border-color 180ms ease,
                color 180ms ease,
                transform 180ms ease;
        }

        button svg {
            width: 17px;
            height: 17px;
        }

        button:hover {
            border-color: rgba(255, 255, 255, 0.28);
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        button:active {
            transform: scale(0.92);
        }

        button:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        &:focus-within {
            border-color: rgba(255, 255, 255, 0.32);
            background: rgba(14, 14, 17, 0.76);
            box-shadow:
                0 18px 42px rgba(0, 0, 0, 0.3),
                0 0 0 3px rgba(255, 255, 255, 0.04);
        }

        @media (max-width: 600px) {
            width: 100%;
        }
    `,
};
