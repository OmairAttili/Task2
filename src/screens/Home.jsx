import { Box, Card, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import RecipeReviewCard from '../components/card/Card';

function Home() {
    const [product,setProduct]= useState([]);
    const getProducts = async()=>{
        const response = await axios.get(`https://dummyjson.com/products`);
        setProduct (response.data.products);
    }
    useEffect(()=>{
        getProducts();
    },[])
  return <>
  <Box sx={{py:10}} id="Products">
    <Container>
        <Typography sx={{fontSize:48,fontWeight:700,textAlign:'center',mb:2}}>Products</Typography>
        <Box sx={{display:'grid',gridTemplateColumns:{md:'repeat(3,1fr)',sm:'repeat(2,1fr)',xs:'repeat(1,1fr)',xl:'repeat(4,1fr)'},gap:3}}>
           {product.map((p)=>
        <Box sx={{border:1,":hover":{borderColor:'gold',border:1.5}}}>
         <RecipeReviewCard 
         title ={p.title} desc={p.description}
          rating={p.rating} image={p.thumbnail} price={p.price}/>
        </Box>
        )}
        </Box>
    </Container>
  </Box>
  </>
}

export default Home