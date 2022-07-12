import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ActivityCard(props) {
  return (
    <div>
      <Card className='w-96'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={props.image}
            alt={`the picture of ${props.name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {props.species}
            </Typography>
          </CardContent>
        </CardActionArea>
        
      </Card>
    </div>
  )
}

export default ActivityCard