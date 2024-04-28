import React,{useState} from 'react'

import { UserAuth } from '../context/Authcontext';
import { db } from '../firebase';
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

import { FaHeart, FaRegHeart } from 'react-icons/fa';
const Movie = ({item}) => {

    
    const [like, setLike] = useState(false);
    const [setSaved] = useState(false);
    const { user } = UserAuth();

    // const movieID = doc(db, 'users', `${user?.email}`);
    const saveShow = async () => {
      try {
        if (user?.email) {
          const docRef = doc(db, 'users', user.email);
          const docSnap = await getDoc(docRef);
    
          if (docSnap.exists()) {
            setLike(!like);
            setSaved(true);
            await updateDoc(docRef, {
              savedShows: arrayUnion({
                id: item.id,
                title: item.title,
                img: item.backdrop_path,
              }),
            });
          } else {
            // Create the document if it doesn't exist
            await setDoc(docRef, {
              savedShows: [{
                id: item.id,
                title: item.title,
                img: item.backdrop_path,
              }],
            });
            setLike(!like);
            setSaved(true);
          }
        } else {
          alert('Please log in to save a movie');
        }
      } catch (error) {
        console.log('Error updating document:', error);
      }
    }
    
    
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title}></img>
                            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                                <p onClick={saveShow}>
                                    {like ?( 
                                    <FaHeart className='absolute top-4 left-4 text-gray-300'/> ):
                                     (
                                     <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                                     )}
                                </p>
                            </div>
                        </div>
  )
}

export default Movie;
