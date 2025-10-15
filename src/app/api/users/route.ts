import { NextResponse } from 'next/server';
import { users } from './data';
import { v4 as uuidv4 } from 'uuid';
import type { User } from '@/shared/types/user';

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newUser: User = { id: uuidv4(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
