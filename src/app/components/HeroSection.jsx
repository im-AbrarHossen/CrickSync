import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <section className="relative h-[70vh] flex items-center justify-center pt-32 md:pt-10 lg:pt-15">
                {/* Background image with gradient overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "linear-gradient(135deg, rgba(45, 40, 101, 0.85), rgba(150, 44, 46, 0.85)), url('/assets/images/CrickSync-BG.png')",
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-8">
                    {/* Text Section */}
                    <div className="max-w-xl text-white">
                        <h1 className="text-3xl lg:text-5xl md:text-4xl font-semibold leading-tight mb-4">
                            A modern web platform that connects cricket academies, coaches, and players
                        </h1>
                        <p className="text-lg opacity-90 mb-6">
                            Making training, performance tracking, and communication smarter and more efficient
                        </p>
                        <a
                            href="#start"
                            className="btn bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-colors duration-200 text-white font-semibold  rounded-full shadow-lg"
                        >
                            Get started now
                        </a>
                    </div>

                    {/* Play Button Card */}
                    <div className="relative w-64 h-40 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg">
                        <a
                            href='https://youtu.be/UX5CfM3KsH0?si=ZPqODZEviEA7VeBj'
                            target='_blank'
                            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                            aria-label="Play video"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#e7000b"
                                viewBox="0 0 24 24"
                                className="w-8 h-8"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Curved SVG Bottom */}
                <svg
                    className="absolute bottom-0 left-0 w-full text-white"
                    viewBox="0 0 1440 120"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M0,0 C240,80 480,80 720,40 C960,0 1200,60 1440,30 L1440,120 L0,120 Z"
                    />
                </svg>
            </section>
        </div>
    );
};

export default HeroSection;