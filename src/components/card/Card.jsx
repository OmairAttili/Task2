import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard(props) {
 
  return (
    <Card sx={{textAlign:'center',height:'100%'}}>
      <CardHeader
        title={props.title}
      />
      <CardMedia
        component="img"
        image={props.image}
        alt={props.image}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.desc}
        </Typography>
        <Typography variant='h3'component='h3'
        sx={{mt:3,textAlign:'center',fontSize:25,fontWeight:700}}>{props.price}$</Typography>
            <Rating name="read-only" value={props.rating} readOnly sx={{mt:2}} />
      </CardContent>
    </Card>
  );
}
