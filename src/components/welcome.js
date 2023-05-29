import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Welcome = () => {

    return (
        <div className='container-fluid welcome mt-5 '>
            <h3 className='text-center'>Start exploring, sharing, and connecting now. The possibilities are endless!</h3>
            <div className=' text-center'>Looking for something specific or have something amazing to offer? You've come to the right place. Our website is all about connecting people and helping them find exactly what they need.</div>
            <div className='row welcome '>
                <div className='col-sm-1'></div>
                <div className='col-sm-10 mt-5 pt-6  '>
                    <OwlCarousel className='owl-theme' loop margin={10} nav>
                                    <div class='item'>
                                       
                                        <img src={require('../images/rsz_background.jpg')} className='owl-img'  />
                                        <div className='text-center'>Homes and Realestate </div>
                                    </div>
                                    <div class='item'>
                                    <img src={require('../images/furniture new.png')} className='owl-img' />
                                    <div className='text-center'>furniture </div>
                                    </div>
                                    <div class='item'>
                                    <img src={require('../images/jobs.png')} className='owl-img' />
                                    <div className='text-center'>Jobs </div>
                                    </div>
                                   
                                    <div class='item'>
                                    <img src={require('../images/Autos.png')} className='owl-img' />
                                    <div className='text-center'>Vehicles </div>
                                    </div>
                                    <div class='item'>
                                    <img src={require('../images/rsz_it_new.jpg')} className='owl-img' />
                                    <div className='text-center'>Laptops PCs and Phones  </div>
                                    </div>
                                   
                    </OwlCarousel>
                </div>
               

            </div>
            
        </div>
       
      );
}



export default Welcome;