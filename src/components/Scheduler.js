import React from "react";

import moment from "moment";
import { Container, TableScheduler } from "../style/scheduler.js";

import "font-awesome/css/font-awesome.min.css";
import { Table } from "antd";

const { Column  } = Table;

const data = [
  {
    key: "1",
    name: "Nikola",
    "3/2/2020": "x",
    "24/2/2020": "x",
    "14/2/2020": "x",
    "3/3/2020": "x"
  },
  {
    key: "2",
    name: "Jim Green",
    "12/2/2020": "x",
    "6/2/2020": "x",
    "24/2/2020": "x",
    "13/3/2020": "x"
  },
  {
    key: "3",
    name: "Joe Black",
    "18/2/2020": "x",
    "6/2/2020": "x",
    "14/2/2020": "x",
    "25/3/2020": "x"
  },
  {
    key: "4",
    name: "John Brown 2",
    "7/2/2020": "x",
    "20/2/2020": "x",
    "11/2/2020": "x",
    "2/3/2020": "x"
  },
  {
    key: "5",
    name: "Jim Green 2",
    "12/2/2020": "x",
    "6/2/2020": "x",
    "24/2/2020": "x",
    "13/3/2020": "x"
  },
  {
    key: "6",
    name: "Joe Black 2",
    "4/2/2020": "x",
    "3/2/2020": "x",
    "14/2/2020": "x",
    "23/3/2020": "x"
  }
];

class Scheduler extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment()
    };
  }

  monthDays = () => {
    return this.state.date.clone().daysInMonth(); // dava denovi za mesec
  };

  daysInCurrentMonth = [];

  days = () => {
    let x = this.monthDays();
    let currentMonth = [
      {
        title: "",
        dataIndex: "name",
        key: "name",
        width: 250,
        fixed: "left"
      }
    ];
    for (let i = 1; i <= x; i++) {
      let obj = {};
      const { date } = this.state;
      obj.key = i + "/" + date.format("M/YYYY");
      obj.title = i;
      obj.dataIndex = i + "/" + date.format("M/YYYY");
      obj.isToday =
        moment().format("D/M/YYYY") === obj.dataIndex ? true : false;
      let day = moment(
        date.format("YYYY") + "-" + date.format("M") + "-" + i
      ).format("dddd");
      obj.isWeekend = day === "Saturday" || day === "Sunday" ? true : false;
      console.log(obj);
      currentMonth.push(obj);
      this.daysInCurrentMonth = [...currentMonth];
    }
  };
  previous = () => {
    const { date } = this.state;
    this.setState({
      date: date.subtract(1, "month")
    });
  };

  next = () => {
    const { date } = this.state;
    this.setState({
      date: date.add(1, "month")
    });
  };

  render() {
    this.days();
    return (
      <Container>
        <div className="month-header">
          <div className="month-info">
            <span>
              {this.state.date.format("MMMM")} {this.state.date.format("YYYY")}
            </span>
          </div>
          <div className="arrow-container">
            <span>
              <i className="arrow fa fa-angle-left" onClick={this.previous} />
            </span>
            <span>
              <i className="arrow fa fa-angle-right" onClick={this.next} />
            </span>
          </div>
        </div>
        <TableScheduler>
          <Table
            className="moja-tabela"
            dataSource={data}
            pagination={false}
            bordered={false}
            scroll={{ x: 900 }}
          >
            {this.daysInCurrentMonth.map(day => {
              return <Column
                {...day}
                className={day.isWeekend ? "weekend" : "not-weekend" && day.isToday ? " today" : " not-today" && data.name ? "name" : ""}
              />
            })}
            
          </Table>
        </TableScheduler>
        <br /> <br /> <br />
        <div>
          <p>Month Selected: {this.state.date.format("MMMM")}</p>
          <p>days in current month: {this.monthDays()}</p>
        </div>
      </Container>
    );
  }
}

export default Scheduler;
