import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <>
      <footer >
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="/media/NaturalFlavour.png" alt="img" style={{margin:"3rem 0 5rem 30rem",width:"20%",height:'35%'}} />
            </div>
          </div>
        <div className="row">
        <div className="col-1"></div>
          <div className="col-3">
            <h2>Contact us</h2>
            <div><i class="fa fa-map-marker p-3" aria-hidden="true">&nbsp;&nbsp;&nbsp;Location</i></div>
            <div><i class="fa fa-phone p-3">&nbsp;&nbsp;&nbsp;+91-7011899506</i></div>
            <div><i class=" fa fa-envelope-o p-3">&nbsp;&nbsp;&nbsp;rahul@gamil.com</i></div>
            <Link to='/support'><button style={{margin:"2rem 0 0 1rem", width:"14rem",height:"5rem"}}> read more...</button></Link>
          </div>
          
          <div className="col-3 mx-2">
            <h2>Service</h2>

            <ul>
              <li className="py-3">item 1</li>
              <li  className="py-3">itwm 2</li>
              <li  className="py-3">item 3</li>
              <li  className="py-3">item 4</li>
            </ul>
          </div>
          <div className="col-4">
            <h2>Our mission</h2>
            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie enim.</p>
            <Link to='' style={{color:'rgb(8, 132, 35)'}}>Read more</Link>
          </div>
        </div>
        </div>
      </footer>
    </>
     );
}

export default Footer;