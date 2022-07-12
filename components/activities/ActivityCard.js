import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';

function ActivityCard(props) {
  const router = useRouter();
  function handleCardActivity(){
    router.push("./" + props.id)
  }
  return (
    <div>
      <Card className='w-96'>
        <CardActionArea onClick={handleCardActivity}>
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
        <Fab className='bg-white m-2 relative' aria-label="like">
          <FavoriteIcon  className="text-red-900"/>
        </Fab>
      </Card>
    </div>
  )
}

export default ActivityCard