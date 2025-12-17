'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PlayerDashboard() {
  const { data: session } = useSession();

  const [admission, setAdmission] = useState(null);
  const [performance, setPerformance] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ==============================
     FETCH DATA
  ============================== */
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchData = async () => {
      try {
        /* 1️⃣ Admission */
        const admRes = await fetch("http://localhost:8000/admissions");
        const admData = await admRes.json();

        const myAdmission = admData.admissions?.find(
          (a) => a.email === session.user.email && a.status === "active"
        );

        setAdmission(myAdmission || null);

        /* 2️⃣ Performance */
        const perfRes = await fetch(
          `http://localhost:8000/performance?player_email=${session.user.email}`
        );
        const perfData = await perfRes.json();

        if (perfData.status === "success") {
          setPerformance(perfData.performance || []);
        } else {
          setPerformance([]);
        }

      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  if (loading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  /* ==============================
     UI
  ============================== */
  return (
    <div className="p-6 space-y-8">

      {/* ================= Admission ================= */}
      <div className="border rounded p-4">
        <h1 className="text-2xl font-bold mb-4">Player Dashboard</h1>

        {admission ? (
          <div className="space-y-1">
            <p><b>Name:</b> {admission.name}</p>
            <p><b>Email:</b> {admission.email}</p>
            <p><b>Coach:</b> {admission.coach_name}</p>
            <p><b>Practice:</b> {admission.practice_time}</p>
            <p>
              <b>Status:</b>{" "}
              <span className="text-green-600 font-semibold">
                {admission.status}
              </span>
            </p>
            <p><b>End Date:</b> {admission.end_date}</p>
          </div>
        ) : (
          <p>No active admission found.</p>
        )}
      </div>

      {/* ================= Performance Progress ================= */}
      <div className="border rounded p-4">
        <h2 className="text-xl font-bold mb-4">Performance Progress</h2>

        {performance.length === 0 ? (
          <p>No performance records yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* ================= Performance History ================= */}
      <div className="border rounded p-4">
        <h2 className="text-xl font-bold mb-4">Performance History</h2>

        {performance.length === 0 ? (
          <p>No data available.</p>
        ) : (
          <table className="w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Date</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {performance.map((p) => (
                <tr key={p.id}>
                  <td className="border p-2">{p.date}</td>
                  <td className="border p-2">{p.type}</td>
                  <td className="border p-2 font-semibold">{p.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}
