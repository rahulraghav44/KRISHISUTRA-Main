import React from 'react';
import { Link } from 'react-router-dom';

function BottomHome() {
    return ( 
        <>
        <div className='container' id='text-bg'>
            <div className='row'>
                <p>Ut ultricies imperdiet sodales. Aliquam fringilla<br/> aliquam ex sit amet elementum. Proin bibendum <br/> sollicitudin feugiat. Curabitur ut egestas justo,<br/> vitae molestie ante. Integer magna purus sed iaculis dolor, non congue ligula mus.</p>
            </div>
        </div>
        <div style={{marginLeft:'21%'}}>
           <span style={{marginRight:'13%'}}> <Link to=''><button style={{width:"18%",height:"5rem"}}>read more..</button></Link></span>
            <span> 
                <img style={{width:'auto',height:'10%',marginTop:'-6rem'}} src="media/annar.jpg" alt="annar" />
            </span>
        </div>
        </>
     );
}

export default BottomHome;