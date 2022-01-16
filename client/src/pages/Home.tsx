import React from "react";
import QuizCard from "../components/QuizCard";

const Home = function () {
  return (
    <div>
      <h1>Full stack web quizzes</h1>
      <QuizCard />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "center",
        }}
      >
        <h1>Home Sweet Home</h1>
      </div> */}
    </div>
  );
};

export default Home;
