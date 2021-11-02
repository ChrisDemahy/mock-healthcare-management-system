import React from "react";
import SidebarDrawer from "../../components/SidebarDrawer";
import Typography from "@mui/material/Typography";
import DoctorHomeLinks from "./DoctorHomeLinks.json";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import WeekAppointments from "../../components/WeekAppointments";
const DoctorHome = () => {
  return (
    <>
      <SidebarDrawer
        navList={DoctorHomeLinks}
        patient="false"
        pageName="Doctor's Dashboard"
      >
        {/* <Typography component="h1" variant="h5">
          Hello
        </Typography> */}
        <UpcomingAppointments />
        <WeekAppointments />
      </SidebarDrawer>
    </>
  );
};
export default DoctorHome;
