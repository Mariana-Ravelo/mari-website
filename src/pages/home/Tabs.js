import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// top skills icons
import {FaPython, FaLightbulb, FaCalculator, FaFlask, FaChartBar} from 'react-icons/fa';

// web dev skills
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact} from 'react-icons/fa';

// rob sim skills
import {FaEye, FaMapMarkedAlt} from 'react-icons/fa';
import ROS from "../../logos/ros.png";
import coppeliaSim from "../../logos/coppelia.png";
import gazebo from "../../logos/gazebo.png";

// micro programming
import {FaC} from 'react-icons/fa6';
import {FaCode} from 'react-icons/fa';
import arduino from "../../logos/arduino.png";

// physics 
import {FaRocket, FaDesktop} from 'react-icons/fa'


function SkillsTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
         </div>
    );
}

SkillsTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    console.log(ROS);
    console.log(coppeliaSim);
    console.log(gazebo);
    console.log(arduino);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
 
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="skill tabs">
                    <Tab label="Top Skills" {...a11yProps(0)} />
                    <Tab label="Robotic Simulations" {...a11yProps(1)} />
                    <Tab label="Website Development" {...a11yProps(2)} />
                    <Tab label="Microcontroller Programming" {...a11yProps(3)} />
                    <Tab label="Theoretical Physics Simulations" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <SkillsTabPanel value={value} index={0}>
                <div className="skills-container top-skills-container">
                    <div className="skills-icon problem"><FaLightbulb /> Problem Solving</div>
                    <div className="skills-icon python"><FaPython /> Python</div>
                    <div className="skills-icon data"><FaChartBar /> Data Analysis</div>                    
                    <div className="skills-icon maths"><FaCalculator /> Mathematics</div>
                    <div className="skills-icon physics"><FaFlask /> Physics</div>  
                </div>
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={1}>
                <div className="skills-container rob-sim-container">
                    <div className="skills-icon vision"><FaEye /> Computer Vision</div>
                    <div className="skills-icon slam"><FaMapMarkedAlt /> SLAM</div>
                    <img src={ROS} alt="ros" className="skills-image ros" />
                    <img src={coppeliaSim} alt="coppelia" className="skills-image coppelia" />
                    <div className="skills-icon gazebo"><img src={gazebo} alt="gazebo" className="skills-image gazebo" />Gazebo</div>
                </div>            
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={2}>
                <div className="skills-container web-dev-container">
                    <div className="skills-icon html"><FaHtml5 /> HTML</div>
                    <div className="skills-icon css"><FaCss3Alt /> CSS</div>
                    <div className="skills-icon js"><FaJsSquare /> Javascript</div>                    
                    <div className="skills-icon react"><FaReact /> React</div>
                </div>
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={3}>
                <div className="skills-container micro-programming-container">
                    <div className="skills-icon c"><FaC /> C Language</div>
                    <div className="skills-icon arduino"><img src={arduino} alt="arduino" className="skills-image arduino" />Arduino</div>
                    <div className="skills-icon embedded"><FaCode /> Embedded Software Development</div>
                </div>
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={4}>
                <div className="skills-container phys-sim">
                    <div className="skills-icon rocket"><FaRocket /> Special Relativity</div>
                    <div className="skills-icon computer"><FaDesktop /> Data Visualization</div>
                    <div className="skills-icon matplotlib"><FaChartBar /> Matplotlib</div>
                </div>
            </SkillsTabPanel>
        </Box>
    );
}