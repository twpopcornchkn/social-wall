import React, {Component} from 'react';
import Feed from "../containers/Feed/Feeds";
import UserAside from "./UserAside";
import MessageForm from "../components/MessageForm";


class UserHome extends Component {

    render(){
        return(
            <div className="row">
            <UserAside
                profileImageUrl={this.props.profileImageUrl}
                username={this.props.username}
            />
                <div className="col-sm-9">
                    <MessageForm/>
                    <Feed/> 
                </div>  
            </div>
        );
    }
}

export default UserHome;