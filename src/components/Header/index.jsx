import { useEffect, useRef, useState } from "react";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) setMenuOpen(false);
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [menuOpen]);

    return (
        <Styled.Wrapper ref={menuRef}>
            <Styled.Container>
                <Styled.Brand as={NavLink} to="/home" onClick={() => setMenuOpen(false)}>
                    <Styled.BrandMark><img src={`${import.meta.env.BASE_URL}logo.png`} alt="Ashish Ranjan logo" /></Styled.BrandMark>
                    <Styled.BrandText><strong>Mobile Apps</strong><small>Browse the app collection</small></Styled.BrandText>
                </Styled.Brand>
                <Styled.MenuButton type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <FiX /> : <FiMenu />}</Styled.MenuButton>
                <Styled.Menu $open={menuOpen}>
                    <NavLink to="/home" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <a href="https://github.com/a2rp/mobile-apps-releases" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>APK Releases <FiExternalLink /></a>
                </Styled.Menu>
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Header;