'use client';

import { Modal } from 'antd';
import type { User } from '@/shared/types/user';

type Props = {
  open: boolean;
  user?: User | null;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDeleteModal({ open, user, onConfirm, onCancel }: Props) {
  return (
    <Modal
      title="Подтверждение удаления"
      open={open}
      onOk={onConfirm}
      onCancel={onCancel}
      okText="Удалить"
      cancelText="Отмена"
      okButtonProps={{ danger: true }}
      destroyOnHidden
    >
      <p>
        Вы действительно хотите удалить пользователя <strong>{user?.name || 'без имени'}</strong>?
      </p>
    </Modal>
  );
}
