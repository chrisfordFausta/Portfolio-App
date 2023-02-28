import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon />
                <a 
                    href="https://www.linkedin.com/in/chrisford-fausta-1b196423b/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a 
                    href="https://github.com/chrisfordFausta"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <GitHubIcon />
                    </a>
            </div>
            <p> &copy; 2023 chrisfordfausta.com </p>
        </div>
    );
}
 
export default Footer;