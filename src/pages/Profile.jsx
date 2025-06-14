// Profile page. Shows user info and profile details.
import { useEffect, useState } from "react";
import { auth } from "../firebase";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  if (!user) {
    return <div className="container mx-auto px-4 pt-[64px] pb-8 mt-6 flex flex-col md:flex-row gap-8 max-w-4xl">Loading profile...</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-[64px] pb-8 mt-6 flex flex-row gap-4 max-w-4xl">
      {/* Sidebar */}
      <aside className="asideS">
        <img
          src={user.photoURL || "/assets/react.svg"}
          alt="Profile"
          className="PPic"
        />
        <h2 className="PName">{user.displayName || "User"}</h2>
        <div className="divA">
          <a href="#" className="AA">Edit Profile</a>
          <a href="#" className="AA">Progress</a>
          <a href="#" className="AA">Settings</a>
        </div>
      </aside>
      {/* Main profile content placeholder */}
      <section className="flex-1 bg-slate-900 rounded-xl shadow-lg p-3 sm:p-8 min-h-[300px] ml-2">
        <h3 className="font-bold text-lg text-fuchsia-400 mb-4">Profile Details</h3>
        <p className="text-slate-400 mb-2">Email: {user.email}</p>
        <div className="text-xs text-slate-500 mb-2">User ID: {user.uid}</div>
        <div className="text-slate-500 italic">(More profile info or progress can go here...)</div>
      </section>
    </div>
  );
}

export default Profile;
