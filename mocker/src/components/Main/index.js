import React from 'react';
import { Layout } from 'antd';
import Console from './components/Console';

import styles from './index.module.less';

const Index = () => {
  return (
    <Layout.Content
      style={{
        marginTop: 64,
        display: 'flex',
        height: 'calc(100vh - 80px)',
      }}
    >
      <div
        className={styles.siteLayoutBackground}
        style={{
          padding: 12,
          minHeight: 380,
          height: '100%',
          width: '100%',
        }}
      >
        <Console />
      </div>

      {/* <div
        className={`${styles.siteLayoutBackground} ${styles.editorContainer}`}
        style={{ padding: 12, height: '100%', width: '100%', minWidth: 300 }}
      >
        <Editor />
      </div> */}
    </Layout.Content>
  );
};

export default Index;
