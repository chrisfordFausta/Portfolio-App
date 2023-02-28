import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";

const Home = () => {
    return ( 
        <div className="home">
            <div className="about">
                <h2>Chrisford Fausta</h2>
                <div className="prompt">
                    <p>A software engineer who is passionate about exploring new technologies and creating innovative solutions.</p>
                    <a 
                    href="https://www.linkedin.com/in/chrisford-fausta-1b196423b/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <LinkedInIcon />
                    </a>
                    <a 
                    href="mailto:chrisford.fausta@outlook.com"
                    target="_blank"
                    rel="noreferrer">
                        <EmailIcon />
                    </a>
                    <a 
                    href="https://github.com/chrisfordFausta"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <GitHubIcon />
                    </a>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span> HTML, CSS, JavaScript, React.js, jQuery
</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Node.js, Express, RESTful APIs, PostgreSQL</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Javascript, Java, Python</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}
 
export default Home;