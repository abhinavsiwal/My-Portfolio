import React from 'react';
import { Typography } from '@material-ui/core';

import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"

const Timeline = () => {
    return (
      <VerticalTimeline>
          <VerticalTimelineElement>
            <Typography variant="h4">Dyal Singh College</Typography>
            <Typography variant="h5">Delhi,India</Typography>
            <Typography variant="body1" paragraph>I have studied in Dyal Singh College</Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Typography variant="h4">Dyal Singh College</Typography>
            <Typography variant="h5">Delhi,India</Typography>
            <Typography variant="body1" paragraph>I have studied in Dyal Singh College</Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Typography variant="h4">Dyal Singh College</Typography>
            <Typography variant="h5">Delhi,India</Typography>
            <Typography variant="body1" paragraph>I have studied in Dyal Singh College</Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <Typography variant="h4">Dyal Singh College</Typography>
            <Typography variant="h5">Delhi,India</Typography>
            <Typography variant="body1" paragraph>I have studied in Dyal Singh College</Typography>
          </VerticalTimelineElement>
      </VerticalTimeline>
    )
}

export default Timeline
