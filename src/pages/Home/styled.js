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
            width: 100%;
            margin-bottom: 26px;
        }

        .searchArea > * {
            width: 100%;
            max-width: none;
        }

        @media (max-width: 600px) {
            width: min(100% - 28px, 1200px);

            .searchArea {
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
        flex-wrap: wrap;
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

        font-family: inherit;
        font-size: 14px;
        font-weight: 700;

        cursor: pointer;

        transition:
            transform 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            color 180ms ease;

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
        align-items: stretch;
        gap: 20px;
        perspective: 1400px;

        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,

    Pagination: styled.div`
        width: 100%;
        margin-top: 42px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;

        .pageNumbers {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
        }

        @media (max-width: 520px) {
            .pageNumbers {
                order: 3;
                width: 100%;
            }
        }
    `,

    PaginationButton: styled.button`
        min-width: 44px;
        min-height: 44px;
        padding: 0 15px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid
            ${({ $active }) =>
                $active ? "#ffffff" : "rgba(255, 255, 255, 0.14)"};
        border-radius: 12px;

        background-color: ${({ $active }) =>
            $active ? "#ffffff" : "rgba(255, 255, 255, 0.055)"};

        color: ${({ $active }) =>
            $active ? "#090909" : "rgba(255, 255, 255, 0.76)"};

        font-family: inherit;
        font-size: 13px;
        font-weight: 700;

        cursor: pointer;

        transition:
            transform 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            color 180ms ease,
            opacity 180ms ease;

        &:hover:not(:disabled) {
            transform: translateY(-2px);
            border-color: #ffffff;
            background-color: ${({ $active }) =>
                $active ? "#ffffff" : "rgba(255, 255, 255, 0.1)"};
            color: ${({ $active }) => ($active ? "#090909" : "#ffffff")};
        }

        &:active:not(:disabled) {
            transform: scale(0.97);
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.32;
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,

    PaginationInfo: styled.span`
        width: 100%;
        margin-top: 4px;

        color: rgba(255, 255, 255, 0.46);
        font-size: 12px;
        font-weight: 600;
        text-align: center;
    `,

    AppCard: styled.article`
        --rotate-x: 0deg;
        --rotate-y: 0deg;
        --glow-x: 50%;
        --glow-y: 50%;

        position: relative;
        isolation: isolate;

        width: 100%;
        min-width: 0;
        min-height: 540px;

        display: flex;
        flex-direction: column;
        gap: 22px;

        overflow: hidden;
        padding: 24px;

        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 22px;

        background: rgba(8, 8, 10, 0.62);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);

        transform: perspective(1100px) rotateX(var(--rotate-x))
            rotateY(var(--rotate-y)) translateY(0);

        transform-origin: center center;
        transform-style: preserve-3d;
        backface-visibility: hidden;
        will-change: transform;

        transition:
            transform 130ms ease-out,
            border-color 200ms ease,
            background-color 200ms ease,
            box-shadow 200ms ease;

        &::before {
            content: "";

            position: absolute;
            inset: 0;
            z-index: 0;

            pointer-events: none;

            background: radial-gradient(
                circle at var(--glow-x) var(--glow-y),
                rgba(255, 255, 255, 0.1),
                transparent 38%
            );

            opacity: 0;

            transition: opacity 200ms ease;
        }

        > * {
            position: relative;
            z-index: 1;
        }

        .cardTop {
            width: 100%;
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

        .previewButton,
        .previewPlaceholder {
            width: 100%;
            height: 180px;
            flex-shrink: 0;
            border-radius: 16px;
        }

        .previewButton {
            position: relative;
            isolation: isolate;

            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;
            padding: 0;

            border: 1px solid rgba(255, 255, 255, 0.1);
            background-color: #050505;

            cursor: pointer;
            transform: translateZ(0);
        }

        .previewButton img {
            width: 100%;
            height: 100%;

            display: block;

            border-radius: inherit;

            object-fit: contain;

            transform: scale(1);
            backface-visibility: hidden;

            transition:
                transform 220ms ease,
                opacity 220ms ease;
        }

        .previewButton span {
            position: absolute;
            right: 10px;
            bottom: 10px;
            z-index: 2;

            min-height: 28px;
            padding: 0 10px;

            display: inline-flex;
            align-items: center;
            justify-content: center;

            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 999px;

            background-color: rgba(0, 0, 0, 0.76);
            color: #ffffff;

            font-size: 10px;
            font-weight: 700;

            pointer-events: none;
        }

        .previewButton:hover img {
            transform: scale(1.025);
            opacity: 0.9;
        }

        .previewButton:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        .previewPlaceholder {
            display: grid;
            place-items: center;

            border: 1px dashed rgba(255, 255, 255, 0.12);

            background-color: rgba(255, 255, 255, 0.025);
            color: rgba(255, 255, 255, 0.34);

            font-size: 12px;
            font-weight: 700;
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
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            margin-top: auto;
        }

        .appActions a {
            min-width: 0;
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

        .appActions a:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        @media (hover: hover) and (pointer: fine) {
            &:hover {
                border-color: rgba(255, 255, 255, 0.22);

                background: rgba(14, 14, 17, 0.76);

                box-shadow:
                    0 28px 65px rgba(0, 0, 0, 0.4),
                    inset 0 1px 0 rgba(255, 255, 255, 0.07);

                transform: perspective(1100px) rotateX(var(--rotate-x))
                    rotateY(var(--rotate-y)) translateY(-4px);
            }

            &:hover::before {
                opacity: 1;
            }
        }

        @media (max-width: 420px) {
            min-height: auto;
            padding: 20px;

            .cardTopActions {
                flex-direction: column;
                align-items: flex-end;
            }

            .previewButton,
            .previewPlaceholder {
                height: 190px;
            }

            .appActions {
                grid-template-columns: 1fr;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            transform: none;
            transition: none;

            &:hover {
                transform: none;
            }

            .previewButton img {
                transition: none;
            }
        }
    `,

    AppIcon: styled.div`
        width: 62px;
        height: 62px;
        flex-shrink: 0;

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
            display: block;
            object-fit: cover;
        }
    `,

    AppContent: styled.div`
        min-width: 0;
        display: flex;
        flex: 1;
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
        padding: 40px 20px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 22px;

        background: rgba(8, 8, 10, 0.58);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

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
