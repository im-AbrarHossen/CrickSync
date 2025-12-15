'use client'

import { useState, useEffect } from "react";

export default function AdmissionForm() {
    const [email, setEmail] = useState("");
    const [player, setPlayer] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [coaches, setCoaches] = useState([]);
    const [coach, setCoach] = useState({ name: "", email: "" });
    const [practiceTime, setPracticeTime] = useState("");

    // Fetch all coaches on mount
    useEffect(() => {
        const fetchCoaches = async () => {
            try {
                const res = await fetch("http://localhost:8000/coaches");
                const data = await res.json();
                if (data.status === "success") {
                    setCoaches(data.coaches);
                }
            } catch (err) {
                console.error("Error fetching coaches:", err);
            }
        };
        fetchCoaches();
    }, []);

    // Search player by email
    const searchPlayer = async () => {
        if (!email) return alert("Please enter an email");

        try {
            const res = await fetch(`http://localhost:8000/players?email=${email}`);
            const data = await res.json();

            if (data.status === "success") {
                setPlayer(data.player);
                setShowModal(true);
            } else {
                alert("Player not found");
                setPlayer(null);
            }
        } catch (err) {
            console.error(err);
            alert("Error searching player");
        }
    };

    // Submit admission
    const submitAdmission = async () => {
        if (!player) return;
        if (!coach) return alert("Please select a coach");
        if (!practiceTime) return alert("Please select practice time");

        const payload = {
            player_id: crypto.randomUUID(),
            name: player.name,
            email: player.email,
            coach_name: coach.name,
            coach_email: coach.email, // Add this field
            practice_time: practiceTime,
            start_date: new Date().toISOString().split("T")[0],
        };

        try {
            const res = await fetch("http://localhost:8000/admissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.status === "success") {
                alert("Admission Successful");
                window.location.reload();
            } else {
                alert("Failed to admit player");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting admission");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admit New Student</h1>

            <div className="flex mb-4">
                <input
                    type="email"
                    placeholder="Search by player email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 flex-1"
                />
                <button
                    onClick={searchPlayer}
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>

            {/* Modal */}
            {showModal && player && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 w-96 rounded shadow-lg relative">
                        <h2 className="text-xl font-bold mb-4">Admission Form</h2>

                        {/* Player Info */}
                        <input
                            type="text"
                            value={player.name}
                            disabled
                            className="border p-2 w-full mb-2 bg-gray-100"
                        />
                        <input
                            type="email"
                            value={player.email}
                            disabled
                            className="border p-2 w-full mb-2 bg-gray-100"
                        />

                        {/* Coach Name Dropdown */}
                        <select
                            value={coach.name || ""}
                            onChange={(e) => setCoach(prev => ({ ...prev, name: e.target.value }))}
                            className="border p-2 w-full mb-2"
                        >
                            <option value="">Select Coach Name</option>
                            {coaches.map((c) => (
                                <option key={c.id} value={c.name}>
                                    {c.name}
                                </option>
                            ))}
                        </select>

                        {/* Coach Email Dropdown */}
                        <select
                            value={coach.email || ""}
                            onChange={(e) => setCoach(prev => ({ ...prev, email: e.target.value }))}
                            className="border p-2 w-full mb-2"
                        >
                            <option value="">Select Coach Email</option>
                            {coaches.map((c) => (
                                <option key={c.id} value={c.email}>
                                    {c.email}
                                </option>
                            ))}
                        </select>

                        {/* Practice Time */}
                        <select
                            value={practiceTime}
                            onChange={(e) => setPracticeTime(e.target.value)}
                            className="border p-2 w-full mb-2"
                        >
                            <option value="">Select Practice Time</option>
                            <option value="Morning">Morning</option>
                            <option value="Evening">Evening</option>
                        </select>

                        {/* Duration */}
                        <p className="text-sm mb-4">Duration: 90 Days (Auto)</p>

                        {/* Submit */}
                        <button
                            onClick={submitAdmission}
                            className="bg-green-500 text-white w-full py-2 rounded"
                        >
                            Submit
                        </button>

                        {/* Close modal */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
