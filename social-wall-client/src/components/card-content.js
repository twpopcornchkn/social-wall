import React, {useEffect} from 'react';
import CardControl from './card-control';
import CardSub from './card-sub';

const cardContent = (props) =>{
    useEffect(() => {
    //   console.log(props)
    });
  
    return(
    <div className="social-post card my-3">
        <div className="row no-gutters">
            <div className="col-md-4">
            <img src={props.image} className="card-img" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">
                <img className="rounded-circle rounded-sm" src={props.profileImg} alt=""/>
                {props.userName}</h5>
                <p className="card-text">{props.body}</p>
                <CardSub sub={props.subtext}/>
                <CardControl/>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#commentLong">
                    Launch demo modal
                </button>
            </div>
            </div>
        </div>
    </div>
    );
}

export default cardContent;