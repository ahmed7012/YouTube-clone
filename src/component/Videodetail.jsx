import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

export default function Video() {

  const [videoDetail, setVideoDetail] = useState(null)
  const {id} = useParams()

  async function getVideoDetail() {

    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/videos` ,{ 
      params :{
        part : 'snippet,statistics',
        id : id
  
      },headers : {
        'X-RapidAPI-Key': '51991306e4msha9b006892b628acp110e8bjsn7de94729839b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    }
      )

      setVideoDetail(data.items[0])
      console.log(data.items[0]);
    
  }

  

  useEffect(function () {
    getVideoDetail()
  },[id])


  return <> {videoDetail ?     <div className="container">

    <div className="video-show vh-100" >

    <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} controls width={'100%'} height={'100%'} />

    </div>

  



</div> : <Loader/>}
  
  </>
}
