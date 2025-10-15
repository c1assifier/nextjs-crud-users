import { NextResponse } from 'next/server';
import { users } from '../route';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const index = users.findIndex((u) => u.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  users[index] = { ...users[index], ...body };
  return NextResponse.json(users[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const index = users.findIndex((u) => u.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  users.splice(index, 1);
  return NextResponse.json({ success: true });
}
