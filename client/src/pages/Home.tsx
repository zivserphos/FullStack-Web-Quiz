import React from "react";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import quizzesInfo from "../utils/quizzesInfo";
import "./styles/home.scss";

const Home = function () {
  return (
    <div className="home">
      <h1>All Linkedin quizzes</h1>
      <Grid
        container
        direction="row"
        spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
        alignItems="streach"
        style={{ height: "100%", width: "100%", minHeight: "280px" }}
      >
        {quizzesInfo.map((quizInfo) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={quizInfo.subject}>
            <NavLink className="navlink" to={`/${quizInfo.subject}`}>
              <QuizCard
                logoImg={quizInfo.img}
                subject={quizInfo.subject}
                description="lurem ipsum lurm ipsum"
              />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
