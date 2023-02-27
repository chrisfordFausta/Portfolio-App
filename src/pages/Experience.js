import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


const Experience = () => {
    return ( 
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education"
                date="2013 - 2017"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Epic Academy Charter High School, Chicago, Illinois
                    </h3>
                    <i><b>High School Diploma</b></i>
                    <p>Achieved academic excellence by ranking in the top 5% of the graduating class.</p>
                    <p>Mentored classmates and underclassmen to encourage them to exceed their own expectations and strive for greatness.</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - 2020"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Special Service Associate - The Home Depot</h3>
                    <h4 className="vertical-timeline-element-subtitle">Chicago, Illinois</h4>
                    <p>Manage special order projects with key players; requiring excellent communication skills
for interaction with customers, sales associates, vendors, installers, and carriers</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020 - 2022"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Delivery Driver - Uber</h3>
                    <h4 className="vertical-timeline-element-subtitle">Chicago, Illinois</h4>
                    <p>Multitasked in a high-pressure environment. Tasks included managing fares, navigating during heavy traffic, and maintaining customer satisfaction.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2022 - 2023"
                iconStyle={{background: "#3e497a", color: "#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Thinkful, Remote, U.S.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle"><i><b>Certificate</b></i></h4>
                    <i>Engineering Immersion Program</i>
                    <p>Focused on several key programming languages and technologies, including JavaScript, HTML5, CSS3, React, Node.js, PostgreSQL, RESTful APIs, and data structures.</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{background: "#e9d35b", color: "#fff"}}
                icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                    Fulfillment Associate - Lowe's, 
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">Schereville, Indiana</h4>
                    <p>Received and reviewed new orders, located requested merchandise, and promptly initiated processing</p>
                </VerticalTimelineElement>

            </VerticalTimeline>

        </div>
     );
}
 
export default Experience;