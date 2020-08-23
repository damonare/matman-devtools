import React, { useMemo } from 'react';
import { Table } from 'antd';
import useConsoleModel from '../../../models/console';

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
];

const Index = () => {
  const { consoleData } = useConsoleModel();

  const data = useMemo(() => {
    return consoleData.map((item) => {
      const url = item.request.url.split('/');
      console.log(item);

      return { name: url[url.length - 1], type: item.request.resourceType };
    });
  }, [consoleData]);

  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Index;
