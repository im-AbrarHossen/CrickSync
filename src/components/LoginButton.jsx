import React from 'react';
import { useRouter } from "next/navigation";

const LoginButton = () => {
    const router = useRouter();
    return (
        <button
            className='btn border-none bg-red-700 hover:bg-red-800 transition-colors duration-200 text-sm text-white'
            onClick={() => router.push("/loginPage")}
        >
            LOGIN
        </button>
    );
};

export default LoginButton;
