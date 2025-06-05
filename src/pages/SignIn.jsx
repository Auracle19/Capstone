import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        setError("");
        try {
            await signInWithPopup(auth, provider);
            navigate("/"); // Redirect to homepage on success
        } catch (err) {
            setError("Google sign-in failed. Please try again.");
        }
    };
    return (
        <div className="container mx-auto px-4 py-8 mt-20 sm:mt-16 flex justify-center items-center min-h-[60vh]">
            <div className="w-full max-w-md bg-slate-800 p-4 sm:p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Sign In</h1>
                <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-2 bg-white text-slate-800 font-semibold rounded-lg py-2 px-4 shadow hover:bg-slate-100 transition mb-4"
                >
                    <img src="/src/assets/google.svg" alt="Google" className="w-6 h-6" />
                    Sign in with Google
                </button>
                {error && <div className="text-red-400 text-center mb-2">{error}</div>}
                <div className="text-center text-sm text-slate-400 mt-4">
                    {`Don't have an account? `}<span className="text-fuchsia-400">Sign up with Google</span>
                </div>
            </div>
        </div>
    );
}

export default SignIn;