import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quiz/quiz-reducer";

const store = configureStore({ reducer: quizReducer });

export default store;
