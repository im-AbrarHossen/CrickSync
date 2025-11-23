import React from 'react';
import { signIn } from "next-auth/react"

const LoginButton = () => {
    return (
        <div>
            <a className='btn border-none bg-red-700 hover:bg-red-800 transition-colors duration-200 text-sm text-white' onClick={() => signIn()}>LOGIN</a>
        </div>
    );
};

export default LoginButton;