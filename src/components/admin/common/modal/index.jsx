import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function ModalCommon({children , open , handleClose ,height , scroll}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid white',
        boxShadow: 24,
        borderRadius : "10px",
        height : height,
        overflowY : scroll,
      };

    return(
        <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
        </Box>
      </Modal>
        </>
    )
}
export default ModalCommon