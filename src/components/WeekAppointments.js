import * as React from "react";

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Card } from "@mui/material";

const data = [
  { dayOfWeek: "Monday", numberOfAppointments: 3 },
  { dayOfWeek: "Tuesday", numberOfAppointments: 4 },
  { dayOfWeek: "Wednesay", numberOfAppointments: 5 },
  { dayOfWeek: "Thursday", numberOfAppointments: 6 },
  { dayOfWeek: "Friday", numberOfAppointments: 6 },
];

const WeekAppointments = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis max={5} />

        <BarSeries
          valueField="numberOfAppointments"
          argumentField="dayOfWeek"
        />
        <Title text="Appointments This Week" />
        <Animation />
      </Chart>
    </Card>
  );
};

export default WeekAppointments;
