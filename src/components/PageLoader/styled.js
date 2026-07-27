import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
    `,

    Spinner: styled.div`
        width: 48px;
        height: 48px;
        border: 4px solid rgba(255, 255, 255, 0.12);
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${rotate} 0.75s linear infinite;
    `,
};
