import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {toastError}  from '../lib/toastError';

const RealEstate =() =>{
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
        {(!allPost ? <div>downloading</div> 
        
        : allPost.map((post) =>{

          if (post.category === 'realEstate')   return (
            <div className='container mt-5
            ' key={post._id}>
            <div className='row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-10'>
            <Card style={{ width: '65rem' }} key={post._id} className='container m-2 p-4'>
            <h4>
                    <Badge bg="secondary"> Home</Badge>
              </h4>
              <Card.Title>{post.title} {post.zipCode}</Card.Title>
              { post.image && <Card.Img variant="top" className='w-100' src={post.image} />}
              {!post.image && < img className='image-placeholder' src={require('../images/Search & Offer-logos_black.png')} />}
              <Card.Body>
             
              
              
              <Card.Title> <i class="bi bi-geo-alt">{post.Address}</i>  </Card.Title>
                
                <Card.Text>
                  {post.content}
                </Card.Text>
                <Card.Text>
                { post.createdAt}
                </Card.Text>
                
                <Button > <a href='/chat'>message</a></Button>
              </Card.Body>
            </Card>



            </div>
            


            </div>
           
          </div>
      
            )




        }) )}
        
        
        </>
    )



}

export default RealEstate;