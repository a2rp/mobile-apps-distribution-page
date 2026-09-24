import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: min(1180px, calc(100% - 40px));
        margin: auto auto 0;
        padding: 44px 0 20px;
        color: #b8b8b8;
        .footerLinks { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; }
        .footerLinks a { width: 40px; height: 40px; display: grid; place-items: center; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 11px; background-color: rgba(255, 255, 255, 0.05); color: #aaaaaa; transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
        .footerLinks a:hover { border-color: #ffffff; color: #ffffff; box-shadow: 0 0 16px rgba(255, 255, 255, 0.12); }
        .footerBottom { width: 100%; margin-top: 28px; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; gap: 5px; flex-wrap: wrap; text-align: center; color: #7f7f84; font-size: 13px; line-height: 1.8; }
        .footerBottom a { color: #d8d8dc; font-weight: 600; text-decoration: none; transition: color 180ms ease, text-shadow 180ms ease; }
        .footerBottom a:hover { color: #ffffff; text-shadow: 0 0 12px rgba(255, 255, 255, 0.3); }
        @media (max-width: 700px) { width: min(100% - 28px, 1180px); }
    `,
};