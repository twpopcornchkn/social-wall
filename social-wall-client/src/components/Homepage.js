import React from "react";
import { Link } from "react-router-dom";
// import MessageTimeline from "./MessageTimeline";
import Feed from "../containers/Feed/Feeds";

const Homepage = (props) => {
  const { currentUser } = props;
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1 className="text-primary font-weight-bold">What's Happening?</h1>
        <h4>New to Drumstick?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return <Feed/>;
    {/* <MessageTimeline
            profileImageUrl={currentUser.user.profileImageUrl}
            username={currentUser.user.username}
          /> */}

};

export default Homepage;
