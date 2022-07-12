import React from 'react'
import axios from "axios"
function index(props) {
const dataRemaining = props.headers["x-ratelimit-remaining"]
  return (
    <div>
        <div className='mt-36 w-2/4 ml-auto mr-auto text-center flex-col'>
        <h1 className='mb-5'>{props.Nasa.title}</h1>
        <img className='w-96' src={props.Nasa.url} alt={props.Nasa.title}/>
        <br/>
        <span>{props.Nasa.explanation}</span>
        <div className="underline">{props.Nasa.copyright}</div>
        <span>{props.Nasa.date}</span>
        <div>x-ratelimit-remaining {dataRemaining}</div>
      </div>
    </div>
  )
}

export default index
export const getStaticPaths = async () => {


  return {
    paths:[
      {
        params:{
          cardActivityId: "1"
        }
      },
      {
        params:{
          cardActivityId: "2"
        }
      }
  ],
    fallback:false
  }
}

export const getStaticProps = async (ctx) => {
    const key_api = "w9wE23aMqnBif3fuaUzVq6i3cq3tLahBherobNYC"
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key_api}`)
    const Nasa = res.data
    const headers = res.headers
    return {
      props:{
        Nasa:Nasa,
        headers:headers
      }
    }
  }
