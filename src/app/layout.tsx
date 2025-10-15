'use client';

import React from 'react';
import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider, Layout, App } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import './globals.css';

const { Header, Content, Footer } = Layout;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <ConfigProvider
          locale={ruRU}
          theme={{
            token: {
              colorPrimary: '#2f54eb',
              borderRadius: 8,
            },
            components: {
              Button: {
                colorPrimaryHover: '#1d39c4',
              },
            },
          }}
        >
          <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">Test task CRUD App</Header>
            <Content className="content">
              <App>{children}</App>
            </Content>
            <Footer className="footer">
              © {new Date().getFullYear()} CRUD App by Petrov Artem
            </Footer>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
