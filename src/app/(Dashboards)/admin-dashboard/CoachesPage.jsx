'use client'
import { useEffect, useState } from 'react'

export default function CoachesPage() {
  const [coaches, setCoaches] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/coaches')
      .then(res => res.json())
      .then(data => setCoaches(data.coaches || []))
  }, [])

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Coaches</h1>

      <ul className="space-y-3">
        {coaches.map(c => (
          <li
            key={c.id}
            className="border p-4 rounded-lg"
          >
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-gray-500">{c.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
