import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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
                top skils
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={1}>
                rob sim
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={2}>
                web dev
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={3}>
                micro
            </SkillsTabPanel>
            <SkillsTabPanel value={value} index={4}>
                phys sim
            </SkillsTabPanel>
        </Box>
    );
}