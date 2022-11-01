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
import { ChooseContext } from "../../../../context/client/choose/context";

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
  const {ChooseMap} = React.useContext(ChooseContext)
  function getValue(){
    return window.localStorage.getItem("i18nextLng")
  }
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
                {ChooseMap.map((elem , index) =>
                <Tab key={index} label={getValue() == "ru" ? elem.titleRu: getValue() == "en" ? elem.titleEn: getValue() == "uz" ? elem.tileUz:null} {...a11yProps(index)} />
                )}
              </Tabs>
            </Box>
                {ChooseMap.map((elem , index) =>
                          <TabPanel value={value} index={index}>
                            <ChoosCard Element={elem} />
                          </TabPanel>
                )}
            {/* <TabPanel value={value} index={1}>
              <ChoosCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ChoosCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ChoosCard />
            </TabPanel> */}
          </Box>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeChoose;
