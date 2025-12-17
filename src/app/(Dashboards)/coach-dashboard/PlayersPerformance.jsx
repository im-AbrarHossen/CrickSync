'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useSession } from 'next-auth/react';

export default function PlayersPerformance() {
    const { data: session } = useSession();
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState('Batting');
    const [score, setScore] = useState(1);
    const [message, setMessage] = useState('');

    const coachEmail = session?.user?.email;

    // Modal root for App Router
    useEffect(() => {
        Modal.setAppElement('#modal-root'); // layout.jsx তে বানানো div
    }, []);

    // Fetch active players for this coach
    useEffect(() => {
        if (!coachEmail) return;

        const fetchPlayers = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/admissions?coach_email=${coachEmail}`);
                const activePlayers = res.data.admissions.filter(p => p.status === 'active');
                setPlayers(activePlayers);
            } catch (err) {
                console.error(err);
                setPlayers([]);
            }
        };
        fetchPlayers();
    }, [coachEmail]);

    const openModal = player => {
        setSelectedPlayer(player);
        setType('Batting');
        setScore(1);
        setMessage('');
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedPlayer(null);
        setIsModalOpen(false);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!selectedPlayer) return;

        const today = new Date().toISOString().slice(0, 10);

        try {
            await axios.post('http://localhost:8000/performance', {
                player_name: selectedPlayer.name,
                player_email: selectedPlayer.email,
                coach_email: coachEmail,
                type,
                score,
                date: today
            });

            setMessage('Attendance recorded successfully!');

            // Refresh players list
            const res = await axios.get(`http://localhost:8000/admissions?coach_email=${coachEmail}`);
            const activePlayers = res.data.admissions.filter(p => p.status === 'active');
            setPlayers(activePlayers);

            setTimeout(closeModal, 1500);
        } catch (err) {
            console.error(err);
            setMessage(err.response?.data?.message || 'Error recording attendance');
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Players Performance</h1>

            {players.length === 0 ? (
                <p>No active players assigned to you.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {players.map(player => (
                        <div
                            key={player.player_id}
                            className="p-4 border rounded shadow hover:shadow-lg cursor-pointer"
                            onClick={() => openModal(player)}
                        >
                            <h2 className="font-semibold">{player.name}</h2>
                            <p>{player.email}</p>
                            <p>Practice: {player.practice_time}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Record Performance"
                className="bg-white p-6 max-w-md mx-auto mt-20 rounded shadow-lg outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-start"
            >
                {selectedPlayer && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">Record Performance</h2>
                        <p className="mb-4">
                            {selectedPlayer.name} ({selectedPlayer.email})
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 font-semibold">Type</label>
                                <select
                                    value={type}
                                    onChange={e => setType(e.target.value)}
                                    className="w-full border p-2 rounded"
                                >
                                    <option>Batting</option>
                                    <option>Bowling</option>
                                    <option>Fielding</option>
                                    <option>Wicketkeeping</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-1 font-semibold">Score</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={score}
                                    onChange={e => setScore(Number(e.target.value))}
                                    className="w-full border p-2 rounded"
                                />
                            </div>

                            {message && <p className="text-green-600">{message}</p>}

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 border rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </Modal>
        </div>
    );
}
