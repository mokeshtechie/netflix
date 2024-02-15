import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/authContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {AiOutlineClose} from "react-icons/ai"

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.SavedShows);
    });

    // Cleanup the subscription when the component unmounts or when user changes
    return () => unsubscribe();
  }, [user?.email]);


  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>my Shows</h2>
      <div className='relative flex item-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block my-14"
        />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies &&
            movies.map((item, id) => (
              <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='block h-auto w-full' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center item-center h-full text-center my-12'>{item?.title}</p>
                  <p  onClick={()}className='absolute text-gray-300 top-4 right-4'><AiOutlineClose/></p>
                </div>
              </div>
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block my-14"
        />
      </div>
    </>
  );
};

export default SavedShows;
