import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SideBar from "../components/sideBar/sideBar";
import { changeSideBarTabsType } from "../features/sideBar/sideBarSlice";
import HelpCard from "../components/help/helpCard";

function Help() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSideBarTabsType("home"));
  }, []);

  return (
    <>
      {/* <Box
        sx={{
          //width: "100vw",
          height: "100%",
          backgroundColor: "#F8F8F8",
        }}
      > */}
        <SideBar/>
        <HelpCard />
      {/* </Box> */}
    </>
  );
}

export default Help;
