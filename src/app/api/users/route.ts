import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import type { User } from '@/shared/types/user';

let users: User[] = [];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newUser: User = { id: uuidv4(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

export async function PUT(req: Request) {
  const body = await req.json();
  users = users.map((u) => (u.id === body.id ? { ...u, ...body } : u));
  return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  users = users.filter((u) => u.id !== id);
  return NextResponse.json({ success: true });
}
