import React, { useContext } from "react";
import { Container, Wrapper } from "./styled-index";
import StretchModal from "../../../components/admin/stretch_ceilings/modal-form/index";
import TeamDeletPutComponent from "../../../components/admin/stretch_ceilings/team-delet-put/index";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { StretchContext } from "../../../context/client/stretch_ceilings/context";
import { Box, Tab, Tabs } from "@mui/material";
import { ChooseContext } from "../../../context/client/choose/context";
function Option() {
  const { StretchMap } = useContext(StretchContext);
  const [value, setValue] = React.useState(0);
  function getValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { ChooseMap } = React.useContext(ChooseContext);
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
  return (
    <>
      <Wrapper>
        <StretchModal />
        <Container>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
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
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
export default Option;
