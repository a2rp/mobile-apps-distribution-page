import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        min-height: 38px;
        padding: 0 13px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        background-color: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.68);
        font-family: inherit;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition:
            transform 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            color 180ms ease;

        svg {
            width: 15px;
            height: 15px;
        }

        &:hover:not(:disabled) {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        &:active:not(:disabled) {
            transform: scale(0.96);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
    `,
};
