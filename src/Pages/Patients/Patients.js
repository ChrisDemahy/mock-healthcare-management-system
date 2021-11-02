import React from "react";
import SidebarDrawer from "../../components/SidebarDrawer";
import Typography from "@mui/material/Typography";
import PatientsLinks from "./PatientsLinks.json";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import WeekAppointments from "../../components/WeekAppointments";
import PatientsDataGrid from "../../components/PatientsDataGrid";
const Patients = () => {
  return (
    <>
      <SidebarDrawer
        navList={PatientsLinks}
        patient="false"
        pageName="All Patients"
      >
        {/* <Typography component="h1" variant="h5">
          Hello
        </Typography> */}
        <PatientsDataGrid />
      </SidebarDrawer>
    </>
  );
};
export default Patients;
