import React, {useEffect} from 'react';
import CardControl from './card-control';
import CardSub from './card-sub';

const cardContent = (props) =>{
    useEffect(() => {
    //   console.log(props)
    });
  
    return(
    <div className="social-post card mb-3">
        <div className="row no-gutters">
            {props.image && (
                <div className="col-md-4">
                <img src={props.image} className="card-img" alt="..."/>
                </div>
            )}
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">
                <img 
                    className="rounded-circle rounded-sm img-thumbnail" 
                    src={props.profileImg} 
                    width="50" 
                    height="50" 
                    alt={props.userName}/>
                {props.userName}</h5>
                <p className="card-text">{props.text}</p>
                <CardSub createdDate={props.createdDate}/>
                <CardControl/>
            </div>
            </div>
        </div>
    </div>
    );
}

export default cardContent;