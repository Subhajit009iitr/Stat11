import React from "react";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <div>
      <Typography
        component="box"
        sx={{
          fontSize: "32px",
          float: "left",
          paddingLeft: "30px",
          paddingTop: "72px",
          paddingBottom: "10px",
        }}
      >
        Purple Team v/s Orange Team
        <br />
        <Typography
          component="box"
          sx={{
            color: "#448791",
            fontSize: "20px",
            float: "left",
          }}
        >
          Location, City, State &nbsp;
        </Typography>
        <Typography
          component="box"
          sx={{
            color: "#797979",
            fontSize: "20px",
            float: "left",
          }}
        >
          {" "}
          hehe Overs
        </Typography>
      </Typography>

      <Typography
        component="box"
        sx={{
          color: "#797979",
          fontSize: "20px",
          textAlign: "right",
          paddingTop: "80px",
          paddingRight: "160px",
          float: "right",
        }}
      >
        {" "}
        Toss: <br />
        Purple Team
      </Typography>

      <Typography component="box" sx={{ backgroundColor: "#D9D9D9" }}>
        <hr style={{ width: "96vw" }} />
      </Typography>
    </div>
  );
}
