import { useEffect } from "react";
import { FiX } from "react-icons/fi";

import { Styled } from "./styled";

const AppPreviewModal = ({ appName, imageUrl, isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;

            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !imageUrl) {
        return null;
    }

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <Styled.Wrapper role="presentation" onMouseDown={handleOverlayClick}>
            <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-label={`${appName} preview`}
            >
                <div className="modalHeader">
                    <div>
                        <span>App Preview</span>
                        <h2>{appName}</h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close preview"
                        title="Close preview"
                    >
                        <FiX aria-hidden="true" />
                    </button>
                </div>

                <div className="imageWrapper">
                    <img
                        src={imageUrl}
                        alt={`${appName} application preview`}
                    />
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AppPreviewModal;
