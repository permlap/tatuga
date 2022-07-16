import React, { useEffect, useState } from 'react'
import axios from "axios"
import { CircularProgress } from '@mui/material'
function index(props) {
  if(!props.data){
    return(
      <div className="w-full flex h-screen bg-white fixed z-50 items-center justify-center ">
        <CircularProgress size={100}/>
      </div>
    )
  }
  return (
    <div>
        <div className='mt-36 w-2/4 ml-auto mr-auto text-center flex-col'>
        <h1 className='mb-5'>{props.data.name}</h1>
        <picture>
        <img className='w-96' src={props.data.image} alt={props.data.name}/>
        </picture>
        <br/>
        <span>{props.data.species}  {props.data.status}</span>
        <div className="underline">{props.data.created}</div>  
      </div>
    </div>
  )
}

export default index


export const getStaticPaths = async () => {
const res = await axios.get(`https://rickandmortyapi.com/api/character`)
const id = res.data.results

const paths = id.map((post) => ({
  params: { cardActivityId: post.id.toString()},
}))

  return {paths, fallback: true}
  // return{
  //   paths: [
  //     {
  //       params: {cardActivityId: page}
  //     }
  // ],
  // fallback: false
  // }
   
}


export const getStaticProps = async (context) => {
  const cardActivityId = await context.params.cardActivityId
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${cardActivityId}`)
  const data = await res.data
    return {
      props:{
        data:data
      }
    }
  }
