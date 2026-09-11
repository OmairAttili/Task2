import React from 'react'
import { AppBar, Box, Container, Link,} from '@mui/material'

export default function Navbar() {
  return <AppBar sx={{bgcolor:'#2c3e50',position:'sticky',width:'100%'}} name="nav">
    <Container sx={{p:2,display:'flex',justifyContent:'space-between',alignItems:'center',fontFamily:'Montserrat'}}>
      <Link href='nav' underline='none' 
      sx={{fontSize:{sm:28,xs:16},color:'white',fontWeight:700}}>START BOOTSTRAP</Link>
      <Box 
      sx={{fontWeight:700,fontSize:{sm:22,xs:16}}}>
        <Link href='#Products' underline='none' color='white' sx={{p:2,":hover":{color:'#1abc9c'},transitionDuration:'200ms',textTransform:'uppercase'}}>Products</Link>
      </Box>
    </Container>
  </AppBar>
}
