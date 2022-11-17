import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./styled-tab.css";
import { useContext } from "react"
import PartnersModal from "../../../components/admin/ceilling-option-partners/modal-form"
import CategoryRegionModal from "../../../components/admin/ceilling-option-partners/modal-form-category"
import OptionRegionDeletPutComponent from "../../../components/admin/ceilling-option-partners/option-delet-put"
import PartnersDeletPutComponent from "../../../components/admin/partners/team-delet-put"
import { CeilCard, CeilCardWrapper, CeilItem, WrapperUser } from "../../../components/client/partners/styled-index"
import {RegionContext} from '../../../context/client/region/context'
import { WrapperContainer } from "../../../style-App"
import { Wrapper } from "./styled-index"
import AdminPartnersCard from "./adminPartnersCard"



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

function PartnersAdmin() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const {RegionMap} = useContext(RegionContext)
    
    return(
        <>
    <Wrapper>
    <div style={{display: 'flex', position: 'absolute', top: '10px', right: '10px'}}>
        <PartnersModal />
        <CategoryRegionModal />
      </div>
      <OptionRegionDeletPutComponent/>
        <WrapperContainer>
        <Box sx={{ width: "100%" }} style={{ margin: "0 auto" }}>
            <Box sx={{ borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                aria-label="icon label tabs example"
              >
                {RegionMap.map((elem, index) => (
                  <Tab
                   
                    key={index}
                    label={elem.region_name_ru}
                    {...a11yProps(index)}
                  />
                ))}
              </Tabs>
            </Box>
            {RegionMap.map((elem, index) => (
              <>
              <TabPanel className='tabpanel' value={value} index={index}>
                <AdminPartnersCard Element={elem} />
              </TabPanel>
              </>
            ))}

          </Box>
        </WrapperContainer>
      </Wrapper>
        </>
    )
}
export default PartnersAdmin