import React from 'react';
import './card-control.css'

const cardControl = (props) =>(
    <div className="card-control d-flex flex-row">
    <button type="button" className="btn btn-link" data-toggle="modal" data-target="#commentForm" data-whatever="@torontoraptors">
      <i className="far fa-comments"></i> 10
    </button>
    <button className="btn btn-link"><i className="fas fa-retweet"></i> 42</button>
    <button className="btn btn-link"><i className="far fa-heart"></i> 266</button>
    <button className="btn btn-link"><i className="far fa-envelope"></i></button>         
  </div>

);
export default cardControl;