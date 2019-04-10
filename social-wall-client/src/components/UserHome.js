import React, {Component} from 'react';
import Feed from "../containers/Feed/Feeds";
import UserAside from "./UserAside";


class UserHome extends Component {

    render(){
        return(
            <div className="row">
            <UserAside
                profileImageUrl={this.props.profileImageUrl}
                username={this.props.username}
            />
            <Feed/>
        </div>
        );
    }
}

export default UserHome;