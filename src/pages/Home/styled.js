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
        min-height: 100%;
        background-color: transparent;
        color: #ffffff;
    `,

    Container: styled.div`
        width: min(100% - 40px, 1200px);
        margin: 0 auto;

        .searchArea {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 26px;
        }

        @media (max-width: 600px) {
            width: min(100% - 28px, 1200px);

            .searchArea {
                justify-content: stretch;
                margin-bottom: 22px;
            }
        }
    `,

    Hero: styled.section`
        padding: 110px 0 80px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.08) 0%,
            rgba(0, 0, 0, 0.22) 100%
        );

        @media (max-width: 700px) {
            padding: 80px 0 60px;
        }
    `,

    Eyebrow: styled.p`
        margin: 0 0 18px;
        color: rgba(255, 255, 255, 0.58);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
    `,

    Title: styled.h1`
        max-width: 820px;
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.7rem, 7vw, 5.6rem);
        font-weight: 800;
        line-height: 0.98;
        letter-spacing: -4px;
        text-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);

        @media (max-width: 700px) {
            letter-spacing: -2px;
        }
    `,

    Description: styled.p`
        max-width: 680px;
        margin: 28px 0 0;
        color: rgba(255, 255, 255, 0.68);
        font-size: 17px;
        line-height: 1.75;
    `,

    AppsSection: styled.section`
        min-height: 520px;
        padding: 56px 0 100px;
        background: rgba(0, 0, 0, 0.08);
    `,

    Tabs: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;
        padding-bottom: 4px;
        overflow-x: auto;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `,

    TabButton: styled.button`
        flex-shrink: 0;
        min-height: 44px;
        padding: 7px 9px 7px 17px;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid
            ${({ $active }) =>
                $active ? "#ffffff" : "rgba(255, 255, 255, 0.12)"};
        border-radius: 999px;
        background-color: ${({ $active }) =>
            $active ? "#ffffff" : "rgba(255, 255, 255, 0.055)"};
        color: ${({ $active }) =>
            $active ? "#080808" : "rgba(255, 255, 255, 0.72)"};
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        font-family: inherit;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        transition:
            background-color 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            transform 180ms ease;

        .tabCount {
            min-width: 28px;
            height: 28px;
            padding: 0 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid
                ${({ $active }) =>
                    $active
                        ? "rgba(0, 0, 0, 0.12)"
                        : "rgba(255, 255, 255, 0.1)"};
            border-radius: 999px;
            background-color: ${({ $active }) =>
                $active ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.06)"};
            color: ${({ $active }) =>
                $active ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.58)"};
            font-size: 11px;
            font-weight: 800;
        }

        &:hover {
            border-color: ${({ $active }) =>
                $active ? "#ffffff" : "rgba(255, 255, 255, 0.3)"};
            background-color: ${({ $active }) =>
                $active ? "#ffffff" : "rgba(255, 255, 255, 0.09)"};
            color: ${({ $active }) => ($active ? "#080808" : "#ffffff")};
        }

        &:active {
            transform: scale(0.97);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,

    CategoryDescription: styled.p`
        max-width: 680px;
        margin: 0 0 36px;
        color: rgba(255, 255, 255, 0.52);
        font-size: 14px;
        line-height: 1.7;
    `,

    Grid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;

        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    AppCard: styled.article`
        min-height: 340px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 34px;
        padding: 24px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 22px;
        background: rgba(8, 8, 10, 0.62);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        transition:
            transform 200ms ease,
            border-color 200ms ease,
            background-color 200ms ease,
            box-shadow 200ms ease;

        .cardTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
        }

        .cardTopActions {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 8px;
        }

        .appMeta {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .appMeta span {
            min-height: 30px;
            padding: 0 10px;
            display: inline-flex;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 999px;
            background-color: rgba(255, 255, 255, 0.04);
            color: rgba(255, 255, 255, 0.58);
            font-size: 11px;
            font-weight: 700;
        }

        .appActions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 6px;
        }

        .appActions a {
            min-height: 46px;
            padding: 0 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            font-size: 13px;
            font-weight: 700;
            text-align: center;
            text-decoration: none;
            transition:
                transform 180ms ease,
                border-color 180ms ease,
                background-color 180ms ease,
                color 180ms ease,
                opacity 180ms ease;
        }

        .downloadButton {
            border: 1px solid #ffffff;
            background-color: #ffffff;
            color: #090909;
        }

        .downloadButton:hover {
            transform: translateY(-2px);
            opacity: 0.88;
        }

        .releaseButton {
            border: 1px solid rgba(255, 255, 255, 0.14);
            background-color: rgba(255, 255, 255, 0.055);
            color: rgba(255, 255, 255, 0.78);
        }

        .releaseButton:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        .appActions a:active {
            transform: scale(0.97);
        }

        &:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 255, 255, 0.23);
            background: rgba(18, 18, 21, 0.74);
            box-shadow:
                0 24px 56px rgba(0, 0, 0, 0.32),
                inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        @media (max-width: 420px) {
            .cardTop {
                align-items: flex-start;
            }

            .cardTopActions {
                flex-direction: column;
                align-items: flex-end;
            }

            .appActions {
                grid-template-columns: 1fr;
            }
        }
    `,

    AppIcon: styled.div`
        width: 62px;
        height: 62px;
        display: grid;
        place-items: center;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 18px;
        background-color: #ffffff;
        color: #090909;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        font-size: 15px;
        font-weight: 800;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `,

    AppContent: styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
    `,

    AppName: styled.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.4px;
    `,

    Status: styled.span`
        flex-shrink: 0;
        min-height: 30px;
        padding: 0 10px;
        display: inline-flex;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        background-color: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.62);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.6px;
        text-transform: uppercase;
    `,

    AppDescription: styled.p`
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 1.75;
    `,

    LoadingState: styled.div`
        min-height: 320px;
        display: grid;
        place-items: center;
    `,

    Spinner: styled.div`
        width: 46px;
        height: 46px;
        border: 4px solid rgba(255, 255, 255, 0.12);
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${rotate} 0.75s linear infinite;
    `,

    MessageState: styled.div`
        min-height: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 22px;
        background: rgba(8, 8, 10, 0.58);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        text-align: center;
    `,

    MessageTitle: styled.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
    `,

    MessageText: styled.p`
        max-width: 480px;
        margin: 12px 0 0;
        color: rgba(255, 255, 255, 0.58);
        font-size: 14px;
        line-height: 1.7;
    `,
};
