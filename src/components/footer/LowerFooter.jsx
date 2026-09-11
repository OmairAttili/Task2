
import { Box, Container, Typography} from '@mui/material'
import React from 'react'

export default function LowerFooter() {
  return <Box sx={{bgcolor:'#1a252f',p:3}}>
    <Container>
      <Typography sx={{fontSize:14,color:'white',textAlign:'center',fontWeight:400}}>Copyright © Your Website 2023</Typography>
    </Container>
  </Box>
}
