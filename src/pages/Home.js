import { useState, useEffect } from "react";
import axios from "axios";
import { toastError } from "../lib/toastError";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import RealEstate from "../components/RealEstate";

const Home = () => {
  const [allPost, setAllPosts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios("http://localhost:5000/api");
        console.log(data);
        setAllPosts(data);
      } catch (error) {
        toastError(error.message || "No posts,  Sorry..!");
      }
    })();
  }, []);

  function ItemCard() {
    return (
      <div>
        <a href="#"></a>
        <div className="item-card-img">
          <img
            src="../assets/images/products/h4.png"
            alt="img"
            className="rounded-top-7"
          />
          <img
            src="../assets/images/products/h4.png"
            alt="img"
            className="rounded-top-7"
          />
        </div>
        <div className="item-card-text">
          <h4 className="mb-0">
            Home &amp; Furniture<span>(45)</span>
          </h4>
        </div>
      </div>
    );
  }
  const ImageComponent = () => {
    return (
      <div className="item-card-img">
        <img
          src="../assets/images/products/j3.png"
          alt="img"
          className="rounded-top-7"
        />
      </div>
    );
  };

  const AnimalCard = () => {
    return (
      <a href="#">
        <div className="item-card-img">
          <img
            src="../assets/images/products/pe1.png"
            alt="img"
            className="rounded-top-7"
          />
        </div>
        <div className="item-card-text">
          <h4 className="mb-0">
            Animals<span>(09)</span>
          </h4>
        </div>
      </a>
    );
  };

  function ImageCard() {
    return (
      <a href="#">
        <div className="item-card-img">
          <img
            src="../assets/images/products/v2.png"
            alt="img"
            className="rounded-top-7"
          />
        </div>
        <div className="item-card-text">
          <h4 className="mb-0">
            Vehicles<span>(15)</span>
          </h4>
        </div>
      </a>
    );
  }

  return (
    <>
      {/* { 
        (!allPost ? <div>loading..... </div> 
       
          : allPost.map(
            (post) =>  {
            return (
                <>
                  

                    <div className='container' key={post._id}>
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
                          
                          <Button >message</Button>
                        </Card.Body>
                      </Card>



                      </div>
                      <div className='col-sm-2'></div>


                      </div>
                     
                    </div>
                
                
               
                
                
     
                </>
            )
        }
        
        ))} */}

      <RealEstate allPost={allPost} />
    </>
  );
};

export default Home;
