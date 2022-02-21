import React from "react";
import "./job.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

const Job = function ({ job }: { job: JobInt }) {
  const { img, headLine, location, companyName, companyInfo } = job;
  const openPage = () => window.open(companyInfo);

  return (
    <div className="job">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            style={{ width: "initial" }}
            image={img}
            alt="company logo"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {location}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="fonty"
            >
              {headLine}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {companyName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          size="large"
          variant="contained"
          color="info"
          onClick={openPage}
          style={{
            marginBottom: "1rem",
            marginLeft: "1rem",
            textTransform: "none",
            fontSize: "1.1rem",
          }}
        >
          Job Details/Apply
        </Button>
      </Card>
    </div>
  );
};

export default Job;
