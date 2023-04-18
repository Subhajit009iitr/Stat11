import { React } from "react";
import { Box, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HomeHeader from "../header/homeHeader";
import HelpContentSection from "./helpContentSection";
import { aboutUs, questionList, contactSupportText } from "../../constants/helpText";

function HelpContent() {

  const helpQuestions = questionList.length>0 ?
  questionList.map((question,index) => {
    const sectionBaseMargin = index<questionList.length ?
    <Box 
    sx={{
      m: 2
    }}
    /> :
    <></>

    return (
      <>
        <HelpContentSection 
        question={question['question']}
        text={question['text']}
        />
        {sectionBaseMargin}
      </>
    )
  }) :
  []

  return (
    <>
      <HomeHeader 
      headingText='Quick Overview'
      />
      <Card
      sx={{
        boxShadow: "4px 4px 4px 4px #D9D9D9",
        borderRadius: 3,
        mt: 1,
        mb: 10,
        ml: 10,
        mr: 20,
        pt: 4,
        pb: 12
      }}
      >
        <HelpContentSection 
        question={aboutUs['heading']}
        text={aboutUs['text']}
        />
        <Divider
        sx={{
          backgroundColor: "hint.light",
          opacity: "0.5",
          mb: 4,
          mt: 4,
          ml: 7,
          mr: 7,
        }}
        />
        {helpQuestions}
        <CardContent
          sx={{
            ml: 10,
            mr: 10,
          }}
        >
          <Typography
            variant="body2"
            color="primary.main"
            align="center"
            sx={{
              opacity: "0.75"
            }}
          >
            {contactSupportText}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default HelpContent;
