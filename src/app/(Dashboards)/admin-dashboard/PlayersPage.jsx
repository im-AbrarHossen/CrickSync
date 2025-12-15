'use client'
import { useEffect, useState } from 'react'

export default function PlayersPage() {
    const [players, setPlayers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/players')
            .then(res => res.json())
            .then(data => {
                setPlayers(data.players || [])
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading players...</p>

    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-4">All Users</h1>

            <table className="w-full text-sm">
                <thead className="border-b">
                    <tr className="text-left">
                        <th className="py-2">Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(p => (
                        <tr key={p.id} className="border-b last:border-0">
                            <td className="py-2 font-medium">{p.name}</td>
                            <td>{p.email}</td>
                            <td className="capitalize">{p.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
