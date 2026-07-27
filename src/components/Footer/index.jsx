import { useEffect, useState } from "react";
import {
    FaCodepen,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaPaypal,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiBuymeacoffee } from "react-icons/si";

import { Styled } from "./styled";

const iconComponents = {
    FaCodepen,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaLinkedinIn,
    FaPaypal,
    FaPatreon,
    FaYoutube,
    HiOutlineMail,
    SiBuymeacoffee,
};

const Footer = () => {
    const [siteData, setSiteData] = useState({
        author: "",
        links: {},
        socialLinks: [],
    });

    useEffect(() => {
        let isMounted = true;

        const loadSiteData = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.BASE_URL}data/site-data.json`,
                );

                if (!response.ok) {
                    throw new Error("Unable to load site data.");
                }

                const data = await response.json();

                if (isMounted) {
                    setSiteData(data);
                }
            } catch (error) {
                console.error(error);
            }
        };

        loadSiteData();

        return () => {
            isMounted = false;
        };
    }, []);

    const author = siteData.author || "Ashish Ranjan";
    const portfolioLink =
        siteData.links?.portfolio || "https://www.ashishranjan.net";

    return (
        <Styled.Wrapper>
            <div className="footerLinks">
                {siteData.socialLinks.map((link) => {
                    const Icon = iconComponents[link.icon];
                    const isEmail = link.href.startsWith("mailto:");

                    return (
                        <a
                            key={link.id}
                            href={link.href}
                            target={isEmail ? undefined : "_blank"}
                            rel={isEmail ? undefined : "noreferrer"}
                            aria-label={link.label}
                        >
                            {Icon && <Icon aria-hidden="true" />}

                            <span>{link.label}</span>
                        </a>
                    );
                })}
            </div>

            <div className="footerBottom">
                <span>
                    © {new Date().getFullYear()}
                    &nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved
                    &nbsp;&nbsp;|&nbsp;&nbsp;Built and maintained by
                </span>

                <a href={portfolioLink} target="_blank" rel="noreferrer">
                    {author}
                </a>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
