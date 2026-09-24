import { useEffect, useState } from "react";
import { FaCodepen, FaFacebookF, FaGithub, FaGlobe, FaLinkedinIn, FaPatreon, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiBuymeacoffee } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { Styled } from "./styled";

const iconComponents = { FaCodepen, FaFacebookF, FaGithub, FaGlobe, FaLinkedinIn, FaPatreon, FaYoutube, HiOutlineMail, SiBuymeacoffee };
const donationLink = { id: "support", label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: "FiHeart" };

const Footer = () => {
    const [siteData, setSiteData] = useState({ author: "Ashish Ranjan", links: {}, socialLinks: [] });

    useEffect(() => {
        let isMounted = true;
        fetch(`${import.meta.env.BASE_URL}data/site-data.json`).then((response) => response.ok ? response.json() : Promise.reject(new Error("Unable to load site data."))).then((data) => { if (isMounted) setSiteData(data); }).catch(() => undefined);
        return () => { isMounted = false; };
    }, []);

    const allLinks = [...siteData.socialLinks, donationLink];
    const author = siteData.author || "Ashish Ranjan";
    const portfolioLink = siteData.links?.portfolio || "https://www.ashishranjan.net";

    return <Styled.Wrapper><div className="footerLinks">{allLinks.map((link) => { const Icon = link.icon === "FiHeart" ? FiHeart : iconComponents[link.icon]; const isEmail = link.href.startsWith("mailto:"); return <a key={link.id} href={link.href} target={isEmail ? undefined : "_blank"} rel={isEmail ? undefined : "noopener noreferrer"} aria-label={link.label} title={link.label}>{Icon && <Icon aria-hidden="true" />}</a>; })}</div><div className="footerBottom"><span>Copyright © {new Date().getFullYear()} All rights reserved</span><a href={portfolioLink} target="_blank" rel="noopener noreferrer">{author}</a></div></Styled.Wrapper>;
};

export default Footer;