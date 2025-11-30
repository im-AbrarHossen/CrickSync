'use client';

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from 'react-hot-toast';

export default function Settings() {
  const { data: session, update } = useSession();

  const [name, setName] = useState(session?.user?.name || "");
  const [email, setEmail] = useState(session?.user?.email || "");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(session?.user?.image || "/assets/images/default-avatar.webp");
  const [loading, setLoading] = useState(false);

  // Update local form when session changes (after update)
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name);
      setEmail(session.user.email);
      setPreview(session.user.image || "/assets/images/default-avatar.webp");
    }
  }, [session?.user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => setImage(reader.result);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: password || undefined, image }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      toast.success("Profile updated successfully!");
      setPassword(""); // clear password field

      // Refresh session to immediately reflect changes
      await update();

    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6 relative">
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
        <div className="mb-6">
          <img src={preview} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
          <input type="file" accept="image/*" onChange={handleImageChange} className="block mx-auto" />
        </div>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 mb-4 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition`}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
