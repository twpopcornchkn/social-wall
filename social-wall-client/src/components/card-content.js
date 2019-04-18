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
            <div className="col-md-2">
                <div className="small-avatar mx-auto mt-3">
                        <div  style={{backgroundImage: `url("${props.profileImg}")`}}></div>
                </div>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <div className="card-title">
                    <span className="px-1">@{props.userName}</span> 
                     <CardSub createdDate={props.createdDate}/>
                </div>
                <p className="card-text">{props.text}</p>
                {props.image && (
                    <img src={props.image} className="card-img" alt="..."/>
                   
                )}
                
                <CardControl postid={props.postid}/>
            </div>
            </div>
        </div>
    </div>
    );
}

export default cardContent;