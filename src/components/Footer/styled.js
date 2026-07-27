import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: min(1180px, calc(100% - 40px));
        margin: auto auto 0;
        padding: 44px 0 20px;
        color: #b8b8b8;

        .footerLinks {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
        }

        .footerLinks a {
            min-height: 40px;
            padding: 0 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 999px;
            background-color: rgba(255, 255, 255, 0.05);
            color: #aaaaaa;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            backdrop-filter: blur(14px);
            transition:
                color 180ms ease,
                border-color 180ms ease,
                background-color 180ms ease,
                transform 180ms ease;
        }

        .footerLinks a svg {
            flex-shrink: 0;
            font-size: 15px;
        }

        .footerLinks a:hover {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.2);
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        .footerBottom {
            width: 100%;
            margin-top: 28px;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            text-align: center;
            color: #7f7f84;
            font-size: 13px;
            line-height: 1.8;
        }

        .footerBottom a {
            margin-left: 5px;
            color: #d8d8dc;
            font-weight: 600;
            text-decoration: none;
            transition: color 180ms ease;
        }

        .footerBottom a:hover {
            color: #ffffff;
            text-decoration: underline;
        }

        @media (max-width: 700px) {
            width: min(100% - 28px, 1180px);
        }

        @media (max-width: 560px) {
            padding-top: 36px;

            .footerLinks {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 10px;
            }

            .footerLinks a {
                width: 100%;
                padding: 0 10px;
            }

            .footerBottom {
                display: block;
            }

            .footerBottom span {
                display: block;
            }

            .footerBottom a {
                display: inline-block;
                margin-left: 0;
            }
        }

        @media (max-width: 380px) {
            .footerLinks {
                grid-template-columns: 1fr;
            }
        }
    `,
};
