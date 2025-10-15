'use client';

import { useEffect, useState } from 'react';
import { Button, Flex, Table } from 'antd';
import { App } from 'antd';
import type { User } from '@/shared/types/user';
import { usersService } from '@/services/users';
import { userColumns } from './constants/columns';
import UserFormModal from '@/components/users/UserFormModal';
import ConfirmDeleteModal from '@/components/users/ConfirmDeleteModal';

export default function UsersPage() {
  const { message } = App.useApp();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await usersService.getAll();
      setUsers(data);
    } catch {
      message.error('Ошибка загрузки пользователей');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAdd = async (data: Omit<User, 'id'>) => {
    try {
      await usersService.create(data);
      message.success('Пользователь добавлен');
      fetchUsers();
    } catch {
      message.error('Ошибка добавления пользователя');
    } finally {
      setModalOpen(false);
    }
  };

  const handleEdit = async (data: User) => {
    try {
      await usersService.update(data);
      message.success('Пользователь обновлён');
      fetchUsers();
    } catch {
      message.error('Ошибка обновления');
    } finally {
      setEditUser(null);
    }
  };

  const handleDelete = (id: string) => {
    const found = users.find((u) => u.id === id);
    setDeleteUser(found || null);
  };

  const confirmDelete = async () => {
    if (!deleteUser) return;
    try {
      await usersService.remove(deleteUser.id);
      message.success('Пользователь удалён');
      fetchUsers();
    } catch {
      message.error('Ошибка удаления');
    } finally {
      setDeleteUser(null);
    }
  };

  return (
    <Flex vertical gap={16}>
      <Flex justify="space-between" align="center">
        <h2>Пользователи</h2>
        <Button type="primary" onClick={() => setModalOpen(true)}>
          Добавить пользователя
        </Button>
      </Flex>

      <Table
        dataSource={users}
        columns={userColumns(
          (u) => setEditUser(u),
          (id) => handleDelete(id),
        )}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />

      <UserFormModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onSubmit={(data) => handleAdd(data as Omit<User, 'id'>)}
      />

      {editUser && (
        <UserFormModal
          open={!!editUser}
          onCancel={() => setEditUser(null)}
          onSubmit={(data) => handleEdit(data as User)}
          initial={editUser}
        />
      )}

      {deleteUser && (
        <ConfirmDeleteModal
          open={!!deleteUser}
          user={deleteUser}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteUser(null)}
        />
      )}
    </Flex>
  );
}
