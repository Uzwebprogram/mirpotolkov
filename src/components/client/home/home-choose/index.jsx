import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { WrapperContainer } from "../../../../style-App";
import { ChooseTop, Section } from "./styled-index";
import "./styled-tab.css";

import ChoosCard from "./homeChoosCard";
import { ChooseContext } from "../../../../context/client/choose/context";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

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
  const { ChooseMap } = React.useContext(ChooseContext);
  function getValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const {t, i18n} = useTranslation();
  return (
    <>
      <Section id="choose">
        <WrapperContainer>
          <ChooseTop>
          <h2>{t("HomeChoose.0")}</h2>
          <NavLink to={"/ourworks"} style={{textDecoration:"none"}} ><span>{t("HomeInstall.1")}</span></NavLink>
          </ChooseTop>
          <Box sx={{ width: '100%'}} style={{margin: '0 auto'}}>
            <Box sx={{ borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                aria-label="scrollable prevent tabs example"
              >
                {ChooseMap.map((elem, index) => (
                  <Tab
                    key={index}
                    label={
                      getValue() == "ru"
                        ? elem.titleru
                        : getValue() == "en"
                        ? elem.titleen
                        : getValue() == "uz"
                        ? elem.titleuz
                        : null
                    }
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </Box>
            {ChooseMap.map((elem, index) => (
              <TabPanel value={value} index={index}>
                <ChoosCard ElementChoos={elem} />
              </TabPanel>
            ))}
          </Box>
        </WrapperContainer>
      </Section>
    </>
  );
};

export default HomeChoose;
