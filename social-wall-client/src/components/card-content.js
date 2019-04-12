import React, {useEffect} from 'react';
import CardControl from './card-control';
import CardSub from './card-sub';

const cardContent = (props) =>{
    useEffect(() => {
    //   console.log(props.postid)
    });
  
    return(
    <div className="social-post card">
        <div className="row no-gutters">
            {props.image && (
                <div className="col-md-4 p-md-3">
                <img src={props.image} className="card-img" alt="..."/>
                </div>
            )}
            <div className="col-md-8">
            <div className="card-body">
                <p className="card-title">
                <img 
                    className="rounded-circle rounded-sm img-thumbnail" 
                    src={props.profileImg} 
                    width="50" 
                    height="50" 
                    alt={props.userName}/>
                 <span className="px-1">@{props.userName}</span> 
                  <CardSub createdDate={props.createdDate}/></p>
                <p className="card-text">{props.text}</p>
                
                <CardControl postid={props.postid}/>
            </div>
            </div>
        </div>
    </div>
    );
}

export default cardContent;