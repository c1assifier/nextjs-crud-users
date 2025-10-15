import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import type { User, Role } from '@/shared/types/user';

export let users: User[] = [
  {
    name: 'Павел Иванов',
    email: 'pavel@example.com',
    phone: '+79997773311',
    role: 'Admin',
  },
  {
    name: 'Наталья Лебедева',
    email: 'nata@example.com',
    phone: '+79994445566',
    role: 'User',
  },
  {
    name: 'Владимир Сергеев',
    email: 'vova@example.com',
    phone: '+79993334422',
    role: 'Manager',
  },
  { name: 'Ольга Попова', email: 'olga@example.com', phone: '+79991119988', role: 'User' },
  {
    name: 'Игорь Михайлов',
    email: 'igor@example.com',
    phone: '+79997775544',
    role: 'Admin',
  },
  { name: 'Ксения Новикова', email: 'ksu@example.com', phone: '+79998883322', role: 'Manager' },
  {
    name: 'Денис Павлов',
    email: 'denis@example.com',
    phone: '+79990001122',
    role: 'User',
  },
  {
    name: 'Юлия Соколова',
    email: 'yulia@example.com',
    phone: '+79997776677',
    role: 'Admin',
  },
  {
    name: 'Роман Волков',
    email: 'roman@example.com',
    phone: '+79998887700',
    role: 'Manager',
  },
  {
    name: 'Елена Васильева',
    email: 'elena@example.com',
    phone: '+79993330011',
    role: 'User',
  },
].map((user) => ({
  ...user,
  id: uuidv4(),
  role: user.role as Role,
}));

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newUser: User = { id: uuidv4(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}
