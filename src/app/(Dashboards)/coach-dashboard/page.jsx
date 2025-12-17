'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { useSession } from "next-auth/react";

export default function CoachDashboard() {
    const { data: session } = useSession();
    const [players, setPlayers] = useState([]);
    const [performanceData, setPerformanceData] = useState([]);

    useEffect(() => {
        if (!session?.user?.email) return;
        const coachEmail = session.user.email;

        // Fetch active players
        axios.get(`http://localhost:8000/admissions?coach_email=${coachEmail}`)
            .then(res => {
                const activePlayers = res.data.admissions.filter(p => p.status === 'active');
                setPlayers(activePlayers);
            })
            .catch(err => console.error(err));

        // Fetch performance summary
        axios.get(`http://localhost:8000/performance-summary?coach_email=${session.user.email}`)
            .then(res => {
                // Expected format: [{ player_name: "nani", batting: 7, bowling: 5, fielding: 6, wicketkeeping: 4 }]
                setPerformanceData(res.data.summary || []);
            })
            .catch(err => console.error(err));
    }, [session]);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Coach Dashboard</h1>
            <p className="text-gray-600 mb-4">Welcome, {session?.user?.name || "Coach"}</p>

            {/* Active Players */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Your Active Players</h2>
                {players.length === 0 ? (
                    <p className="text-gray-500">No active players assigned to you.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {players.map(p => (
                            <div key={p.player_id} className="p-4 border rounded shadow hover:shadow-lg">
                                <h3 className="font-semibold">{p.name}</h3>
                                <p className="text-gray-500">{p.email}</p>
                                <p className="text-sm mt-1">Practice: {p.practice_time}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Performance Chart */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Performance Summary</h2>
                {performanceData.length === 0 ? (
                    <p className="text-gray-500">No performance data available yet.</p>
                ) : (
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={performanceData}
                            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="player_name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Batting" fill="#8884d8" />
                            <Bar dataKey="Bowling" fill="#82ca9d" />
                            <Bar dataKey="Fielding" fill="#ffc658" />
                            <Bar dataKey="Wicketkeeping" fill="#ff8042" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}
