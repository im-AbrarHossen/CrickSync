'use client'

import { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function AdminDashboard({ setActiveMenu }) {
  const [stats, setStats] = useState({
    players: 0,
    admissions: 0,
    coaches: 0,
    expired: 0,
  })

  const [chartData, setChartData] = useState([])
  const [recent, setRecent] = useState([])

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    const [players, admissions, coaches, chart] = await Promise.all([
      fetch('http://localhost:8000/players').then(r => r.json()),
      fetch('http://localhost:8000/admissions').then(r => r.json()),
      fetch('http://localhost:8000/coaches').then(r => r.json()),
      fetch('http://localhost:8000/admissions-stats').then(r => r.json()),
    ])

    setStats({
      players: players.total,
      admissions: admissions.total,
      coaches: coaches.total,
      expired: admissions.admissions.filter(a => a.status === 'expired').length,
    })

    setRecent(admissions.admissions.slice(0, 5))
    setChartData(chart.chart)
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">Live overview of academy activities</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Users" value={stats.players} onClick={() => setActiveMenu('players')} />
        <StatCard title="Players" value={stats.admissions} onClick={() => setActiveMenu('admissions')} />
        <StatCard title="Coaches" value={stats.coaches} onClick={() => setActiveMenu('coaches')} />
        <StatCard title="Expired" value={stats.expired} />
      </div>

      {/* Chart + Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">
            Admissions (Last 7 Days)
          </h2>

          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={chartData}>
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line dataKey="admissions" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Recent Admissions</h2>

          <ul className="space-y-3">
            {recent.map(r => (
              <li key={r.id} className="text-sm">
                <p className="font-medium">{r.name}</p>
                <p className="text-gray-500">{r.coach_name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, value, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-linear-to-r from-blue-500 to-blue-600 text-white p-5 rounded-xl shadow hover:scale-[1.02] transition"
    >
      <h3 className="text-sm uppercase opacity-80">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  )
}
