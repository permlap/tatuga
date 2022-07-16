import axios from 'axios'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button } from '@mui/material';



function index(props) {

  return (
    <div>
        <div className='mt-20'>
        <Box sx={{overflowY: "scroll"}}  className='w-full h-full '>
        <ImageList variant='masonry' gap={8} cols={3}>
            {props.data.map((item) => (
        <div key={item.id} className="w-full h-full overflow-hidden float-left  ">
        <Button>
        <picture>
        <ImageListItem  >
          <img className=' duration-150 hover:origin-center pictureZooom hover:block hover:z-50'
            src={`${item.urls.raw}`}
            srcSet={item.urls.regular}
            alt={item.description}
            loading="lazy"
          />
        </ImageListItem>
        </picture>
        </Button>
        </div>
      ))}
        </ImageList>
        </Box>
        </div>
    </div>
  )
}

export default index

export const getStaticProps = async (ctx) => {
const apiKey = "cRQOgQNZ4GoPRJY3euHL1Rl8Dmwmh2WYCi5Gl7IXZ3s"
const res = await axios.get(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
const data = res.data
    return {
        props:{
            data:data
        }
    }
}