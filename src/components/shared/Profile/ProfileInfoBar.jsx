import React from "react";

const ProfileInfoBar = () => {
  return (
    <div>
      <div className="profile_welcome">
        <h1>Welcome {}</h1>
      </div>
      <div className="border border-black">
        <h3>Profile Details</h3>
        <h4>Name:</h4>
        <h4>Date of Birth:</h4>
        <h4>Country:</h4>
        <h4>Preferences:</h4>
      </div>
    </div>
  );
};

export default ProfileInfoBar;
