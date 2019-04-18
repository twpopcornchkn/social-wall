import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postNewMessage} from "../store/actions/messages";

const TWEET_MAX_LENGTH = 250;

class MessageForm extends Component {
    state = {
        message: "",
        char: 250
    }

    handleNewMessage = e => {
        e.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({message: ""});
        // this.props.history.push("/");
    }

    handleTextChange(e){
        
        if(e.target.value.length <= TWEET_MAX_LENGTH){
            this.setState({
                message: e.target.value,
                char: 250 - e.target.value.length
            });
        
        }
    }

    render(){
        return(
            <form onSubmit={this.handleNewMessage} style={{width:"100%"}} className="clearfix">
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors.message}</div>
                )}
                <textarea 
                    className="form-control" 
                    rows="3"
                    placeholder="Whats' happening?" 
                    onChange={e => this.handleTextChange(e)} 
                    value={this.state.message}>    
                </textarea>
                <small className="text-muted float-left">{this.state.char} chars remaining</small>
                <button type="submit" className="btn btn-success float-right my-2">
                    Submit
                </button>
            </form>

        );
    }
}

function mapStateToProps(state){
    return{
        errors: state.errors
    }
}

export default connect(mapStateToProps, {postNewMessage})(MessageForm);