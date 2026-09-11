import { Box, Container, Link, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import React from 'react'

export default function UpperFooter() {
  return <Box sx={{bgcolor:'#2c3e50',py:10}}>
    <Container sx={{color:'white',display:'flex',flexDirection:{xs:'column',md:'row'},gap:5,justifyContent:'space-around',alignItems:'center',textAlign:'center',fontFamily:'Montserrat'}}>
      <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
        <Typography variant='h2'component='h2'
        sx={{textTransform:'uppercase',fontSize:24,fontWeight:700}}>Location</Typography>
        <Typography variant='h3'component='h3'
        sx={{fontSize:20,fontWeight:300,fontFamily:'Lato'}}>2215 John Daniel Drive<br/>Clark, MO 65243</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
        <Typography variant='h2'component='h2'
        sx={{textTransform:'uppercase',fontSize:24,fontWeight:700}}>Around the Web</Typography>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1.5}}>
          <Link sx={{textDecoration:'none',color:'white',border:1.5,borderColor:'white',borderRadius:'100%',width:42,height:42,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',":hover":{color:'black',bgcolor:'white',transitionDuration:'300ms'},fontWeight:700}}>f</Link>
          <Link sx={{textDecoration:'none',color:'white',border:1.5,borderColor:'white',borderRadius:'100%',width:42,height:42,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',":hover":{color:'black',bgcolor:'white',transitionDuration:'300ms'},fontWeight:700}}><TwitterIcon/></Link>
          <Link sx={{textDecoration:'none',color:'white',border:1.5,borderColor:'white',borderRadius:'100%',width:42,height:42,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',":hover":{color:'black',bgcolor:'white',transitionDuration:'300ms'},fontWeight:700}}>in</Link>
          <Link sx={{textDecoration:'none',color:'white',border:1.5,borderColor:'white',borderRadius:'100%',width:42,height:42,display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',":hover":{color:'black',bgcolor:'white',transitionDuration:'300ms'},fontWeight:700}}><SportsBasketballIcon/></Link>
        </Box>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
        <Typography variant='h2'component='h2'
        sx={{textTransform:'uppercase',fontSize:24,fontWeight:700}}>About Freelancer</Typography>
        <Typography variant='h3'component='h3'
        sx={{fontSize:20,fontWeight:300,fontFamily:'Lato'}}>Freelance is a free to use, MIT licensed
        <br/> Bootstrap theme created by <Link href="#" sx={{color:'#1abc9c',textDecorationColor:'#1abc9c',cursor:'pointer'}}>Start Bootstrap</Link>.
       </Typography>
      </Box>
    </Container>
  </Box>
}
