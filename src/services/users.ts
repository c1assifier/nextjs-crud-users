import type { User } from '@/shared/types/user';
import { API_CONFIG } from '@/shared/configs/api.config';

const { baseUrl } = API_CONFIG;

export const usersService = {
  async getAll(): Promise<User[]> {
    const res = await fetch(`${baseUrl}/users`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Ошибка загрузки пользователей');
    return res.json();
  },

  async create(user: Omit<User, 'id'>): Promise<User> {
    const res = await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('Ошибка добавления пользователя');
    return res.json();
  },

  async update(user: User): Promise<User> {
    const res = await fetch(`${baseUrl}/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('Ошибка обновления пользователя');
    return res.json();
  },

  async remove(id: string): Promise<void> {
    const res = await fetch(`${baseUrl}/users/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Ошибка удаления пользователя');
  },
};
