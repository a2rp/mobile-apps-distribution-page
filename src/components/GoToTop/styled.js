import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1000;

        width: 48px;
        height: 48px;

        display: grid;
        place-items: center;

        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 50%;

        background: rgba(10, 10, 12, 0.78);
        color: #ffffff;

        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);

        box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.38),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);

        opacity: ${({ $visible }) => ($visible ? 1 : 0)};
        visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};

        transform: ${({ $visible }) =>
            $visible
                ? "translateY(0) scale(1)"
                : "translateY(14px) scale(0.9)"};

        pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

        cursor: pointer;

        transition:
            opacity 200ms ease,
            visibility 200ms ease,
            transform 200ms ease,
            border-color 200ms ease,
            background-color 200ms ease;

        svg {
            width: 20px;
            height: 20px;
        }

        &:hover {
            transform: translateY(-4px) scale(1);
            border-color: rgba(255, 255, 255, 0.35);
            background: rgba(28, 28, 32, 0.92);
        }

        &:active {
            transform: translateY(-1px) scale(0.94);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 4px;
        }

        @media (max-width: 600px) {
            right: 16px;
            bottom: 16px;

            width: 44px;
            height: 44px;
        }
    `,
};
