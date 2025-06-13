// Sign In page. Handles Google sign-in and error display.
// Redirects to homepage on successful sign-in.

import { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(false);
            if (user) {
                navigate("/"); // If signed in, go home
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        // Only show popup after auth check is done and user is not signed in
        if (!loading && !auth.currentUser) {
            signInWithPopup(auth, provider)
                .then(() => {
                    navigate("/");
                })
                .catch(() => {
                    navigate("/");
                });
        }
    }, [loading, navigate]);

    return null; // This page shows nothing
}

export default SignIn;