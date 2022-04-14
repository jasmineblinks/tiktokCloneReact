import React from "react";
import Layout from "../layout/Layout";
import ProfileHeader from "../profileheader/ProfileHeader";
import SideBar from "../sideNav/SideBar";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <SideBar />
      <Layout />
    </div>
  );
};

export default Profile;
