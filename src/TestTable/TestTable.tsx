import React from 'react';
import 'antd/dist/antd.css';
import { Space, Switch, Table } from 'antd';
const { Column } = Table;

const data = [
    {
        key: 1,
        tsRout: '45',
        tsNumber: '1207',
        trip: '1',
        direction: 'Южная - Ленина',
        timeStart: '10:00',
        children: [
            {
                key: 11,
                tsRout: '',
                tsNumber: '',
                trip: '2',
                direction: 'Ленина-Южная',
                timeStart: '10:30',
            },
            {
                key: 12,
                tsRout: '',
                tsNumber: '',
                trip: '3',
                direction: 'Южная - Ленина',
                timeStart: '11:00',
            },
        ],
    },
    {
        key: 2,
        tsRout: '78',
        tsNumber: '1356',
        trip: '1',
        direction: 'Водников - Зарница',
        timeStart: '10:00',
        children: [
            {
                key: 111,
                tsRout: '',
                tsNumber: '',
                trip: '2',
                direction: 'Зарница - Водников',
                timeStart: '10:30',
            },
            {
                key: 122,
                tsRout: '',
                tsNumber: '',
                trip: '3',
                direction: 'Водников - Зарница',
                timeStart: '11:00',
            },
        ],
    },
]; // rowSelection objects indicates the need for row selection


const TestTable = () => {
    // @ts-ignore
    return (
    <Table dataSource={data}>
        <Column title="Маршрут" dataIndex="tsRout" key="tsRout" />
        <Column title="Бортовой номер" dataIndex="tsNumber" key="tsNumber" />
        <Column title="Рейс" dataIndex="trip" key="trip" />
        <Column title="Направление" dataIndex="direction" key="direction" />
        <Column title="Время выхода" dataIndex="timeStart" key="timeStart" />
        <Column
            title="Action"
            key="action"
            render={(_, record) => (
                <Space size="middle">
                    <a>Добавить запись</a>
                    <a>Удалить запись</a>
                </Space>
            )}
        />
    </Table>
);
};

export default TestTable;