import{a as e,d as t,i as n,l as r,n as i,o as a,r as o,s,t as c,u as l}from"./index-CAdIqdE8.js";var u=t(l(),1),d={Wrapper:s.div`
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
    `},f=e(),p=({appName:e,imageUrl:t,isOpen:r,onClose:i})=>((0,u.useEffect)(()=>{if(!r)return;let e=document.body.style.overflow,t=e=>{e.key===`Escape`&&i()};return document.body.style.overflow=`hidden`,window.addEventListener(`keydown`,t),()=>{document.body.style.overflow=e,window.removeEventListener(`keydown`,t)}},[r,i]),!r||!t?null:(0,f.jsx)(d.Wrapper,{role:`presentation`,onMouseDown:e=>{e.target===e.currentTarget&&i()},children:(0,f.jsxs)(`div`,{className:`modal`,role:`dialog`,"aria-modal":`true`,"aria-label":`${e} preview`,children:[(0,f.jsxs)(`div`,{className:`modalHeader`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`span`,{children:`App Preview`}),(0,f.jsx)(`h2`,{children:e})]}),(0,f.jsx)(`button`,{type:`button`,onClick:i,"aria-label":`Close preview`,title:`Close preview`,children:(0,f.jsx)(n,{"aria-hidden":`true`})})]}),(0,f.jsx)(`div`,{className:`imageWrapper`,children:(0,f.jsx)(`img`,{src:t,alt:`${e} application preview`})})]})})),m={Wrapper:s.div`
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
    `},h=({value:e,onChange:t})=>(0,f.jsxs)(m.Wrapper,{children:[(0,f.jsx)(i,{className:`searchIcon`,"aria-hidden":`true`}),(0,f.jsx)(`input`,{type:`search`,value:e,onChange:e=>t(e.target.value),placeholder:`Search mobile apps...`,"aria-label":`Search mobile apps`}),e&&(0,f.jsx)(`button`,{type:`button`,onClick:()=>{t(``)},"aria-label":`Clear search`,title:`Clear search`,children:(0,f.jsx)(n,{"aria-hidden":`true`})})]}),g={Wrapper:s.button`
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
    `},_=({appName:e,shareUrl:t})=>{let[n,r]=(0,u.useState)(!1),i=(0,u.useRef)(null);(0,u.useEffect)(()=>()=>{window.clearTimeout(i.current)},[]);let a=()=>{r(!0),window.clearTimeout(i.current),i.current=window.setTimeout(()=>{r(!1)},2e3)},s=async()=>{await navigator.clipboard.writeText(t),a()};return(0,f.jsx)(g.Wrapper,{type:`button`,onClick:async()=>{if(t)try{if(navigator.share){await navigator.share({title:e,text:`Download ${e} for Android.`,url:t});return}await s()}catch(e){if(e.name===`AbortError`)return;try{await s()}catch{r(!1)}}},disabled:!t,"aria-label":`Share ${e}`,title:n?`Link copied`:`Share app`,children:n?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c,{"aria-hidden":`true`}),(0,f.jsx)(`span`,{children:`Copied`})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{"aria-hidden":`true`}),(0,f.jsx)(`span`,{children:`Share`})]})})},v=[{id:`essential-everyday-apps`,category:`Essential Everyday Apps`,apps:[{id:`unit-converter`,name:`Unit Converter`,description:`Length, weight, temperature, area, volume, speed aur data conversion.`},{id:`smart-calculator`,name:`Smart Calculator`,description:`Basic, scientific, percentage aur calculation history.`},{id:`percentage-calculator`,name:`Percentage Calculator`,description:`Percentage, increase, decrease, difference aur value calculation.`},{id:`age-calculator`,name:`Age Calculator`,description:`Exact age, next birthday aur total days/months calculation.`},{id:`date-calculator`,name:`Date Calculator`,description:`Do dates ke beech difference aur kisi date mein days add/subtract karna.`},{id:`discount-calculator`,name:`Discount Calculator`,description:`Discount ke baad final price aur total savings.`},{id:`tip-calculator`,name:`Tip Calculator`,description:`Tip calculate karke bill ko multiple people mein split karna.`},{id:`gst-calculator`,name:`GST Calculator`,description:`GST add/remove aur tax breakup calculate karna.`},{id:`emi-calculator`,name:`EMI Calculator`,description:`Loan EMI, total interest aur total payment calculation.`},{id:`fuel-cost-calculator`,name:`Fuel Cost Calculator`,description:`Distance, mileage aur fuel price se trip cost calculate karna.`},{id:`currency-converter`,name:`Currency Converter`,description:`Cached exchange rates ke saath currency conversion.`},{id:`time-zone-converter`,name:`Time Zone Converter`,description:`Different countries aur cities ka time compare karna.`}]},{id:`productivity-apps`,category:`Productivity Apps`,apps:[{id:`notes-app`,name:`Notes App`,description:`Offline notes create, edit, search, pin aur archive karna.`},{id:`todo-list`,name:`To-Do List`,description:`Daily tasks create, complete aur manage karna.`},{id:`daily-planner`,name:`Daily Planner`,description:`Din ke tasks aur schedule ko simple timeline mein manage karna.`},{id:`shopping-list`,name:`Shopping List`,description:`Grocery items, quantity, checked items aur reusable lists.`},{id:`habit-tracker`,name:`Habit Tracker`,description:`Daily habits, streaks aur completion history.`},{id:`pomodoro-focus-timer`,name:`Pomodoro Focus Timer`,description:`Focus sessions, short breaks aur daily statistics.`},{id:`stopwatch-and-timer`,name:`Stopwatch and Timer`,description:`Multiple stopwatches, lap timing aur countdown timers.`},{id:`reminder-app`,name:`Reminder App`,description:`Local notifications ke saath one-time aur repeating reminders.`},{id:`routine-checklist`,name:`Routine Checklist`,description:`Morning, evening, travel aur custom reusable checklists.`},{id:`decision-maker`,name:`Decision Maker`,description:`Random choice, yes/no, wheel picker aur list se selection.`}]},{id:`text-and-communication-tools`,category:`Text and Communication Tools`,apps:[{id:`text-toolkit`,name:`Text Toolkit`,description:`Uppercase, lowercase, title case, word count aur duplicate-line removal.`},{id:`password-generator`,name:`Password Generator`,description:`Strong customizable passwords generate aur copy karna.`},{id:`qr-toolkit`,name:`QR Toolkit`,description:`QR code scan, generate, save aur share karna.`},{id:`barcode-scanner`,name:`Barcode Scanner`,description:`Product barcode scan karke number aur format show karna.`},{id:`morse-code-translator`,name:`Morse Code Translator`,description:`Normal text aur Morse code ke beech conversion.`},{id:`number-to-words-converter`,name:`Number to Words Converter`,description:`Numbers ko Indian aur international words format mein convert karna.`},{id:`speech-to-text-notes`,name:`Speech to Text Notes`,description:`Voice se text notes create aur edit karna.`},{id:`text-to-speech-reader`,name:`Text to Speech Reader`,description:`Entered text ko device voice se read karna.`},{id:`offline-mesh-chat`,name:`Offline Mesh Chat`,description:`Nearby Android devices ke beech Bluetooth-based offline messaging, local username, encrypted chat, group channels aur baad mein multi-hop mesh relay.`},{id:`multilingual-voice-translator`,name:`Multilingual Voice Translator`,description:`Text typing, speech-to-text, source and target language selection, translated text, text-to-speech, language swap, copy, share aur recent translations.`}]},{id:`files-images-and-documents`,category:`Files, Images and Documents`,apps:[{id:`image-compressor`,name:`Image Compressor`,description:`Image quality aur file size reduce karna.`},{id:`image-resizer`,name:`Image Resizer`,description:`Width, height aur percentage se image resize karna.`},{id:`image-format-converter`,name:`Image Format Converter`,description:`JPG, PNG aur WebP formats ke beech conversion.`},{id:`document-scanner`,name:`Document Scanner`,description:`Camera se document capture, crop aur PDF export karna.`},{id:`images-to-pdf`,name:`Images to PDF`,description:`Multiple images ko arrange karke single PDF banana.`},{id:`pdf-merger`,name:`PDF Merger`,description:`Multiple PDF files ko combine karna.`},{id:`pdf-splitter`,name:`PDF Splitter`,description:`Selected pages ko separate PDF mein export karna.`},{id:`file-hash-generator`,name:`File Hash Generator`,description:`Files ke MD5, SHA-1 aur SHA-256 checksums generate karna.`},{id:`file-size-converter`,name:`File Size Converter`,description:`Bytes, KB, MB, GB aur TB conversion.`},{id:`document-viewer`,name:`Document Viewer`,description:`Common text aur document files ko simple interface mein read karna.`}]},{id:`money-management-apps`,category:`Money Management Apps`,apps:[{id:`expense-tracker`,name:`Expense Tracker`,description:`Offline income, expenses, categories aur monthly summary.`},{id:`budget-planner`,name:`Budget Planner`,description:`Monthly budget limits aur remaining balance tracking.`},{id:`bill-splitter`,name:`Bill Splitter`,description:`Group expenses ko multiple people mein fairly divide karna.`},{id:`savings-goal-tracker`,name:`Savings Goal Tracker`,description:`Savings target, contributions aur progress tracking.`},{id:`recurring-bills-tracker`,name:`Recurring Bills Tracker`,description:`Rent, electricity, internet aur subscriptions ke due-date reminders.`},{id:`simple-cash-book`,name:`Simple Cash Book`,description:`Daily money-in aur money-out records maintain karna.`},{id:`electricity-cost-estimator`,name:`Electricity Cost Estimator`,description:`Appliance wattage aur usage se estimated electricity cost.`},{id:`salary-calculator`,name:`Salary Calculator`,description:`Monthly, yearly, daily aur hourly salary breakdown.`}]},{id:`health-and-wellness-utilities`,category:`Health and Wellness Utilities`,apps:[{id:`water-reminder`,name:`Water Reminder`,description:`Daily water target aur local reminder notifications.`},{id:`medicine-reminder`,name:`Medicine Reminder`,description:`Medicine name, timing aur taken/missed tracking.`},{id:`bmi-calculator`,name:`BMI Calculator`,description:`Height aur weight se BMI calculation with general category display.`},{id:`calorie-needs-calculator`,name:`Calorie Needs Calculator`,description:`Estimated daily calorie requirement calculate karna.`},{id:`step-counter`,name:`Step Counter`,description:`Device sensor se daily steps aur distance estimate karna.`},{id:`sleep-tracker-journal`,name:`Sleep Tracker Journal`,description:`Sleep aur wake-up time manually record karke duration track karna.`},{id:`mood-tracker`,name:`Mood Tracker`,description:`Daily mood, notes aur simple history chart.`},{id:`breathing-exercise`,name:`Breathing Exercise`,description:`Guided breathing timer with visual animation.`},{id:`workout-interval-timer`,name:`Workout Interval Timer`,description:`Exercise, rest aur round-based workout timer.`},{id:`body-measurements-tracker`,name:`Body Measurements Tracker`,description:`Weight aur body measurements ka offline progress record.`}]},{id:`safety-and-emergency-apps`,category:`Safety and Emergency Apps`,apps:[{id:`emergency-information-card`,name:`Emergency Information Card`,description:`Emergency contacts, allergies aur essential information locally store karna.`},{id:`sos-utility`,name:`SOS Utility`,description:`Emergency message, location share aur quick-call shortcuts.`},{id:`flashlight-utility`,name:`Flashlight Utility`,description:`Flashlight, blinking mode aur screen light.`},{id:`compass`,name:`Compass`,description:`Device sensors ke through direction aur heading show karna.`},{id:`offline-first-aid-guide`,name:`Offline First-Aid Guide`,description:`Basic first-aid reference with clear emergency disclaimers.`},{id:`location-coordinates-tool`,name:`Location Coordinates Tool`,description:`Current latitude, longitude, accuracy aur share option.`}]},{id:`learning-and-student-apps`,category:`Learning and Student Apps`,apps:[{id:`flashcards-app`,name:`Flashcards App`,description:`Custom decks, study mode aur known/unknown tracking.`},{id:`quiz-maker`,name:`Quiz Maker`,description:`Custom multiple-choice quizzes create aur attempt karna.`},{id:`multiplication-tables`,name:`Multiplication Tables`,description:`Tables learn, practise aur timed tests.`},{id:`vocabulary-builder`,name:`Vocabulary Builder`,description:`Daily words, meanings, favourites aur revision.`},{id:`study-timer`,name:`Study Timer`,description:`Subject-wise study sessions aur daily duration tracking.`},{id:`grade-calculator`,name:`Grade Calculator`,description:`Marks, percentage, average aur required-score calculation.`},{id:`attendance-calculator`,name:`Attendance Calculator`,description:`Current attendance aur required future attendance calculation.`},{id:`random-number-generator`,name:`Random Number Generator`,description:`Number range, quantity aur duplicate settings.`}]}],y=a`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`,b={Wrapper:s.div`
        width: 100%;
        min-height: 100%;
        background-color: transparent;
        color: #ffffff;
    `,Container:s.div`
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
    `,Hero:s.section`
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
    `,Eyebrow:s.p`
        margin: 0 0 18px;
        color: rgba(255, 255, 255, 0.58);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
    `,Title:s.h1`
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
    `,Description:s.p`
        max-width: 680px;
        margin: 28px 0 0;
        color: rgba(255, 255, 255, 0.68);
        font-size: 17px;
        line-height: 1.75;
    `,AppsSection:s.section`
        min-height: 520px;
        padding: 56px 0 100px;
        background: rgba(0, 0, 0, 0.08);
    `,Tabs:s.div`
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
    `,TabButton:s.button`
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
    `,CategoryDescription:s.p`
        max-width: 680px;
        margin: 0 0 36px;
        color: rgba(255, 255, 255, 0.52);
        font-size: 14px;
        line-height: 1.7;
    `,Grid:s.div`
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
    `,Pagination:s.div`
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
    `,PaginationButton:s.button`
        min-width: 44px;
        min-height: 44px;
        padding: 0 15px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border: 1px solid
            ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.14)`};
        border-radius: 12px;

        background-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.055)`};

        color: ${({$active:e})=>e?`#090909`:`rgba(255, 255, 255, 0.76)`};

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
            background-color: ${({$active:e})=>e?`#ffffff`:`rgba(255, 255, 255, 0.1)`};
            color: ${({$active:e})=>e?`#090909`:`#ffffff`};
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
    `,PaginationInfo:s.span`
        width: 100%;
        margin-top: 4px;

        color: rgba(255, 255, 255, 0.46);
        font-size: 12px;
        font-weight: 600;
        text-align: center;
    `,AppCard:s.article`
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
    `,AppIcon:s.div`
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
    `,AppContent:s.div`
        min-width: 0;
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 15px;
    `,AppName:s.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -0.4px;
    `,Status:s.span`
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
    `,AppDescription:s.p`
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 14px;
        line-height: 1.75;
    `,LoadingState:s.div`
        min-height: 320px;
        display: grid;
        place-items: center;
    `,Spinner:s.div`
        width: 46px;
        height: 46px;

        border: 4px solid rgba(255, 255, 255, 0.12);
        border-top-color: #ffffff;
        border-radius: 50%;

        animation: ${y} 0.75s linear infinite;
    `,MessageState:s.div`
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
    `,MessageTitle:s.h2`
        margin: 0;
        color: #ffffff;
        font-size: 22px;
        font-weight: 700;
    `,MessageText:s.p`
        max-width: 480px;
        margin: 12px 0 0;
        color: rgba(255, 255, 255, 0.58);
        font-size: 14px;
        line-height: 1.7;
    `},x=6,S=[{id:`all`,label:`All Apps`,description:`Browse all available mobile applications.`},...v.map(e=>({id:e.id,label:e.category,description:`Browse available apps from ${e.category}.`}))],C=new Set(S.map(e=>e.id)),w=new Map([...v.flatMap(e=>e.apps.map(t=>[t.id,e.id])),[`hello-world`,`essential-everyday-apps`]]),T=e=>{let t=e.get(`page`);if(!t||!/^\d+$/.test(t))return 1;let n=Number(t);return!Number.isSafeInteger(n)||n<1?1:n},E=()=>{let[e,t]=r(),[n,i]=(0,u.useState)([]),[a,o]=(0,u.useState)(null),[s,c]=(0,u.useState)(!0),[l,d]=(0,u.useState)(``),m=e.get(`category`)||`all`,g=C.has(m)?m:`all`,v=e.get(`search`)||``,y=T(e);(0,u.useEffect)(()=>{let e=new AbortController;return(async()=>{try{c(!0),d(``);let t=await fetch(`/mobile-apps-distribution-page/data/apps.json`,{signal:e.signal});if(!t.ok)throw Error(`Unable to load mobile apps.`);let n=await t.json();i(Array.isArray(n.apps)?n.apps:[])}catch(e){e.name!==`AbortError`&&d(e.message)}finally{e.signal.aborted||c(!1)}})(),()=>{e.abort()}},[]);let E=(0,u.useCallback)(({category:e=`all`,page:n=1,search:r=``},{replace:i=!1}={})=>{let a=C.has(e)?e:`all`,o=a===`all`&&Number.isSafeInteger(n)&&n>0?n:1,s=new URLSearchParams;s.set(`category`,a),s.set(`page`,String(o)),r&&s.set(`search`,r),t(s,{replace:i})},[t]),D=(0,u.useMemo)(()=>{let e=v.trim().toLowerCase();return e?n.filter(t=>[t.name,t.description,t.packageName,t.platform,t.version,t.status].filter(Boolean).join(` `).toLowerCase().includes(e)):n},[n,v]),O=(0,u.useMemo)(()=>{let e={all:D.length};return D.forEach(t=>{let n=w.get(t.id);n&&(e[n]=(e[n]||0)+1)}),e},[D]),k=(0,u.useMemo)(()=>g===`all`?D:D.filter(e=>w.get(e.id)===g),[g,D]),A=(0,u.useMemo)(()=>g===`all`?Math.max(1,Math.ceil(k.length/x)):1,[g,k.length]),j=g===`all`?Math.min(Math.max(y,1),A):1;(0,u.useEffect)(()=>{if(s)return;let n=new URLSearchParams;n.set(`category`,g),n.set(`page`,String(j)),v&&n.set(`search`,v),n.toString()!==e.toString()&&t(n,{replace:!0})},[g,j,s,e,v,t]);let M=(0,u.useMemo)(()=>{if(g!==`all`)return k;let e=(j-1)*x,t=e+x;return k.slice(e,t)},[g,j,k]),N=S.find(e=>e.id===g),P=e=>{E({category:e,page:1,search:v})},F=e=>{E({category:g,page:1,search:e},{replace:!0})},I=e=>{E({category:g,page:Math.min(Math.max(e,1),A),search:v})},L=e=>{e.previewImage&&o(e)},R=(0,u.useCallback)(()=>{o(null)},[]),z=a?.previewImage?`/mobile-apps-distribution-page/${a.previewImage}`:``,B=e=>{if(e.pointerType!==`mouse`)return;let t=e.currentTarget,n=t.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,a=r/n.width,o=i/n.height,s=(a-.5)*8,c=(.5-o)*8;t.style.setProperty(`--rotate-x`,`${c.toFixed(2)}deg`),t.style.setProperty(`--rotate-y`,`${s.toFixed(2)}deg`),t.style.setProperty(`--glow-x`,`${a*100}%`),t.style.setProperty(`--glow-y`,`${o*100}%`)},V=e=>{let t=e.currentTarget;t.style.setProperty(`--rotate-x`,`0deg`),t.style.setProperty(`--rotate-y`,`0deg`),t.style.setProperty(`--glow-x`,`50%`),t.style.setProperty(`--glow-y`,`50%`)};return(0,f.jsxs)(b.Wrapper,{children:[(0,f.jsx)(b.Hero,{children:(0,f.jsxs)(b.Container,{children:[(0,f.jsx)(b.Eyebrow,{children:`a2rp Mobile Apps`}),(0,f.jsx)(b.Title,{children:`Mobile apps built for everyday use`}),(0,f.jsx)(b.Description,{children:`Explore useful Android applications created by Ashish Ranjan for everyday tasks, productivity, learning, safety and more.`})]})}),(0,f.jsx)(b.AppsSection,{children:(0,f.jsxs)(b.Container,{children:[s&&(0,f.jsx)(b.LoadingState,{children:(0,f.jsx)(b.Spinner,{})}),!s&&l&&(0,f.jsxs)(b.MessageState,{children:[(0,f.jsx)(b.MessageTitle,{children:`Apps could not be loaded`}),(0,f.jsx)(b.MessageText,{children:l})]}),!s&&!l&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`searchArea`,children:(0,f.jsx)(h,{value:v,onChange:F})}),(0,f.jsx)(b.Tabs,{role:`tablist`,"aria-label":`Mobile app categories`,children:S.map(e=>(0,f.jsxs)(b.TabButton,{type:`button`,role:`tab`,"aria-selected":g===e.id,$active:g===e.id,onClick:()=>P(e.id),children:[(0,f.jsx)(`span`,{children:e.label}),(0,f.jsx)(`span`,{className:`tabCount`,children:O[e.id]||0})]},e.id))}),N&&(0,f.jsx)(b.CategoryDescription,{children:N.description}),M.length>0?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.Grid,{children:M.map(e=>{let t=e.icon?`/mobile-apps-distribution-page/${e.icon}`:``,n=e.previewImage?`/mobile-apps-distribution-page/${e.previewImage}`:``,r=e.releaseUrl||e.apkUrl;return(0,f.jsxs)(b.AppCard,{onPointerMove:B,onPointerLeave:V,children:[(0,f.jsxs)(`div`,{className:`cardTop`,children:[(0,f.jsx)(b.AppIcon,{children:t?(0,f.jsx)(`img`,{src:t,alt:`${e.name} icon`}):`AR`}),(0,f.jsxs)(`div`,{className:`cardTopActions`,children:[e.status&&(0,f.jsx)(b.Status,{children:e.status}),(0,f.jsx)(_,{appName:e.name,shareUrl:r})]})]}),n?(0,f.jsxs)(`button`,{className:`previewButton`,type:`button`,onClick:()=>L(e),"aria-label":`Open ${e.name} preview`,children:[(0,f.jsx)(`img`,{src:n,alt:`${e.name} preview`}),(0,f.jsx)(`span`,{children:`View Preview`})]}):(0,f.jsx)(`div`,{className:`previewPlaceholder`,children:`Preview coming soon`}),(0,f.jsxs)(b.AppContent,{children:[(0,f.jsx)(b.AppName,{children:e.name}),(0,f.jsx)(b.AppDescription,{children:e.description}),(0,f.jsxs)(`div`,{className:`appMeta`,children:[e.version&&(0,f.jsxs)(`span`,{children:[`Version`,` `,e.version]}),e.platform&&(0,f.jsx)(`span`,{children:e.platform})]}),(0,f.jsxs)(`div`,{className:`appActions`,children:[e.apkUrl&&(0,f.jsx)(`a`,{className:`downloadButton`,href:e.apkUrl,target:`_blank`,rel:`noreferrer`,download:!0,children:`Download APK`}),e.releaseUrl&&(0,f.jsx)(`a`,{className:`releaseButton`,href:e.releaseUrl,target:`_blank`,rel:`noreferrer`,children:`Release Notes`})]})]})]},e.id)})}),g===`all`&&A>1&&(0,f.jsxs)(b.Pagination,{children:[(0,f.jsx)(b.PaginationButton,{type:`button`,disabled:j===1,onClick:()=>I(j-1),children:`Previous`}),(0,f.jsx)(`div`,{className:`pageNumbers`,children:Array.from({length:A},(e,t)=>t+1).map(e=>(0,f.jsx)(b.PaginationButton,{type:`button`,$active:j===e,"aria-current":j===e?`page`:void 0,onClick:()=>I(e),children:e},e))}),(0,f.jsx)(b.PaginationButton,{type:`button`,disabled:j===A,onClick:()=>I(j+1),children:`Next`}),(0,f.jsxs)(b.PaginationInfo,{children:[`Page `,j,` of`,` `,A]})]})]}):(0,f.jsxs)(b.MessageState,{children:[(0,f.jsx)(b.MessageTitle,{children:v?`No matching apps found`:`No apps available yet`}),(0,f.jsx)(b.MessageText,{children:v?`Try searching with a different app name or keyword.`:`Applications in this category will be added soon.`})]})]})]})}),(0,f.jsx)(p,{appName:a?.name||``,imageUrl:z,isOpen:!!a,onClose:R})]})};export{E as default};