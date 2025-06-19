import { useState, useEffect } from "react";
import { auth } from "../firebase";

const sections = [
	{ key: "dashboard", label: "Dashboard" },
	{ key: "progress", label: "Progress" },
	{ key: "edit", label: "Edit Profile" },
	{ key: "settings", label: "Settings" },
];

function Profile() {
	const [active, setActive] = useState("dashboard");
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
			setUser(firebaseUser);
		});
		return () => unsubscribe();
	}, []);

	if (!user) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] text-fuchsia-300">
				<h2 className="text-2xl font-bold mb-2">No user found</h2>
				<p className="mb-4">Please sign in to view your profile.</p>
			</div>
		);
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
				<div className="PName mb-4">{user.displayName || "User"}</div>
				<nav className="flex flex-col gap-2 w-full">
					{sections.map((s) => (
						<button
							key={s.key}
							className={`btn1h w-full text-left ${active === s.key ? "bg-fuchsia-600 text-slate-900" : ""
								}`}
							onClick={() => setActive(s.key)}
						>
							{s.label}
						</button>
					))}
				</nav>
			</aside>
			{/* Main Content */}
			<main className="flex-1 p-6">
				{active === "dashboard" && (
					<div>
						<h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
							User Dashboard
						</h2>
						<p>
							Welcome, {user.displayName || "User"}! Here you can see your
							overall stats and quick links.
						</p>
					</div>
				)}
				{active === "progress" && (
					<div>
						<h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
							Progress
						</h2>
						<p>
							Your learning progress and achievements will show here.
						</p>
					</div>
				)}
				{active === "edit" && (
					<div>
						<h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
							Edit Profile
						</h2>
						<p>Profile editing form goes here.</p>
					</div>
				)}
				{active === "settings" && (
					<div>
						<h2 className="text-2xl font-bold text-fuchsia-400 mb-4">
							Settings
						</h2>
						<p>
							Account and notification settings go here.
						</p>
					</div>
				)}
			</main>
		</div>
	);
}

export default Profile;
