import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 100;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background-color: rgba(8, 8, 10, 0.9);
        backdrop-filter: blur(16px);
    `,
    Container: styled.div`
        position: relative;
        width: min(100% - 40px, 1200px);
        min-height: 72px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        @media (max-width: 600px) { width: min(100% - 28px, 1200px); }
    `,
    Brand: styled.a`
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 12px;
        color: #ffffff;
        text-decoration: none;
    `,
    BrandMark: styled.span`
        width: 40px;
        height: 40px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        overflow: hidden;
        border-radius: 12px;
        background-color: #000;
        border: 1px solid #333;
        padding: 3px;
        img { width: 100%; height: 100%; object-fit: contain; }
    `,
    BrandText: styled.span`
        display: grid;
        gap: 2px;
        overflow: hidden;
        strong { color: #ffffff; font-size: 17px; font-weight: 700; letter-spacing: -0.3px; }
        small { color: #88888f; font-size: 11px; }
        @media (max-width: 420px) { small { display: none; } }
    `,
    MenuButton: styled.button`
        width: 40px;
        height: 38px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 9px;
        color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
        cursor: pointer;
        transition: border-color 180ms ease, box-shadow 180ms ease;
        &:hover { border-color: #ffffff; box-shadow: 0 0 15px rgba(255, 255, 255, 0.12); }
    `,
    Menu: styled.nav`
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: min(260px, 90vw);
        display: ${({ $open }) => ($open ? "grid" : "none")};
        gap: 4px;
        padding: 8px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 14px;
        background: rgba(12, 12, 15, 0.98);
        box-shadow: 0 18px 42px rgba(0, 0, 0, 0.34);
        a { display: flex; align-items: center; justify-content: space-between; padding: 11px 12px; border: 1px solid transparent; border-radius: 9px; color: #bdbdc3; text-decoration: none; transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease; }
        a:hover, a.active { color: #ffffff; border-color: rgba(255, 255, 255, 0.22); box-shadow: 0 0 14px rgba(255, 255, 255, 0.1); }
    `,
};