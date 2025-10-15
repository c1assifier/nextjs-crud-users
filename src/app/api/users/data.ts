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
].map((user) => ({
  ...user,
  id: uuidv4(),
  role: user.role as Role,
}));
