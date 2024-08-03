import axios from 'axios';

import React, { useEffect, useState } from 'react';

import requests from '../requests'
// import requests from '../requests';


const Main = () => {

    const [movies,setmovies]=useState([])
    
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setmovies(response.data.results)
            // console.log("Data fetched successfully:", response.data.results);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    
    },[]);

    const truncateString=(str,num)=>{
      if(str?.length>num){
        return str.slice(0,num)+'....'
      }
      else{return str;
      }
    }
    // console.log(movie)
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-fullh-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover'src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
        
        <div className='absolute w-full top-[20%] p-4 md:p-8'> 
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div mt-2>

          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 'bord>Play</button>
          <button className='border  bg-gray-300 text-white border-gray-300 py-2  px-3 ml-5 '>Watch Later</button>
        </div>

        <p className='text-gray-400 text-sm absolute bottom-3 font-bold'>Realeased:{movie?.release_date}</p>

       <p className='w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200 mt-14 '>
        {truncateString(movie?.overview,150)}</p>
      
        </div>
       


      </div>
      
    </div>
  );
};

export default Main;
