'use client';

import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import type { User } from '@/shared/types/user';
import UserActions from '@/components/users/UserActions/UserActions';

export const userColumns = (
  onEdit: (user: User) => void,
  onDelete: (id: string) => void,
): ColumnsType<User> => [
  { title: 'Имя', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Телефон', dataIndex: 'phone', key: 'phone' },
  { title: 'Роль', dataIndex: 'role', key: 'role' },
  {
    title: 'Действия',
    key: 'actions',
    render: (_: unknown, record: User): React.ReactNode => (
      <UserActions user={record} onEdit={onEdit} onDelete={onDelete} />
    ),
  },
];
