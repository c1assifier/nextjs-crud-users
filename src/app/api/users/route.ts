import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import type { User, Role } from '@/shared/types/user';

let users: User[] = [
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
  {
    name: 'Максим Никитин',
    email: 'max@example.com',
    phone: '+79995556622',
    role: 'Admin',
  },
  {
    name: 'Дарья Громова',
    email: 'daria@example.com',
    phone: '+79997778899',
    role: 'User',
  },
  {
    name: 'Александр Ефимов',
    email: 'alex@example.com',
    phone: '+79992224455',
    role: 'Manager',
  },
  {
    name: 'Софья Белова',
    email: 'sofia@example.com',
    phone: '+79998886611',
    role: 'User',
  },
  {
    name: 'Артём Кузнецов',
    email: 'artem@example.com',
    phone: '+79995554433',
    role: 'User',
  },
  {
    name: 'Мария Тихонова',
    email: 'maria@example.com',
    phone: '+79993338855',
    role: 'Manager',
  },
  {
    name: 'Виктор Смирнов',
    email: 'viktor@example.com',
    phone: '+79990002211',
    role: 'Admin',
  },
  {
    name: 'Алина Морозова',
    email: 'alina@example.com',
    phone: '+79998880077',
    role: 'User',
  },
  {
    name: 'Егор Лавров',
    email: 'egor@example.com',
    phone: '+79991114455',
    role: 'Manager',
  },
  {
    name: 'Татьяна Ковалева',
    email: 'tanya@example.com',
    phone: '+79995557722',
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
