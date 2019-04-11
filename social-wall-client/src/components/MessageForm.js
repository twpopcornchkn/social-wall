import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postNewMessage} from "../store/actions/messages";

class MessageForm extends Component {
    state = {
        message: ""
    }

    handleNewMessage = e => {
        e.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({message: ""});
        // this.props.history.push("/");
    }

    render(){
        return(
            <form onSubmit={this.handleNewMessage} style={{width:"100%"}}>
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors.message}</div>
                )}
                <textarea 
                    className="form-control" 
                    rows="3"
                    placeholder="Whats' happening?" 
                    onChange={e => this.setState({message: e.target.value})} value={this.state.message}>    
                </textarea>

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