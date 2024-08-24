'use client';

import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen py-2">
      <button className="btn btn-primary" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>Login com GitHub</button>
    </main>
  );
}
