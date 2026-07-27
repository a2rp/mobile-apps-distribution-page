import { NavLink } from "react-router-dom";

import { Styled } from "./styled";

const Header = () => {
    return (
        <Styled.Wrapper>
            <Styled.Container>
                <Styled.Brand as={NavLink} to="/home">
                    <Styled.BrandMark>
                        <img src="images/logo.png" alt="" />
                    </Styled.BrandMark>

                    <Styled.BrandText>Mobile Apps</Styled.BrandText>
                </Styled.Brand>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Header;
