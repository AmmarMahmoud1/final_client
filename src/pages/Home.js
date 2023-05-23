import { useState, useEffect } from 'react';
import axios from 'axios';
import {toastError}  from '../lib/toastError';

const Home = () => {

    const [allPost, setAllPosts] = useState();

    useEffect(() => {
        (async () => {
          try {
         
            const { data } = await axios('https://searchandoffer.onrender.com/api/offers');
            console.log(data);
            setAllPosts(data);
            
          } catch (error) {
            toastError(
              error.message || 'No posts,  Sorry..!'
            );
            
          }
        })();
      }, []);


      return (
        <>
       { (allPost.map((post) => 
       {
            return (
                <>
                <h1>{post.category}</h1>
                <p>{post.title}</p>
                <p>{post.content}</p>
                <p>{post.Address}</p>
                
     
                </>
            )
        }
        
        ))}
        </>

   
      )
}


export default Home;