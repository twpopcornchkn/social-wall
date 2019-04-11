import React from 'react';
import Moment from 'react-moment';


const cardSubText = (props) =>{
    return(
        <p className="card-text">
            <small className="text-muted">
                <Moment className="text-muted" fromNow>
                    {props.createdDate}
                </Moment>  
            </small>
        </p>
    );
    
}
export default cardSubText;