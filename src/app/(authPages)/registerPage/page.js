"use client";
import { useState } from "react";
import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
    const [showModal, setShowModal] = useState(false);
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;

        const payload = { name, email, password };
        const result = await registerUser(payload);

        if (result.success) {
            // Save credentials for auto-login
            setCredentials({ email, password });

            // Auto-login
            const loginResult = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (loginResult?.ok) {
                setShowModal(true);
            } else {
                alert("Registration succeeded, but login failed!");
            }
        } else {
            alert(result.message || "Registration failed!");
        }
    };

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: "url('/assets/images/login-bg.png')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Glass Card */}
            <div className="relative backdrop-blur-lg bg-white/15 p-8 rounded-2xl shadow-2xl w-80 border border-white/20">
                <h2 className="text-2xl font-bold text-white text-center mb-4">Register</h2>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        className="p-3 rounded-lg bg-white/30 placeholder-white text-white focus:outline-none"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="p-3 rounded-lg bg-white/30 placeholder-white text-white focus:outline-none"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="p-3 rounded-lg bg-white/30 placeholder-white text-white focus:outline-none"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-red-700 hover:bg-red-800 transition-colors duration-200 p-3 cursor-pointer rounded-lg text-white font-semibold"
                    >
                        Register
                    </button>
                </form>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-72 text-center">
                        <h2 className="text-xl font-bold mb-2 text-green-600">Success!</h2>
                        <p className="text-gray-700 mb-4">Registration Completed Successfully.</p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Okay
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
