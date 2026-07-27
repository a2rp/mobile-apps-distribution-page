import { Link } from "react-router-dom";

import { Styled } from "./styled";

const NotFound = () => {
    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.Code>404</Styled.Code>

                <Styled.Title>Page not found</Styled.Title>

                <Styled.Description>
                    The page you are looking for does not exist or has been
                    moved.
                </Styled.Description>

                <Styled.HomeButton as={Link} to="/">
                    Return Home
                </Styled.HomeButton>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default NotFound;
