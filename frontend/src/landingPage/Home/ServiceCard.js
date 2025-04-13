import React from 'react';


function ServiceCard({link,name,description}) {
    return (  
        <div className='container'>
            <div className='row'>
                <div className='col-6 mx-5'>
                    <img src={link} alt= "ServiceImage"></img>
                </div>
                <div className='col-6'>
                    <div className='ServiceName'>
                        <h5>{name}</h5>
                    </div>
                    <div className='ServiceDescription'>
                        <p>{description}</p>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default ServiceCard;