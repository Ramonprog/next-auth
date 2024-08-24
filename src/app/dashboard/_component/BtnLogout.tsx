'use client';

import { signOut } from "next-auth/react";

export function BtnLogout() {
  return (
    <button className="btn btn-primary" onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
  );
}