'use client';

import { Modal, Form, Input, Select } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, UserFormData } from '@/shared/schemas/userShema';
import { useEffect } from 'react';
import type { User } from '@/shared/types/user';

type Props = {
  open: boolean;
  onCancel: () => void;
  onSubmit: (data: User | Omit<User, 'id'>) => void;
  initial?: User | null;
};

export default function UserFormModal({ open, onCancel, onSubmit, initial }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (initial) reset(initial);
    else reset({ name: '', email: '', phone: '', role: 'User' });
  }, [initial, reset]);

  const handleFormSubmit = (data: User | Omit<User, 'id'>) => {
    if (initial) onSubmit({ ...(data as User), id: initial.id });
    else onSubmit(data as Omit<User, 'id'>);
  };

  return (
    <Modal
      title={initial ? 'Редактировать пользователя' : 'Добавить пользователя'}
      open={open}
      onCancel={onCancel}
      onOk={handleSubmit(handleFormSubmit)}
      okText="Сохранить"
      cancelText="Отмена"
      keyboard={false}
      maskClosable={false}
      destroyOnHidden
    >
      <Form layout="vertical">
        <Form.Item
          label="Имя"
          validateStatus={errors.name ? 'error' : ''}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Иван Иванов" />}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="user@example.com" disabled={!!initial} />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Телефон"
          validateStatus={errors.phone ? 'error' : ''}
          help={errors.phone?.message}
        >
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <Input {...field} placeholder="+79991234567" />}
          />
        </Form.Item>

        <Form.Item label="Роль">
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { label: 'Admin', value: 'Admin' },
                  { label: 'User', value: 'User' },
                  { label: 'Manager', value: 'Manager' },
                ]}
              />
            )}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
