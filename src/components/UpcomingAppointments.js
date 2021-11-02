import React from "react";
import Typography from "@mui/material/Typography";
import { Card, Stack, Box } from "@mui/material";
import ColorAvatar from "./ColorAvatar";
import useTimeUntil from "../hooks/timeUntil-hook";
const Appointment = ({ date, name }) => {
  return (
    <Card variant="outlined">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ColorAvatar name={name} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography component="h1" varient="h6">
              {name}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 1,
          }}
        >
          <Typography component="h1" varient="h6" color="red">
            {useTimeUntil(date)}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

const UpcomingAppointments = () => {
  const testData = [
    {
      name: "Jeffrey Charles",
      date: "2021-10-30T16:13:16+00:00",
    },
    {
      name: "James Star",
      date: "2021-10-30T16:13:16+00:00",
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <Typography component="h1" variant="h6" sx={{ m: 1 }}>
        Upcoming Appointments
      </Typography>

      <Stack spacing={1}>
        {testData.map(({ name, date }) => {
          return <Appointment name={name} date={date} />;
        })}
      </Stack>
    </Card>
  );
};

export default UpcomingAppointments;
