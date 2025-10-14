'use client';

import { Button, Flex, Typography } from 'antd';
import styles from './UsersPage.module.css';

const { Title } = Typography;

export default function UsersPage() {
  return (
    <Flex vertical gap={16}>
      <Flex justify="space-between" align="center">
        <Title level={2} style={{ margin: 0 }}>
          Пользователи
        </Title>
        <Button type="primary" className={styles.addBtn}>
          Добавить пользователя
        </Button>
      </Flex>

      <div className={styles.wrapper}>
        <p>Таблица пользователей</p>
      </div>
    </Flex>
  );
}
