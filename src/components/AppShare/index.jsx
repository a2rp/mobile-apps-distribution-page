import { useEffect, useRef, useState } from "react";
import { FiCheck, FiShare2 } from "react-icons/fi";

import { Styled } from "./styled";

const AppShare = ({ appName, shareUrl }) => {
    const [isCopied, setIsCopied] = useState(false);
    const resetTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            window.clearTimeout(resetTimerRef.current);
        };
    }, []);

    const showCopiedState = () => {
        setIsCopied(true);

        window.clearTimeout(resetTimerRef.current);

        resetTimerRef.current = window.setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    const copyShareUrl = async () => {
        await navigator.clipboard.writeText(shareUrl);
        showCopiedState();
    };

    const handleShare = async () => {
        if (!shareUrl) {
            return;
        }

        try {
            if (navigator.share) {
                await navigator.share({
                    title: appName,
                    text: `Download ${appName} for Android.`,
                    url: shareUrl,
                });

                return;
            }

            await copyShareUrl();
        } catch (error) {
            if (error.name === "AbortError") {
                return;
            }

            try {
                await copyShareUrl();
            } catch {
                setIsCopied(false);
            }
        }
    };

    return (
        <Styled.Wrapper
            type="button"
            onClick={handleShare}
            disabled={!shareUrl}
            aria-label={`Share ${appName}`}
            title={isCopied ? "Link copied" : "Share app"}
        >
            {isCopied ? (
                <>
                    <FiCheck aria-hidden="true" />
                    <span>Copied</span>
                </>
            ) : (
                <>
                    <FiShare2 aria-hidden="true" />
                    <span>Share</span>
                </>
            )}
        </Styled.Wrapper>
    );
};

export default AppShare;
