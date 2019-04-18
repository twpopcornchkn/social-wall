import React from "react";
import { Link } from "react-router-dom";
// import MessageTimeline from "./MessageTimeline";
import UserHome from "../components/UserHome";

const Homepage = (props) => {
  
  const { currentUser } = props;
  // console.log(currentUser);
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-hero">
        <h1 className="text-primary font-weight-bold">How hungry are you?</h1>
        <h4>New to Drumstick?</h4>
        <Link to="/signup" className="btn btn-primary">
          Sign up here
        </Link>
      </div>
    );
  }
  return <UserHome
            profileImageUrl={currentUser.user.profileImageUrl}
            username={currentUser.user.username}
          />;

};

export default Homepage;
