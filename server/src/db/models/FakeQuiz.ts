/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose, { Schema } from "mongoose";

const FakeQuizSchema: Schema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  result: {
    type: Number,
  },
  questions: [
    {
      type: Object,
      default: "",
    },
  ],
});

// FakeQuizSchema.set("toJSON", {
//   transform: (_, returnedObject) => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     returnedObject.id = <string>returnedObject._id.toString();
//     delete returnedObject._id;
//   },
// });

const FakeQuiz = mongoose.model("FakeQuiz", FakeQuizSchema);
export default FakeQuiz;
