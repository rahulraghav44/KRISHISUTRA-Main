import React from 'react';

function MyMap() {
    return ( 
        <>
         <div className="responsive-map " style={{margin:"0 0 0 15rem"}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56003.827857968456!2d77.22580458045178!3d28.68248921290291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0f509c976f%3A0x9ec1dbe6a1f4fd3c!2sShahdara%2C%20Delhi!5e0!3m2!1sen!2sin!4v1724747109196!5m2!1sen!2sin" style={{
                width:"78rem",
                height:"30rem",
                style:"border:0;",
                allowFullScreen:"",
                loading:"lazy",
                referrerPolicy:"no-referrer-when-downgrade"}}
              ></iframe>
            </div>
        </>
     );
}

export default MyMap;