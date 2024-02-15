import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './movie';
const Row = ({title,fetchURL,rowId}) => {
  const [movies,setMovies]= useState([])
 
  
  useEffect(()=>{
    axios.get(fetchURL).then((response) => {
       setMovies(response.data.results)
    })})


  const slideLeft = () => {
    var slider = document.getElementById('slider'+rowId);
    slider.scrollLeft = slider.scrollLeft-500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider'+rowId);
    slider.scrollLeft = slider.scrollLeft+500;
  };
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex item-center group'>
      <MdChevronLeft  onClick={slideLeft} size={40} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block my-14 "/>
      <div id={'slider'+ rowId} className='w-full h-ful overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide  relative'>
       {movies.map((item,id) => (
         <Movie key={id} item={item}/>
       ))}
      </div>
      <MdChevronRight  onClick={slideRight} size={40} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block my-14"/>
    </div>
    </>
  )
}

export default Row