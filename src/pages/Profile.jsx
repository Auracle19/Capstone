// Profile page. Shows user info and profile details.
// This file has been moved to index.jsx in the same folder. You can safely remove this file or update your imports to use index.jsx instead.

import { useEffect, useState } from "react";
import { auth } from "../firebase";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="PMainC">Loading profile...</div>;
  }
  if (!user) {
    return <div className="PMainC">No user found.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-2 sm:px-4">
      <section className="w-full max-w-lg bg-slate-900 rounded-xl shadow-lg p-4 sm:p-8 flex flex-col gap-2 sm:gap-4">
        <h3 className="font-bold text-xl sm:text-2xl text-fuchsia-400 mb-2 sm:mb-4 text-center">Profile Details</h3>
        <div className="flex flex-col gap-1 sm:gap-2 text-center">
          <p className="text-slate-400 text-base sm:text-lg break-all">Email: <span className="font-semibold text-fuchsia-300">{user.email}</span></p>
          <div className="text-xs sm:text-sm text-slate-500 break-all">User ID: {user.uid}</div>
          <div className="text-slate-500 italic text-xs sm:text-base">(More profile info or progress can go here...)</div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
