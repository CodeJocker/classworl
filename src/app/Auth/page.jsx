'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ContactLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const authData = localStorage.getItem('auth');
    if (authData) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === '123456') {
      localStorage.setItem('auth', JSON.stringify({ email }));
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
