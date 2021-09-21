import React from "react";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";



const Timeline = () => {
  const theme = useTheme();
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{
          ...theme.border,
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
        icon={<SchoolIcon style={{ color: theme.palette.secondary.light }} />}
        iconStyle={{ backgroundColor: theme.palette.text.main }}
      >
        <Typography variant="h4" style={{fontSize:"1.8rem", fontWeigth:900}}>
          Dyal Singh College,University of Delhi
        </Typography>
        <hr />
        <Typography variant="body1" style={{fontSize:"1.2rem"}}>
          Bachelor of Science (BSc) Honours in Computer Science
        </Typography>
        <Typography variant="h6" style={{fontSize:"1rem", fontFamily:"roboto",fontWeight:500}}>GPA-7.5</Typography>
        <Typography variant="body1" style={{fontSize:"1.2rem"}}>
          2018-2021
        </Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          ...theme.border,
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
        icon={<SchoolIcon style={{ color: theme.palette.secondary.light }} />}
        iconStyle={{ backgroundColor: theme.palette.text.main }}
      >
        <Typography variant="h4" style={{fontSize:"1.8rem", fontWeigth:900}}>Gurukul Kurukshetra,Haryana</Typography>
        <hr />
        <Typography variant="body1" style={{fontSize:"1.2rem"}}>
          All India Senior School Certificate Examination (AISSCE)
        </Typography>
        <Typography variant="h6" style={{fontSize:"1rem", fontFamily:"roboto",fontWeight:500}}>Non-Medical - 90%</Typography>
        <Typography variant="body1" style={{fontSize:"1.2rem"}}>
          2012-2018
        </Typography>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{
          ...theme.border,
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
        icon={<SchoolIcon style={{ color: theme.palette.secondary.light }} />}
        iconStyle={{ backgroundColor: theme.palette.text.main }}
      >
        <Typography variant="h4" style={{fontSize:"1.8rem", fontWeigth:900}}>
          SC Bose Vidyapeeth School,Uttar Pradesh
        </Typography>
        <hr />
        <Typography variant="body1" style={{fontSize:"1.2rem"}}>Primary School</Typography>
        <Typography variant="body1" style={{fontSize:"1.2rem"}}>
          2004-2012
        </Typography>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
