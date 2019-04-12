import React from 'react';
import Moment from 'react-moment';


const cardSubText = (props) =>{
    return(
            <small className="text-muted">
                <Moment className="text-muted" fromNow>
                    {props.createdDate}
                </Moment>  
            </small>
    );
    
}
export default cardSubText;