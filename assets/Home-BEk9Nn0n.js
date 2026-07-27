import{a as e,i as t,l as n,n as r,o as i,r as a,s as o,t as s,u as c}from"./index-D6adoEI8.js";var l=c(n(),1),u={Wrapper:o.div`
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
    `},d=e(),f=({appName:e,imageUrl:n,isOpen:r,onClose:i})=>((0,l.useEffect)(()=>{if(!r)return;let e=document.body.style.overflow,t=e=>{e.key===`Escape`&&i()};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[r,i]),!r||!n?null:(0,d.jsx)(u.Wrapper,{role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&i()},children:(0,d.jsxs)(`div`,{className:`modal`,role:`dialog`,"aria-modal":`true`,"aria-label":`${e} preview`,children:[(0,d.jsxs)(`div`,{className:`modalHeader`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`span`,{children:`App Preview`}),(0,d.jsx)(`h2`,{children:e})]}),(0,d.jsx)(`button`,{type:`button`,onClick:i,"aria-label":`Close preview`,title:`Close preview`,children:(0,d.jsx)(t,{"aria-hidden":`true`})})]}),(0,d.jsx)(`div`,{className:`imageWrapper`,children:(0,d.jsx)(`img`,{src:n,alt:`${e} application preview`})})]})})),p={Wrapper:o.div`
        width: min(100%, 460px);
        min-height: 50px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 15px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 15px;
        background: rgba(8, 8, 10, 0.62);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        transition:
            border-color 180ms ease,
            background-color 180ms ease,
            box-shadow 180ms ease;

        .searchIcon {
            flex-shrink: 0;
            width: 19px;
            height: 19px;
            color: rgba(255, 255, 255, 0.48);
        }

        input {
            width: 100%;
            min-width: 0;
            border: 0;
            outline: 0;
            background: transparent;
            color: #ffffff;
            font-family: inherit;
            font-size: 14px;
        }

        input::placeholder {
            color: rgba(255, 255, 255, 0.38);
        }

        input::-webkit-search-cancel-button {
            display: none;
        }

        button {
            flex-shrink: 0;
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.65);
            cursor: pointer;
            transition:
                background-color 180ms ease,
                border-color 180ms ease,
                color 180ms ease,
                transform 180ms ease;
        }

        button svg {
            width: 17px;
            height: 17px;
        }

        button:hover {
            border-color: rgba(255, 255, 255, 0.28);
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        button:active {
            transform: scale(0.92);
        }

        button:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        &:focus-within {
            border-color: rgba(255, 255, 255, 0.32);
            background: rgba(14, 14, 17, 0.76);
            box-shadow:
                0 18px 42px rgba(0, 0, 0, 0.3),
                0 0 0 3px rgba(255, 255, 255, 0.04);
        }

        @media (max-width: 600px) {
            width: 100%;
        }
    `},m=({value:e,onChange:n})=>(0,d.jsxs)(p.Wrapper,{children:[(0,d.jsx)(r,{className:`searchIcon`,"aria-hidden":`true`}),(0,d.jsx)(`input`,{type:`search`,value:e,onChange:e=>n(e.target.value),placeholder:`Search mobile apps...`,"aria-label":`Search mobile apps`}),e&&(0,d.jsx)(`button`,{type:`button`,onClick:()=>{n(``)},"aria-label":`Clear search`,title:`Clear search`,children:(0,d.jsx)(t,{"aria-hidden":`true`})})]}),h={Wrapper:o.button`
        min-height: 38px;
        padding: 0 13px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 999px;
        background-color: rgba(255, 255, 255, 0.05);
        color: rgba(255, 255, 255, 0.68);
        font-family: inherit;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition:
            transform 180ms ease,
            border-color 180ms ease,
            background-color 180ms ease,
            color 180ms ease;

        svg {
            width: 15px;
            height: 15px;
        }

        &:hover:not(:disabled) {
            transform: translateY(-2px);
            border-color: rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.1);
            color: #ffffff;
        }

        &:active:not(:disabled) {
            transform: scale(0.96);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }

        &:disabled {
            opacity: 0.4;
            cursor: not-allowed;
        }
    `},g=({appName:e,shareUrl:t})=>{let[n,r]=(0,l.useState)(!1),i=(0,l.useRef)(null);(0,l.useEffect)(()=>()=>{window.clearTimeout(i.current)},[]);let o=()=>{r(!0),window.clearTimeout(i.current),i.current=window.setTimeout(()=>{r(!1)},2e3)},c=async()=>{await navigator.clipboard.writeText(t),o()};return(0,d.jsx)(h.Wrapper,{type:`button`,onClick:async()=>{if(t)try{if(navigator.share){await navigator.share({title:e,text:`Download ${e} for Android.`,url:t});return}await c()}catch(e){if(e.name===`AbortError`)return;try{await c()}catch{r(!1)}}},disabled:!t,"aria-label":`Share ${e}`,title:n?`Link copied`:`Share app`,children:n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{"aria-hidden":`true`}),(0,d.jsx)(`span`,{children:`Copied`})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{"aria-hidden":`true`}),(0,d.jsx)(`span`,{children:`Share`})]})})},_=i`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`,v={Wrapper:o.div`
        width: 100%;
        min-height: 100%;
        background-color: transparent;
        color: #ffffff;
    `,Container:o.div`
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
    `,Hero:o.section`
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
    `,Eyebrow:o.p`
        margin: 0 0 18px;
        color: rgba(255, 255, 255, 0.58);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
    `,Title:o.h1`
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
    `,Description:o.p`
        max-width: 680px;
        margin: 28px 0 0;
        color: rgba(255, 255, 255, 0.68);
        font-size: 17px;
        line-height: 1.75;
    `,AppsSection:o.section`
        min-height: 520px;
        padding: 56px 0 100px;
        background: rgba(0, 0, 0, 0.08);
    `,Tabs:o.div`
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
    `,TabButton:o.button`
        flex-shrink: 0;
        min-height: 44px;
        padding: 7px 9px 7px 17px;

        display: inline-flex;
        align-items: center;
        gap: 10px;

        border: 1px solid
            ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.12)`};
        border-radius: 999px;

        background-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.055)`};

        color: ${({$active:e})=>e?`#080808`:`rgba(255, 255, 255, 0.72)`};

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
                ${({$active:e})=>e?`rgba(0, 0, 0, 0.12)`:`rgba(255, 255, 255, 0.1)`};
            border-radius: 999px;

            background-color: ${({$active:e})=>e?`rgba(0, 0, 0, 0.08)`:`rgba(255, 255, 255, 0.06)`};

            color: ${({$active:e})=>e?`rgba(0, 0, 0, 0.7)`:`rgba(255, 255, 255, 0.58)`};

            font-size: 11px;
            font-weight: 800;
        }

        &:hover {
            border-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.3)`};

            background-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.09)`};

            color: ${({$active:e})=>e?`#080808`:`#ffffff`};
        }

        &:active {
            transform: scale(0.97);
        }

        &:focus-visible {
            outline: 2px solid #ffffff;
            outline-offset: 3px;
        }
    `,CategoryDescription:o.p`
        max-width: 680px;
        margin: 0 0 36px;
        color: rgba(255, 255, 255, 0.52);
        font-size: 14px;
        line-height: 1.7;
    `,Grid:o.div`
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
    `,AppCard:o.article`
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
    `,AppIcon:o.div`
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
    `,AppContent:o.div`
        min-width: 0;
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 15px;
    `,AppName:o.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.4px;
    `,Status:o.span`
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
    `,AppDescription:o.p`
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 1.75;
    `,LoadingState:o.div`
        min-height: 320px;
        display: grid;
        place-items: center;
    `,Spinner:o.div`
        width: 46px;
        height: 46px;

        border: 4px solid rgba(255, 255, 255, 0.12);
        border-top-color: #ffffff;
        border-radius: 50%;

        animation: ${_} 0.75s linear infinite;
    `,MessageState:o.div`
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
    `,MessageTitle:o.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
    `,MessageText:o.p`
        max-width: 480px;
        margin: 12px 0 0;
        color: rgba(255, 255, 255, 0.58);
        font-size: 14px;
        line-height: 1.7;
    `},y={id:`all`,label:`All Apps`,description:`Browse all available mobile applications.`},b=()=>{let[e,t]=(0,l.useState)([]),[n,r]=(0,l.useState)([]),[i,a]=(0,l.useState)(`all`),[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(null),[p,h]=(0,l.useState)(!0),[_,b]=(0,l.useState)(``);(0,l.useEffect)(()=>{let e=new AbortController;return(async()=>{try{h(!0),b(``);let n=await fetch(`/mobile-apps-distribution-page/data/apps.json`,{signal:e.signal});if(!n.ok)throw Error(`Unable to load mobile apps.`);let i=await n.json();t(Array.isArray(i.categories)?i.categories:[]),r(Array.isArray(i.apps)?i.apps:[])}catch(e){e.name!==`AbortError`&&b(e.message)}finally{e.signal.aborted||h(!1)}})(),()=>{e.abort()}},[]);let x=(0,l.useMemo)(()=>[y,...e],[e]),S=(0,l.useMemo)(()=>{let e=o.trim().toLowerCase();return e?n.filter(t=>[t.name,t.description,t.packageName,t.platform,t.version,t.status].filter(Boolean).join(` `).toLowerCase().includes(e)):n},[n,o]),C=(0,l.useMemo)(()=>S.reduce((e,t)=>(t.category&&(e[t.category]=(e[t.category]||0)+1),e),{all:S.length}),[S]),w=(0,l.useMemo)(()=>i===`all`?S:S.filter(e=>e.category===i),[i,S]),T=x.find(e=>e.id===i),E=e=>{e.previewImage&&u(e)},D=(0,l.useCallback)(()=>{u(null)},[]),O=c?.previewImage?`/mobile-apps-distribution-page/${c.previewImage}`:``,k=e=>{if(e.pointerType!==`mouse`)return;let t=e.currentTarget,n=t.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,a=r/n.width,o=i/n.height,s=(a-.5)*8,c=(.5-o)*8;t.style.setProperty(`--rotate-x`,`${c.toFixed(2)}deg`),t.style.setProperty(`--rotate-y`,`${s.toFixed(2)}deg`),t.style.setProperty(`--glow-x`,`${a*100}%`),t.style.setProperty(`--glow-y`,`${o*100}%`)},A=e=>{let t=e.currentTarget;t.style.setProperty(`--rotate-x`,`0deg`),t.style.setProperty(`--rotate-y`,`0deg`),t.style.setProperty(`--glow-x`,`50%`),t.style.setProperty(`--glow-y`,`50%`)};return(0,d.jsxs)(v.Wrapper,{children:[(0,d.jsx)(v.Hero,{children:(0,d.jsxs)(v.Container,{children:[(0,d.jsx)(v.Eyebrow,{children:`a2rp Mobile Apps`}),(0,d.jsx)(v.Title,{children:`Mobile apps built for everyday use`}),(0,d.jsx)(v.Description,{children:`Explore free applications, premium tools and experimental mobile projects created by Ashish Ranjan.`})]})}),(0,d.jsx)(v.AppsSection,{children:(0,d.jsxs)(v.Container,{children:[p&&(0,d.jsx)(v.LoadingState,{children:(0,d.jsx)(v.Spinner,{})}),!p&&_&&(0,d.jsxs)(v.MessageState,{children:[(0,d.jsx)(v.MessageTitle,{children:`Apps could not be loaded`}),(0,d.jsx)(v.MessageText,{children:_})]}),!p&&!_&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{className:`searchArea`,children:(0,d.jsx)(m,{value:o,onChange:s})}),(0,d.jsx)(v.Tabs,{role:`tablist`,"aria-label":`Mobile app categories`,children:x.map(e=>(0,d.jsxs)(v.TabButton,{type:`button`,role:`tab`,"aria-selected":i===e.id,$active:i===e.id,onClick:()=>a(e.id),children:[(0,d.jsx)(`span`,{children:e.label}),(0,d.jsx)(`span`,{className:`tabCount`,children:C[e.id]||0})]},e.id))}),T&&(0,d.jsx)(v.CategoryDescription,{children:T.description}),w.length>0?(0,d.jsx)(v.Grid,{children:w.map(e=>{let t=e.icon?`/mobile-apps-distribution-page/${e.icon}`:``,n=e.previewImage?`/mobile-apps-distribution-page/${e.previewImage}`:``,r=e.releaseUrl||e.apkUrl;return(0,d.jsxs)(v.AppCard,{onPointerMove:k,onPointerLeave:A,children:[(0,d.jsxs)(`div`,{className:`cardTop`,children:[(0,d.jsx)(v.AppIcon,{children:t?(0,d.jsx)(`img`,{src:t,alt:`${e.name} icon`}):`AR`}),(0,d.jsxs)(`div`,{className:`cardTopActions`,children:[e.status&&(0,d.jsx)(v.Status,{children:e.status}),(0,d.jsx)(g,{appName:e.name,shareUrl:r})]})]}),n?(0,d.jsxs)(`button`,{className:`previewButton`,type:`button`,onClick:()=>E(e),"aria-label":`Open ${e.name} preview`,children:[(0,d.jsx)(`img`,{src:n,alt:`${e.name} preview`}),(0,d.jsx)(`span`,{children:`View Preview`})]}):(0,d.jsx)(`div`,{className:`previewPlaceholder`,children:`Preview coming soon`}),(0,d.jsxs)(v.AppContent,{children:[(0,d.jsx)(v.AppName,{children:e.name}),(0,d.jsx)(v.AppDescription,{children:e.description}),(0,d.jsxs)(`div`,{className:`appMeta`,children:[e.version&&(0,d.jsxs)(`span`,{children:[`Version`,` `,e.version]}),e.platform&&(0,d.jsx)(`span`,{children:e.platform})]}),(0,d.jsxs)(`div`,{className:`appActions`,children:[e.apkUrl&&(0,d.jsx)(`a`,{className:`downloadButton`,href:e.apkUrl,target:`_blank`,rel:`noreferrer`,download:!0,children:`Download APK`}),e.releaseUrl&&(0,d.jsx)(`a`,{className:`releaseButton`,href:e.releaseUrl,target:`_blank`,rel:`noreferrer`,children:`Release Notes`})]})]})]},e.id)})}):(0,d.jsxs)(v.MessageState,{children:[(0,d.jsx)(v.MessageTitle,{children:o?`No matching apps found`:`No apps available yet`}),(0,d.jsx)(v.MessageText,{children:o?`Try searching with a different app name or keyword.`:`Applications in this category will be added soon.`})]})]})]})}),(0,d.jsx)(f,{appName:c?.name||``,imageUrl:O,isOpen:!!c,onClose:D})]})};export{b as default};