import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Wrapper
            type="button"
            $visible={isVisible}
            onClick={handleGoToTop}
            aria-label="Go to top"
            title="Go to top"
        >
            <FiArrowUp aria-hidden="true" />
        </Styled.Wrapper>
    );
};

export default GoToTop;
