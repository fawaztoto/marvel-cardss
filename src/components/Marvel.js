import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Marvel = () => {
    const {id}=useParams();
    const [item,setItem]=useState()
    const fetch=async()=>{
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=a99cbd535cf5f0263152d4c92d6fe9aa&hash=3c4b794ce017c363cc7f8fc98bf1b7eb`)
          setItem(res.data.data.results[0])
    }
    fetch()
  return (
   <>
     {
        (!item)? "":(
            <div className='content__sp'>
               <div className='right-box'>
                 <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=''  />
               </div>
               <div className='left-box'>
                 <h1>{item.name}</h1>
                 <h4>{item.description}</h4>
               </div>
            </div>
        )     }
   
   </>
  )
}
