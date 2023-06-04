import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {toastError}  from '../lib/toastError';
import Spinner from 'react-bootstrap/Spinner';
import {Link } from 'react-router-dom';

const Autos =() =>{
    const [allPost, setAllPosts] = useState();

    useEffect(() => {
        (async () => {
          try {
         
            const { data } = await axios('https://searchandoffer.onrender.com/api');
            console.log(data);
            setAllPosts(data);
            
          } catch (error) {
            toastError(
              error.message || 'No posts,  Sorry..!'
            );
            
          }
        })();
      }, []);

    return(
        <>
        {(!allPost ? <Spinner animation="border" variant="secondary" /> 
        
        : allPost.map((post) =>{

          if (post.category === 'Autos')   return (
            <div className='container mt-5
            ' key={post._id}>
            <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8'>
            <Card style={{ width: '65rem' }} key={post._id}>
            <h4>
                    <Badge bg="secondary"> {post.category}</Badge>
              </h4>
              <Card.Title>{post.title} {post.zipCode}</Card.Title>
              <Card.Img variant="top" className='w-100' src={post.image} />
              <Card.Body>
             
              
              
              <Card.Title> <i class="bi bi-geo-alt">{post.Address}</i>  </Card.Title>
                
                <Card.Text>
                  {post.content}
                </Card.Text>
                <Card.Text>
                { post.createdAt}
                </Card.Text>
                
                <Link to={`/message/${post._id}`}>message</Link>
              </Card.Body>
            </Card>



            </div>
            <div className='col-sm-2'></div>


            </div>
           
          </div>
      
            )




        }) )}
        
        
        </>
    )



}

export default Autos;