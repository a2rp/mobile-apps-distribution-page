import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #050507;
        color: #ffffff;

        .bgWrapper {
            position: fixed;
            inset: 0;
            z-index: 0;
            pointer-events: none;
        }

        .fgWrapper {
            position: relative;
            z-index: 1;
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
    `,

    Main: styled.main`
        width: 100%;
        flex: 1;
    `,
};
