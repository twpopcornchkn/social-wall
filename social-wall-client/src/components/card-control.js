import React, {Component} from 'react';
import './card-control.css'
import {Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {loadModal, removeModal} from "../store/actions/modal";


class cardControl extends Component {
  state = {
    like: Math.floor(Math.random() * 100)
  }

  handleShow= (postid) => {
    this.props.loadModal(postid);
  }
  render(){
      return(
        <div className="card-control d-flex flex-row">
        <Button type="button" onClick={()=>this.handleShow(this.props.postid)} variant="link">
          <i className="far fa-comments"></i>
        </Button>
        <button className="btn btn-link"><i className="fas fa-retweet"></i> </button>
        <button className="btn btn-link" onClick={(prevState)=>this.setState({like: this.state.like+1})}>
          <i className="far fa-heart"></i> {this.state.like}
        </button>
        <button className="btn btn-link"><i className="far fa-envelope"></i></button>         
      </div>

    );
  } 
}
function mapStateToProps(state){
  return {
      show: state.modal.show
  }
}

export default connect(mapStateToProps, {loadModal, removeModal})(cardControl);
