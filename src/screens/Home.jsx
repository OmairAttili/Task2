import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function Home() {
  return <>
  <Box sx={{p:10}}>
    <Container>
        <Typography sx={{fontSize:48,fontWeight:700,textAlign:'center'}}>Products</Typography>
    </Container>
  </Box>
  </>
}

export default Home