import React from 'react';
import { Layout, Typography, Button } from 'antd';

import styles from './index.module.less';

const Index = () => {
  return (
    <Layout.Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography.Title className={styles.title}>Matman</Typography.Title>
      <Button
        type="link"
        style={{ marginLeft: '20px' }}
        onClick={() => {
          window.open('https://matmanjs.github.io/matman/');
        }}
      >
        文档
      </Button>
    </Layout.Header>
  );
};

export default Index;
