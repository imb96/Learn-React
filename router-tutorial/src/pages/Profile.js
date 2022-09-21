import React from "react";
import { useParams } from "react-router-dom";

const data = {
  Minter: {
    name: "김민재",
    description: "리액트를 좋아하는 개발자",
  },
  Winter: {
    name: "김민정",
    description: "에스파의 멤버",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필</p>
      )}
    </div>
  );
};

export default Profile;
