import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const QuizCard = function ({
  logoImg,
  subject,
  description,
}: {
  logoImg: string;
  subject: string;
  description: string;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ aspectRatio: "1", objectFit: "unset" }}
          image={logoImg}
          alt={`${subject} logo`}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontSize={subject.length > 10 ? 18.5 : 25}
            component="div"
            className="fonty"
          >
            {subject}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default QuizCard;
