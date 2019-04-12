import React, {Component} from 'react';
import CardContent from '../../../components/card-content';
import SinglePost from "../SinglePost";
import {Modal} from 'react-bootstrap';
import {loadModal, removeModal} from "../../../store/actions/modal";
import {connect} from "react-redux";


class SocialPost extends Component {
  
    handleClose = () => {
        this.props.removeModal();
    }

    handleShow= () => {
        this.props.loadModal();
    }
    render(){
        const postElements =[];
        // console.log(this.props.posts)
        for(let key in this.props.posts){
            postElements.push({
                id: key,
                ...this.props.posts[key]
            })
        }
        //sort by createdDate descendingly 
        postElements.sort(function(a, b){return b.createdDate - a.createdDate});
        
        const Posts = postElements.map(post =>{
            return (
                <article key={post.id}>
                    <CardContent 
                    postid={post.id} 
                    userName={post.username}
                    image={post.image}
                    profileImg={post.profileImg}
                    text={post.text}
                    createdDate={post.createdDate}/>
                </article>
            );
        });

        return (
            <div>
            {Posts}
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <SinglePost posts = {this.props.posts}/>
                        </Modal.Body>
                </Modal>
            </div>
            
        );
    }
}

function mapStateToProps(state){
    return {
        show: state.modal.show
    }
}

export default connect(mapStateToProps, {loadModal, removeModal})(SocialPost);
