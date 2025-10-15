'use client';

import { Button, Popconfirm, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import type { User } from '@/shared/types/user';

type Props = {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
};

export default function UserActions({ user, onEdit, onDelete }: Props) {
  return (
    <Space>
      <Button icon={<EditOutlined />} onClick={() => onEdit(user)} />
      <Popconfirm
        title="Удалить пользователя?"
        okText="Да"
        cancelText="Нет"
        onConfirm={() => onDelete(user.id)}
      >
        <Button danger icon={<DeleteOutlined />} />
      </Popconfirm>
    </Space>
  );
}
