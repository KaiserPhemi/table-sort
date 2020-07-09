import React from "react";

// third-party libraries
import Table from "antd/es/table";
import DatePicker from "antd/es/date-picker";
import Card from "antd/es/card";
import Row from "antd/es/row";
import Dropdown from "antd/es/dropdown";
import _ from "lodash";

import { messageObj } from "./datum";

// styles
import "./App.scss";

const { RangePicker } = DatePicker;

const App = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "2 Downing Street",
    },
    {
      key: "3",
      name: "Phemi",
      age: 40,
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "5",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "6",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "7",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "8",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "9",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "10",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "11",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "12",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
    {
      key: "13",
      name: "Akinwa",
      age: 60,
      address: "10 Atawewe Street",
    },
  ];

  const dateChange = (date: any, dateString: any) => {
    console.log("From: ", dateString[0], "To: ", dateString[1]);
  };

  const objArr = Object.values(messageObj);
  let totalSum = {
    totalDelivered: 0,
    totalFailed: 0,
    totalPending: 0,
    allTotal: 0,
  };

  const mySums = _.reduce(
    objArr,
    (sums, obj: any) => {
      sums.delivered += obj.delivered || 0;
      sums.failed += obj.failed || 0;
      sums.pending += obj.pending || 0;
      sums.total += obj.total || 0;
      return sums;
    },
    { delivered: 0, failed: 0, pending: 0, total: 0 }
  );
  console.log("the all sums", mySums);
  console.log("The Array", objArr);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: true,
    },
  ];

  const handleTableChange = ({}, {}, sorter: any) => {
    console.log("We got here: Table Sorter", sorter);
  };

  let result = _.groupBy(dataSource, (item: any) => {
    return item.key;
  });

  const datum = [
    {
      name: "jim",
      color: "yellow",
      age: "22",
    },
    {
      name: "jim",
      color: "blue",
      age: "22",
    },
    {
      name: "jim",
      color: "black",
      age: "22",
    },
    {
      name: "jim",
      color: "blue",
      age: "22",
    },
    {
      name: "jim",
      color: "blue",
      age: "22",
    },
    {
      name: "jim",
      color: "black",
      age: "22",
    },
    {
      name: "Sam",
      color: "blue",
      age: "33",
    },
    {
      name: "eddie",
      color: "green",
      age: "77",
    },
  ];

  let Nures: any = _.groupBy(datum, (item) => {
    return item.color;
  });

  let maki = _.forEach(Nures, (value, key) => {
    Nures[key] = _.countBy(Nures[key], (item) => {
      return item.color;
    });
  });

  // console.log("total result", maki);
  const tableFooter = () => {
    return (
      <div>
        <h3>Summary</h3>
        <span>Total Delivered: 70</span>
        <span>Total Pending: 45</span>
        <span>Total Failed: 12</span>
        <span>All: 127</span>
      </div>
    );
  };

  return (
    <div className="main-app">
      <Card>
        <Row>
          <RangePicker allowClear={true} onChange={dateChange} />
        </Row>
        <Table
          footer={tableFooter}
          dataSource={dataSource}
          columns={columns}
          onChange={handleTableChange}
        />
      </Card>
    </div>
  );
};

export default App;
