import React from 'react';

const cardSubText = (props) =>{
    return(
        <p className="card-text">
            <small className="text-muted">
                {props.sub}
            </small>
        </p>
    );
    
}
export default cardSubText;