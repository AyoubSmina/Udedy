import React from 'react'
import {
  Typography,
  Container,
  Toolbar,
  AppBar,
  Box,


} from '@mui/material';

export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1c1d1f' }}>
      <Toolbar style={{padding:0}}>
        <Container style={{flex:1,flexDirection:'row'}}>
          <Box style={{ flex:.5 }} >
            <Typography variant="body1" color="inherit">
              © 2021 IYO
            </Typography>
          </Box>
          {/* <Box style={{ backgroundColor: 'red',flex:.5 }} >
            <Typography variant="body1" color="inherit">
              © 2021 IYO
            </Typography>
          </Box> */}
        </Container>

      </Toolbar>
    </AppBar>
  )
}