import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: sticky;
        top: 0;
        z-index: 100;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background-color: rgba(8, 8, 10, 0.86);
        backdrop-filter: blur(16px);
    `,

    Container: styled.div`
        width: min(100% - 40px, 1200px);
        min-height: 72px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1200px);
        }
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
        width: 38px;
        height: 38px;
        flex-shrink: 0;
        display: grid;
        place-items: center;
        border-radius: 12px;
        background-color: #000;
        color: #fff;
        font-size: 13px;
        font-weight: 800;
        border: 1px solid #333;
        padding: 3px;
    `,

    BrandText: styled.span`
        overflow: hidden;
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        letter-spacing: -0.3px;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,
};
