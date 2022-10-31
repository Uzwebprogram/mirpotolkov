import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { WrapperContainer } from "../../../../style-App";
import { Section } from "./styled-index";
import "./styled-tab.css";

import ChoosCard from "./homeChoosCard";

function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const HomeChoose = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Section>
        <WrapperContainer>
          <h2>Выбери свой вариант потолков</h2>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Кухня" {...a11yProps(0)} />
                <Tab label="Спальня" {...a11yProps(1)} />
                <Tab label="Ванная + Санузел" {...a11yProps(2)} />
                <Tab label="Гостинная" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <ChoosCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ChoosCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ChoosCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ChoosCard />
            </TabPanel>
          </Box>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeChoose;
