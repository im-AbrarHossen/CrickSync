"use client";

import { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();
    const { data: session } = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password
        });

        if (result.error) {
            setErrorMsg(result.error);
        } else {
            setErrorMsg("");
            setShowModal(true);
        }
    };

    const handleModalOk = () => {
        setShowModal(false);
        router.push("/");
    };

    return (
        <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('/assets/images/login-bg.png')" }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Glass Card */}
            <div className="relative backdrop-blur-lg bg-white/15 p-8 rounded-2xl shadow-2xl w-80 border border-white/20">
                <h2 className="text-2xl font-bold text-white text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 rounded-lg bg-white/30 placeholder-white text-white focus:outline-none"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded-lg bg-white/30 placeholder-white text-white focus:outline-none"
                        required
                    />
                    {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
                    <button type="submit" className="bg-red-700 hover:bg-red-800 transition-colors duration-200 p-3 rounded-lg text-white font-semibold cursor-pointer">Login</button>
                </form>

                <p className="text-white text-sm text-center mt-4">
                    Don't have an account? <a href="/authPages/registerPage" className="text-blue-400 hover:underline">Register</a>
                </p>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-72 text-center">
                        <h2 className="text-xl font-bold mb-2 text-green-600">Success!</h2>
                        <p className="text-gray-700 mb-4">Login Completed Successfully.</p>
                        <button onClick={handleModalOk} className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition">Okay</button>
                    </div>
                </div>
            )}
        </div>
    );
}
