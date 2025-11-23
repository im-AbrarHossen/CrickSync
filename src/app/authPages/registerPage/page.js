"use client";

import { registerUser } from "@/app/actions/auth/registerUser";


export default function RegisterPage() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const payload = { name, email, password };
        //console.log("data:", payload)
        const result = await registerUser(payload);
        //console.log(result);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-80">
                <h2 className="text-xl font-bold mb-4">Register</h2>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    name="fullName"
                    className="input input-bordered w-full mb-3"
                />
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="input input-bordered w-full mb-3"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="input input-bordered w-full mb-3"
                />
                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>
        </div>
    );
}