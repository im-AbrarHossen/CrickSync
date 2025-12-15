'use client'
import { useEffect, useState } from 'react'

export default function AdmissionsPage() {
  const [admissions, setAdmissions] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch('http://localhost:8000/admissions')
      .then(res => res.json())
      .then(data => setAdmissions(data.admissions || []))
  }, [])

  const filtered = admissions.filter(a =>
    filter === 'all' ? true : a.status === filter
  )

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Admissions
        </h1>

        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      <table className="w-full text-sm">
        <thead className="border-b">
          <tr>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Coach</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">End Date</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(a => (
            <tr key={a.id} className="border-b last:border-0">
              <td className="py-2">{a.name}</td>
              <td>{a.coach_name}</td>
              <td>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    a.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {a.status}
                </span>
              </td>
              <td>{a.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
