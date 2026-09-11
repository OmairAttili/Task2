import { Box, CircularProgress, Container, Typography,Alert } from '@mui/material'
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import RecipeReviewCard from '../components/card/Card';

function Home() {
    const [product,setProduct]= useState([]);
    const [Loading,isLoading]= useState(true);
    const [error,isError]= useState("");
    const getProducts = async()=>{
        try{
            const response = await axios.get(`https://dummyjson.com/products`);
            setProduct (response.data.products);
        }catch(e){
            isError(e);
        }finally{
            isLoading(false);
        }
    }
    useEffect(()=>{
        getProducts();
    },[])
    if(Loading){
        return <CircularProgress aria-label="Loading…" size={60}
         sx={{color:'black',py:5,display:'flex',justifyContent:'center',alignItems:'center',mx:'auto'}} />
    }
    if(error){
        return <Box sx={{py:5,width:'30%',mx:'auto'}}>
            <Alert variant="filled" severity="error">
                Sorry,Error to get data
            </Alert>
        </Box>
    }
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