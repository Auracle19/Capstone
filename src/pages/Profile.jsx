// Profile page. Shows user info and profile details.
import { useEffect, useState } from "react";
import { auth } from "../firebase";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  if (!user) {
    return <div className="PMainC">Loading profile...</div>;
  }

  return (
    <div className="PMainC">
      {/* Sidebar */}
      <aside className="PSidebar">
        <img
          src={user.photoURL || "/assets/react.svg"}
          alt="Profile"
          className="PPic"
        />
        <h2 className="PName">{user.displayName || "User"}</h2>
        <div className="PSidebarBtns">
          <button className="PSidebarBtn">Edit Profile</button>
          <button className="PSidebarBtn">Progress</button>
          <button className="PSidebarBtn">Settings</button>
        </div>
      </aside>
      {/* Main profile content placeholder */}
      <section className="PContent">
        <h3 className="PSectionTitle">Profile Details</h3>
        <p className="PEmail">Email: {user.email}</p>
        <div className="PUserId">User ID: {user.uid}</div>
        <div className="PNote">(More profile info or progress can go here...)</div>
      </section>
    </div>
  );
}

export default Profile;
