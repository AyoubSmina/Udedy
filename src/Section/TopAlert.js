import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
export default function TopAlert() {
    const [open, setOpen] = React.useState(true);
    return (
        <Box sx={{ width: 'inhiret' }}>
      <Collapse in={open}>
        <Alert 
          severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          style={{backgroundColor: '#5624d0',color: 'white',borderRadius: 0}}
          sx={{'& .MuiAlert-message':{width:'100%',textAlign:'center'},'& .MuiAlert-icon':{display:'none'}}}
        >
          Future-ready skills on your schedule | <u>Learn on IOS, Android, and more.</u> 
        </Alert>
      </Collapse>
    </Box>
    )
}
