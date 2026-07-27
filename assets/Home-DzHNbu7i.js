import{a as e,i as t,l as n,n as r,o as i,r as a,s as o,t as s,u as c}from"./index-B9s47Trl.js";var l=c(n(),1),u={Wrapper:o.div`
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
    `},d=e(),f=({value:e,onChange:n})=>(0,d.jsxs)(u.Wrapper,{children:[(0,d.jsx)(r,{className:`searchIcon`,"aria-hidden":`true`}),(0,d.jsx)(`input`,{type:`search`,value:e,onChange:e=>n(e.target.value),placeholder:`Search mobile apps...`,"aria-label":`Search mobile apps`}),e&&(0,d.jsx)(`button`,{type:`button`,onClick:()=>{n(``)},"aria-label":`Clear search`,title:`Clear search`,children:(0,d.jsx)(t,{"aria-hidden":`true`})})]}),p={Wrapper:o.button`
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
    `},m=({appName:e,shareUrl:t})=>{let[n,r]=(0,l.useState)(!1),i=(0,l.useRef)(null);(0,l.useEffect)(()=>()=>{window.clearTimeout(i.current)},[]);let o=()=>{r(!0),window.clearTimeout(i.current),i.current=window.setTimeout(()=>{r(!1)},2e3)},c=async()=>{await navigator.clipboard.writeText(t),o()};return(0,d.jsx)(p.Wrapper,{type:`button`,onClick:async()=>{if(t)try{if(navigator.share){await navigator.share({title:e,text:`Download ${e} for Android.`,url:t});return}await c()}catch(e){if(e.name===`AbortError`)return;try{await c()}catch{r(!1)}}},disabled:!t,"aria-label":`Share ${e}`,title:n?`Link copied`:`Share app`,children:n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{"aria-hidden":`true`}),(0,d.jsx)(`span`,{children:`Copied`})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{"aria-hidden":`true`}),(0,d.jsx)(`span`,{children:`Share`})]})})},h=i`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`,g={Wrapper:o.div`
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
        gap: 20px;

        @media (max-width: 960px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
        }
    `,AppCard:o.article`
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
    `,AppIcon:o.div`
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
    `,AppContent:o.div`
        display: flex;
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
        animation: ${h} 0.75s linear infinite;
    `,MessageState:o.div`
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
    `},_={id:`all`,label:`All Apps`,description:`Browse all available mobile applications.`},v=()=>{let[e,t]=(0,l.useState)([]),[n,r]=(0,l.useState)([]),[i,a]=(0,l.useState)(`all`),[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(!0),[p,h]=(0,l.useState)(``);(0,l.useEffect)(()=>{let e=new AbortController;return(async()=>{try{u(!0),h(``);let n=await fetch(`/mobile-apps-distribution-page/data/apps.json`,{signal:e.signal});if(!n.ok)throw Error(`Unable to load mobile apps.`);let i=await n.json();t(Array.isArray(i.categories)?i.categories:[]),r(Array.isArray(i.apps)?i.apps:[])}catch(e){e.name!==`AbortError`&&h(e.message)}finally{e.signal.aborted||u(!1)}})(),()=>{e.abort()}},[]);let v=(0,l.useMemo)(()=>[_,...e],[e]),y=(0,l.useMemo)(()=>{let e=o.trim().toLowerCase();return e?n.filter(t=>[t.name,t.description,t.packageName,t.platform,t.version,t.status].filter(Boolean).join(` `).toLowerCase().includes(e)):n},[n,o]),b=(0,l.useMemo)(()=>y.reduce((e,t)=>(t.category&&(e[t.category]=(e[t.category]||0)+1),e),{all:y.length}),[y]),x=(0,l.useMemo)(()=>i===`all`?y:y.filter(e=>e.category===i),[i,y]),S=v.find(e=>e.id===i);return(0,d.jsxs)(g.Wrapper,{children:[(0,d.jsx)(g.Hero,{children:(0,d.jsxs)(g.Container,{children:[(0,d.jsx)(g.Eyebrow,{children:`a2rp Mobile Apps`}),(0,d.jsx)(g.Title,{children:`Mobile apps built for everyday use`}),(0,d.jsx)(g.Description,{children:`Explore free applications, premium tools and experimental mobile projects created by Ashish Ranjan.`})]})}),(0,d.jsx)(g.AppsSection,{children:(0,d.jsxs)(g.Container,{children:[c&&(0,d.jsx)(g.LoadingState,{children:(0,d.jsx)(g.Spinner,{})}),!c&&p&&(0,d.jsxs)(g.MessageState,{children:[(0,d.jsx)(g.MessageTitle,{children:`Apps could not be loaded`}),(0,d.jsx)(g.MessageText,{children:p})]}),!c&&!p&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`div`,{className:`searchArea`,children:(0,d.jsx)(f,{value:o,onChange:s})}),(0,d.jsx)(g.Tabs,{role:`tablist`,"aria-label":`Mobile app categories`,children:v.map(e=>(0,d.jsxs)(g.TabButton,{type:`button`,role:`tab`,"aria-selected":i===e.id,$active:i===e.id,onClick:()=>a(e.id),children:[(0,d.jsx)(`span`,{children:e.label}),(0,d.jsx)(`span`,{className:`tabCount`,children:b[e.id]||0})]},e.id))}),S&&(0,d.jsx)(g.CategoryDescription,{children:S.description}),x.length>0?(0,d.jsx)(g.Grid,{children:x.map(e=>{let t=e.icon?`/mobile-apps-distribution-page/${e.icon}`:``,n=e.releaseUrl||e.apkUrl;return(0,d.jsxs)(g.AppCard,{children:[(0,d.jsxs)(`div`,{className:`cardTop`,children:[(0,d.jsx)(g.AppIcon,{children:t?(0,d.jsx)(`img`,{src:t,alt:`${e.name} icon`}):`AR`}),(0,d.jsxs)(`div`,{className:`cardTopActions`,children:[e.status&&(0,d.jsx)(g.Status,{children:e.status}),(0,d.jsx)(m,{appName:e.name,shareUrl:n})]})]}),(0,d.jsxs)(g.AppContent,{children:[(0,d.jsx)(g.AppName,{children:e.name}),(0,d.jsx)(g.AppDescription,{children:e.description}),(0,d.jsxs)(`div`,{className:`appMeta`,children:[e.version&&(0,d.jsxs)(`span`,{children:[`Version`,` `,e.version]}),e.platform&&(0,d.jsx)(`span`,{children:e.platform})]}),(0,d.jsxs)(`div`,{className:`appActions`,children:[e.apkUrl&&(0,d.jsx)(`a`,{className:`downloadButton`,href:e.apkUrl,target:`_blank`,rel:`noreferrer`,download:!0,children:`Download APK`}),e.releaseUrl&&(0,d.jsx)(`a`,{className:`releaseButton`,href:e.releaseUrl,target:`_blank`,rel:`noreferrer`,children:`Release Notes`})]})]})]},e.id)})}):(0,d.jsxs)(g.MessageState,{children:[(0,d.jsx)(g.MessageTitle,{children:o?`No matching apps found`:`No apps available yet`}),(0,d.jsx)(g.MessageText,{children:o?`Try searching with a different app name or keyword.`:`Applications in this category will be added soon.`})]})]})]})})]})};export{v as default};