import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { WrapperContainer } from "../../../style-App";
import { Section } from "./styled-index";
import "./styled-tab.css";
import OptionDeletPutComponent from "../../../components/admin/ceilling-option/option-delet-put";

import AdminChoosCard from "./adminChoosCard";
import { ChooseContext } from "../../../context/client/choose/context";
import ChooseModal from "../../../components/admin/ceilling-option/modal-form";
import CategoryModal from "../../../components/admin/ceilling-option/modal-form-category";

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

const AdminChoose = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { ChooseMap } = React.useContext(ChooseContext);
  function getValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <>
      <Section>
      <div style={{display: 'flex', position: 'absolute', top: '10px', right: '10px'}}>
        <ChooseModal />
        <CategoryModal />
      </div>
      <OptionDeletPutComponent/>
        <WrapperContainer>
          <Box sx={{ width: "100%" }} style={{ margin: "0 auto" }}>
            <Box sx={{ borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                aria-label="icon label tabs example"
              >
                {ChooseMap.map((elem, index) => (
                  <Tab
                   
                    key={index}
                    label={elem.titleru}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </Box>
            {ChooseMap.map((elem, index) => (
              <>
              <TabPanel value={value} index={index}>
                <AdminChoosCard Element={elem} />
              </TabPanel>
              </>
            ))}

          </Box>
        </WrapperContainer>

      </Section>
    </>
  );
};

export default AdminChoose;
