import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from "@mui/material";
import Sidebar  from './Sidebar';
import axios from 'axios';
import Loader from './Loader';
import { Link, useParams } from 'react-router-dom';
import { demoChannelUrl, demoVideoUrl } from './../utils/constant';


export default function SearchNews() {

  const [videos, setvideos] = useState(null)
  const {searchTerm} = useParams();

  async function getFeed() {
    
    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search` ,{ 
    params :{
      q: searchTerm,
      part : 'snippet',
      maxResults: '50'

    },headers : {
      'X-RapidAPI-Key': '51991306e4msha9b006892b628acp110e8bjsn7de94729839b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }
    )
    setvideos(data.items)
    console.log(data.items);
  }

  useEffect(()=>{
    getFeed()
  },[searchTerm])

  
  return <>
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>


      <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>

        <h2 className='text-white'>Search Results for <span className='text-danger'> '{searchTerm}' </span>Videos</h2>

        {videos ? <div className='row gy-sm-2'>
          {videos.map(function(item,id){
        return <div className="col-lg-3 col-sm-6">

<div className='text-white card-item ' key={id}>

{/* showing videos */}

<Link to={item.id.videoId ? `/Videodetail/${item.id.videoId}` : `/chanel/${item.id.channelId}`}>
<div className="img">

<img className='w-100' style={{height : '300px'}} src ={item.snippet.thumbnails.high.url} alt={item.snippet.title} />

</div>
</Link>


<div className="card-desc" style={{height:'145px'}}>

<Link to={item.id.videoId ? `/Videodetail/${item.id.videoId}` : demoVideoUrl}>

<h6 className='p-2 text-white text-start'>{item.id.videoId ? item.snippet.title.slice(0,60) :''}</h6>


</Link>

<Link to={item.snippet.channelId ? `/chanel/${item.snippet.channelId}` : demoChannelUrl}>

<h6 className='p-2 text-start  text-secondary'>{item.snippet.channelTitle} <i class="fa-solid fa-circle-check"></i></h6>


</Link>
<h6 className='p-2 text-start  text-secondary'>published at : {item.snippet.publishedAt.slice(0,10)}</h6>


</div>

</div>

            </div>


      })}</div>  : <Loader/>}

      </Box>
      
    </Stack>
  
  </>


}
