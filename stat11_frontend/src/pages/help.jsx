import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Help() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          //width: "100vw",
          height: "100%",
          backgroundColor: "#F8F8F8",
        }}
      >
        <Typography
          component="box"
          sx={{
            fontSize: "32px",
            float: "left",

            paddingTop: "80px",
            paddingLeft: "10px",
            paddingBottom: "10px",
            marginLeft: "40px",
          }}
        >
          Quick Overview
        </Typography>
        <Divider
          sx={{
            color: "#D9D9D9",
            width: "96vw",
            marginLeft: "40px",
          }}
        />

        <Card
          sx={{
            width: "auto",
            maxWidth: "960px",
            height: "auto",
            boxShadow: "4px 4px 4px 4px #D9D9D9",
            borderRadius: "16px",
            padding: "20px",
            margin: "40px",
          }}
        >
          <CardContent
            sx={{
              textAlign: "justify",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Typography
              variant="h4"
              label="heading"
              component="box"
              sx={{
                color: "primary.main",
              }}
            >
              About Us
            </Typography>
            <br />
            <br />
            <Typography
              variant="h6"
              label="heading"
              component="box"
              sx={{
                color: "#595959",
              }}
            >
              Welcome to Stat11! Our app provides real-time updates, statistics,
              and visual analysis for cricket matches, and also allows admins to
              score local matches. Here's a guide to help you get started:
            </Typography>
            <br />
            <br />
            <Divider
              sx={{
                color: "#D9D9D9",
                width: "95%",
              }}
            />
          </CardContent>
          <CardContent
            sx={{
              textAlign: "justify",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Typography
              variant="h5"
              label="heading"
              component="box"
              sx={{
                color: "primary.main",
              }}
            >
              Where can I see live scores?
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              label="heading"
              component="box"
              sx={{
                color: "#595959",
              }}
            >
              The home page displays all of the live and past matches' scores
              ordered by their dates. Each match then has its own analytics and
              detailed scoreboard for more information.
            </Typography>
            <br />
          </CardContent>
          <CardContent
            sx={{
              textAlign: "justify",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Typography
              variant="h5"
              label="heading"
              component="box"
              sx={{
                color: "primary.main",
              }}
            >
              Where are the visual analytics?
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              label="heading"
              component="box"
              sx={{
                color: "#595959",
              }}
            >
              Analytics in the form of charts and graphs and the detailed
              scoreboard of each match is available by clicking on that
              particular match on the home page.
            </Typography>
            <br />
          </CardContent>
          <CardContent
            sx={{
              textAlign: "justify",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Typography
              variant="h5"
              label="heading"
              component="box"
              sx={{
                color: "primary.main",
              }}
            >
              Who can add new matches?
            </Typography>
            <br />
            <br />
            <Typography
              variant="body1"
              label="heading"
              component="box"
              sx={{
                color: "#595959",
              }}
            >
              Scorers can sign up on Stat11 to add new matches and choose from
              existing teams or create new teams. Then they can score these
              matches and the viewers would get real-time updates.
            </Typography>
            <br />
            <br />
          </CardContent>

          <br />
          <CardContent
            sx={{
              textAlign: "center",
              marginLeft: "40px",
              marginRight: "40px",
            }}
          >
            <Typography
              variant="body2"
              label="heading"
              component="box"
              sx={{
                color: "primary.main",
              }}
            >
              If you have any questions or feedback, please contact us at the
              following email address: support@stat11.com.
              <br></br>
              Our support team will be happy to assist you with any issues you
              may have.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Help;
