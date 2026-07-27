import{a as e,n as t,o as n,r,t as i}from"./index-DgxiNDzc.js";var a=n(e(),1),o=t`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`,s={Wrapper:r.div`
        width: 100%;
        min-height: 100%;
        background-color: transparent;
        color: #ffffff;
    `,Container:r.div`
        width: min(100% - 40px, 1200px);
        margin: 0 auto;

        @media (max-width: 600px) {
            width: min(100% - 28px, 1200px);
        }
    `,Hero:r.section`
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
    `,Eyebrow:r.p`
        margin: 0 0 18px;
        color: rgba(255, 255, 255, 0.58);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
    `,Title:r.h1`
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
    `,Description:r.p`
        max-width: 680px;
        margin: 28px 0 0;
        color: rgba(255, 255, 255, 0.68);
        font-size: 17px;
        line-height: 1.75;
    `,AppsSection:r.section`
        min-height: 520px;
        padding: 56px 0 100px;
        background: rgba(0, 0, 0, 0.08);
    `,Tabs:r.div`
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
    `,TabButton:r.button`
        flex-shrink: 0;
        padding: 12px 18px;
        border: 1px solid
            ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.12)`};
        border-radius: 999px;
        background-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.055)`};
        color: ${({$active:e})=>e?`#080808`:`rgba(255, 255, 255, 0.72)`};
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

        &:hover {
            border-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.3)`};
            background-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.09)`};
            color: ${({$active:e})=>e?`#080808`:`#ffffff`};
        }

        &:active {
            transform: scale(0.97);
        }
    `,CategoryDescription:r.p`
        max-width: 680px;
        margin: 0 0 36px;
        color: rgba(255, 255, 255, 0.52);
        font-size: 14px;
        line-height: 1.7;
    `,Grid:r.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;

        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,AppCard:r.article`
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
            .appActions {
                grid-template-columns: 1fr;
            }
        }
    `,AppIcon:r.div`
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
    `,AppContent:r.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
    `,AppName:r.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.4px;
    `,Status:r.span`
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
    `,AppDescription:r.p`
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 1.75;
    `,LoadingState:r.div`
        min-height: 320px;
        display: grid;
        place-items: center;
    `,Spinner:r.div`
        width: 46px;
        height: 46px;
        border: 4px solid rgba(255, 255, 255, 0.12);
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: ${o} 0.75s linear infinite;
    `,MessageState:r.div`
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
    `,MessageTitle:r.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
    `,MessageText:r.p`
        max-width: 480px;
        margin: 12px 0 0;
        color: rgba(255, 255, 255, 0.58);
        font-size: 14px;
        line-height: 1.7;
    `},c=i(),l=()=>{let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)([]),[i,o]=(0,a.useState)(``),[l,u]=(0,a.useState)(!0),[d,f]=(0,a.useState)(``);(0,a.useEffect)(()=>{let e=new AbortController;return(async()=>{try{u(!0),f(``);let n=await fetch(`/mobile-apps-distribution-page/data/apps.json`,{signal:e.signal});if(!n.ok)throw Error(`Unable to load mobile apps.`);let i=await n.json(),a=Array.isArray(i.categories)?i.categories:[],s=Array.isArray(i.apps)?i.apps:[];t(a),r(s),a.length>0&&o(a[0].id)}catch(e){e.name!==`AbortError`&&f(e.message)}finally{e.signal.aborted||u(!1)}})(),()=>{e.abort()}},[]);let p=(0,a.useMemo)(()=>n.filter(e=>e.category===i),[i,n]),m=e.find(e=>e.id===i);return(0,c.jsxs)(s.Wrapper,{children:[(0,c.jsx)(s.Hero,{children:(0,c.jsxs)(s.Container,{children:[(0,c.jsx)(s.Eyebrow,{children:`a2rp Mobile Apps`}),(0,c.jsx)(s.Title,{children:`Mobile apps built for everyday use`}),(0,c.jsx)(s.Description,{children:`Explore free applications, premium tools and experimental mobile projects created by Ashish Ranjan.`})]})}),(0,c.jsx)(s.AppsSection,{children:(0,c.jsxs)(s.Container,{children:[l&&(0,c.jsx)(s.LoadingState,{children:(0,c.jsx)(s.Spinner,{})}),!l&&d&&(0,c.jsxs)(s.MessageState,{children:[(0,c.jsx)(s.MessageTitle,{children:`Apps could not be loaded`}),(0,c.jsx)(s.MessageText,{children:d})]}),!l&&!d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Tabs,{role:`tablist`,"aria-label":`Mobile app categories`,children:e.map(e=>(0,c.jsx)(s.TabButton,{type:`button`,role:`tab`,"aria-selected":i===e.id,$active:i===e.id,onClick:()=>o(e.id),children:e.label},e.id))}),m&&(0,c.jsx)(s.CategoryDescription,{children:m.description}),p.length>0?(0,c.jsx)(s.Grid,{children:p.map(e=>{let t=e.icon?`/mobile-apps-distribution-page/${e.icon}`:``;return(0,c.jsxs)(s.AppCard,{children:[(0,c.jsxs)(`div`,{className:`cardTop`,children:[(0,c.jsx)(s.AppIcon,{children:t?(0,c.jsx)(`img`,{src:t,alt:`${e.name} icon`}):`AR`}),e.status&&(0,c.jsx)(s.Status,{children:e.status})]}),(0,c.jsxs)(s.AppContent,{children:[(0,c.jsx)(s.AppName,{children:e.name}),(0,c.jsx)(s.AppDescription,{children:e.description}),(0,c.jsxs)(`div`,{className:`appMeta`,children:[e.version&&(0,c.jsxs)(`span`,{children:[`Version`,` `,e.version]}),e.platform&&(0,c.jsx)(`span`,{children:e.platform})]}),(0,c.jsxs)(`div`,{className:`appActions`,children:[e.apkUrl&&(0,c.jsx)(`a`,{className:`downloadButton`,href:e.apkUrl,target:`_blank`,rel:`noreferrer`,download:!0,children:`Download APK`}),e.releaseUrl&&(0,c.jsx)(`a`,{className:`releaseButton`,href:e.releaseUrl,target:`_blank`,rel:`noreferrer`,children:`Release Notes`})]})]})]},e.id)})}):(0,c.jsxs)(s.MessageState,{children:[(0,c.jsx)(s.MessageTitle,{children:`No apps available yet`}),(0,c.jsx)(s.MessageText,{children:`Applications in this category will be added soon.`})]})]})]})})]})};export{l as default};