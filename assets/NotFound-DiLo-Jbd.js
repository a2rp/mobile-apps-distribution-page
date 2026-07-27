import{a as e,o as t,r as n}from"./index-Bl-YtfvZ.js";var r={Wrapper:e.section`
        width: 100%;
        min-height: calc(100vh - 157px);
        display: grid;
        place-items: center;
        padding: 80px 20px;
        background-color: transparent;
    `,Content:e.div`
        width: min(100%, 620px);
        padding: 48px 30px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        background-color: rgba(8, 8, 10, 0.58);
        backdrop-filter: blur(18px);
        box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.24),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        text-align: center;

        @media (max-width: 600px) {
            padding: 40px 20px;
        }
    `,Code:e.p`
        margin: 0 0 20px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 4px;
    `,Title:e.h1`
        margin: 0;
        color: #ffffff;
        font-size: clamp(2.6rem, 7vw, 5rem);
        font-weight: 800;
        line-height: 1;
        letter-spacing: -3px;

        @media (max-width: 600px) {
            letter-spacing: -2px;
        }
    `,Description:e.p`
        max-width: 520px;
        margin: 24px auto 0;
        color: rgba(255, 255, 255, 0.62);
        font-size: 16px;
        line-height: 1.7;
    `,HomeButton:e.a`
        min-height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-top: 34px;
        padding: 0 22px;
        border: 1px solid #ffffff;
        border-radius: 12px;
        background-color: #ffffff;
        color: #090909;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
        transition:
            transform 180ms ease,
            opacity 180ms ease;

        &:hover {
            transform: translateY(-2px);
            opacity: 0.88;
        }

        &:active {
            transform: scale(0.97);
        }
    `},i=n(),a=()=>(0,i.jsx)(r.Wrapper,{children:(0,i.jsxs)(r.Content,{children:[(0,i.jsx)(r.Code,{children:`404`}),(0,i.jsx)(r.Title,{children:`Page not found`}),(0,i.jsx)(r.Description,{children:`The page you are looking for does not exist or has been moved.`}),(0,i.jsx)(r.HomeButton,{as:t,to:`/`,children:`Return Home`})]})});export{a as default};