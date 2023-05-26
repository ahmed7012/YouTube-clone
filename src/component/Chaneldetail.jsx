import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader';
import { demoChannelUrl, demoVideoUrl } from '../utils/constant';

export default function Chaneldetail() {

    const {id} = useParams();

        // console.log(id);

    const [chanelDetail, setchanelDetail] = useState(null)
    const [videos, setvideo] = useState(null)

    // fetching channel details
    async function getChanelDetail() {  

        const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/channels?${id}`,{
            params: {
                part: 'snippet,statistics',
                    id: id
            },
            headers: {
                'X-RapidAPI-Key': '51991306e4msha9b006892b628acp110e8bjsn7de94729839b',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        })
        setchanelDetail(data.items)
        console.log(data.items);
        
    }

    // fetching videos from channel 
    async function getVideo() {
    
        const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}` ,{ 
        params :{
          part : 'snippet',
          maxResults: '40',    
        },headers : {
          'X-RapidAPI-Key': '51991306e4msha9b006892b628acp110e8bjsn7de94729839b',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      }
        )
        setvideo(data.items)
        // console.log(data.items);
      }

    useEffect(()=>{
        getChanelDetail()
        getVideo()
    } , [])



    

  return <> 

  {chanelDetail && videos  ? <div className='channel' > 



{chanelDetail.map(function ( chanel) {
  
  return  <div className='channel-details'> 

<div className='cover'></div>

  <img src={chanel.snippet.thumbnails.high.url} className=' ' alt={chanel.snippet.title} />

  <h6 className='mt-3 fs-5 text-white'>{chanel.snippet.title} <i class="fa-solid fa-circle-check"></i></h6>
  <h6 className='mt-3  text-white'>{chanel.statistics.subscriberCount} subscribers</h6>
</div>
})}
<div className="container">

<div className="row">
{videos.map(function(item,id){
        return <div className="col-lg-3 col-sm-6">

            <div className='text-white card-item ' key={id}>

              {/* showing videos */}

              <Link to={item.id.videoId ? `/Video/${item.id.videoId}` : `/chanel/${item.id.channelId}`}>
              <div className="img">

              <img className='w-100' style={{height : '300px'}} src ={item.snippet.thumbnails.high.url} alt={item.snippet.title} />

              </div>
              </Link>


              <div className="card-desc" style={{height:'106px'}}>

              <Link to={item.id.videoId ? `/Video/${item.id.videoId}` : demoVideoUrl}>

              <h6 className='p-2 text-white text-start'>{item.id.videoId ? item.snippet.title.slice(0,60) :''}</h6>


              </Link>

              <Link to={item.snippet.channelId ? `/chanel/${item.snippet.channelId}` : demoChannelUrl}>

              <h6 className='p-2 text-start  text-secondary'>{item.snippet.channelTitle} <i class="fa-solid fa-circle-check"></i></h6>


              </Link>


              </div>

              </div>

            </div>


})}
            </div> 
</div>


</div> : <Loader/>}







  </>
}
