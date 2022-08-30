import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select, Typography } from 'antd';
import TestTable from "./TestTable/TestTable";

const { Title } = Typography;
const { Option } = Select;
// @ts-ignore
const childrenM: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | JSX.Element[] | null | undefined = [];
const childrenTs: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | JSX.Element[] | null | undefined = [];

for (let i = 1; i < 10; i++) {
  // @ts-ignore
    childrenM?.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
for (let i = 10; i < 36; i++) {
    // @ts-ignore
    childrenTs?.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value: any) => {
  console.log(`Selected: ${value}`);
};

const App = () => {

  return (
      <>
        <Title level={3}>Выберите маршрут</Title>
        <Select
            mode="multiple"
            placeholder="Выберите маршрут"
            onChange={handleChange}
            style={{
              width: '100%',
            }}
        >
          {childrenM}

        </Select>
        <br />
        <Title level={4}>Выберите ТС</Title>
        <Select
            mode="tags"
            placeholder="Выберите ТС"
            onChange={handleChange}
            style={{
              width: '100%',
            }}
        >
          {childrenTs}
        </Select>
          <br />
          <br />
          <TestTable />
      </>
  );
};

export default App;
