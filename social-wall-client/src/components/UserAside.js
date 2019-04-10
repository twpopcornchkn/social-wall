import React from "react";
import DefaultProfileImg from "../images/default-profile-pic-png-8.png";

const UserAside = ({ profileImageUrl, username }) => (
  <aside className="col-sm-3">
    <div className="panel panel-default">
      <div className="panel-body">
        <img
          src={profileImageUrl || DefaultProfileImg}
          alt={username}
          width="200"
          height="200"
          className="img-thumbnail"
        />
      </div>
      <div className="panel-footer">@{username}</div>
    </div>
  </aside>
);

export default UserAside;
