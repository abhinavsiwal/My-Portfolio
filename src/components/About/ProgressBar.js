import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Container, useMediaQuery } from "@material-ui/core";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const ProgressBar = ({ value }) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Container
      style={{
        height: matchesXS ? "120px" : "160px",
        width: matchesXS? "150px" : "200px",
      }}
    >
      <VisibilitySensor>
        {({ isVisible }) => {
          const percentage = isVisible ? value : 0;
          return (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={{
                path: {
                  stroke: theme.palette.text.main,
                  strokeLinecap: "butt",
                },
                text: {
                  fill: theme.palette.text.main,
                },
              }}
            />
          );
        }}
      </VisibilitySensor>
    </Container>
  );
};

export default ProgressBar;
