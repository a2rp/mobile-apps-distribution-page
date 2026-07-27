import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        inset: 0;
        z-index: 2000;

        display: grid;
        place-items: center;

        padding: 24px;

        background-color: rgba(0, 0, 0, 0.82);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        .modal {
            width: min(100%, 520px);
            max-height: calc(100vh - 48px);

            display: flex;
            flex-direction: column;

            padding: 20px;

            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 24px;

            background: rgba(12, 12, 14, 0.97);

            box-shadow:
                0 32px 90px rgba(0, 0, 0, 0.65),
                inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .modalHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;

            margin-bottom: 18px;
        }

        .modalHeader span {
            display: block;

            color: rgba(255, 255, 255, 0.44);

            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .modalHeader h2 {
            margin: 5px 0 0;

            color: #ffffff;

            font-size: 20px;
            line-height: 1.3;
        }

        .modalHeader button {
            width: 42px;
            height: 42px;
            flex-shrink: 0;

            display: grid;
            place-items: center;

            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;

            background-color: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.7);

            cursor: pointer;

            transition:
                transform 180ms ease,
                border-color 180ms ease,
                background-color 180ms ease,
                color 180ms ease;
        }

        .modalHeader button svg {
            width: 19px;
            height: 19px;
        }

        .modalHeader button:hover {
            transform: rotate(6deg);

            border-color: rgba(255, 255, 255, 0.3);

            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        .modalHeader button:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        .imageWrapper {
            min-height: 0;

            display: flex;
            justify-content: center;

            overflow: hidden;

            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 18px;

            background-color: #050505;
        }

        .imageWrapper img {
            display: block;

            width: auto;
            max-width: 100%;
            max-height: calc(100vh - 170px);

            object-fit: contain;
        }

        @media (max-width: 600px) {
            padding: 12px;

            .modal {
                max-height: calc(100vh - 24px);
                padding: 16px;
                border-radius: 20px;
            }

            .imageWrapper img {
                max-height: calc(100vh - 145px);
            }
        }
    `,
};
