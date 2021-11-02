import React from "react";
import SidebarDrawer from "../../components/SidebarDrawer";
import Typography from "@mui/material/Typography";

const PatientHome = () => {
  return (
    <>
      <SidebarDrawer
        navList={["Home", "Appointments", "Patients"]}
        patient="false"
        pageName="Doctor's Dashboard"
      >
        <Typography component="h1" variant="h5"></Typography>
      </SidebarDrawer>
    </>
  );
};
export default PatientHome;
