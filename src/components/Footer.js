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
                <LinkedInIcon />
                <GitHubIcon />
            </div>
            <p> &copy; 2023 chrisfordfausta.com </p>
        </div>
    );
}
 
export default Footer;