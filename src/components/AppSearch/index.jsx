import { FiSearch, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const AppSearch = ({ value, onChange }) => {
    const handleClear = () => {
        onChange("");
    };

    return (
        <Styled.Wrapper>
            <FiSearch className="searchIcon" aria-hidden="true" />

            <input
                type="search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Search mobile apps..."
                aria-label="Search mobile apps"
            />

            {value && (
                <button
                    type="button"
                    onClick={handleClear}
                    aria-label="Clear search"
                    title="Clear search"
                >
                    <FiX aria-hidden="true" />
                </button>
            )}
        </Styled.Wrapper>
    );
};

export default AppSearch;
