import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Wrapper } from '../styled-index';
import { useNavigate } from 'react-router-dom';
function Partners({HandleClickClose}) {
    const navigate = useNavigate();
    const HandleClickMore = () => {
      navigate("/partners");
      HandleClickClose()
    };
    return(
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
                <ul style={{overflowX:"scroll"}}>
                    <li onClick={HandleClickMore}>
                        Ташкент
                    </li>
                    <hr/>
                    <li>
                        Сирдаря
                    </li>
                    <hr/>
                </ul>
        </AccordionDetails>
      </Accordion>
        </>
    )
}
export default Partners