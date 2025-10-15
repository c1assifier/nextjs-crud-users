import { NextResponse } from 'next/server';
import type { User } from '@/shared/types/user';
import { users } from '../route';

export async function PUT(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const body = await req.json();

  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  users[index] = { ...users[index], ...body };
  return NextResponse.json(users[index]);
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
  const { id } = context.params;

  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  users.splice(index, 1);
  return NextResponse.json({ success: true });
}
