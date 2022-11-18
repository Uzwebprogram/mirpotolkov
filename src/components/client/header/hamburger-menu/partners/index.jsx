import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper } from "../styled-index";
import { useNavigate } from "react-router-dom";
import { RegionContext } from "../../../../../context/client/region/context";
function Partners({ HandleClickClose }) {
  const { RegionMap } = React.useContext(RegionContext);
  const navigate = useNavigate();
  const HandleClickMore = () => {
    navigate("/partners");
    HandleClickClose();
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>НАШИ ПАРТНЕРЫ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={{ overflowX: "scroll" }}>
            {RegionMap.map((elem, index) =>
              LanguValue() === "uz" ? (
                <button value={elem.id} key={index} onClick={HandleClickMore}>
                  {elem.region_name_uz}
                </button>
              ) : LanguValue() === "ru" ? (
                <button value={elem.id} key={index} onClick={HandleClickMore}>
                  {elem.region_name_ru}
                </button>
              ) : LanguValue() === "en" ? (
                <button value={elem.id} key={index} onClick={HandleClickMore}>
                  {elem.region_name_en}
                </button>
              ) : null
            )}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
export default Partners;
