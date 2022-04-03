/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose, { Schema } from "mongoose";

const JobSchema: Schema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  headLine: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

  companyName: {
    type: String,
    required: true,
  },
  companyInfo: {
    type: String,
  },
});

JobSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    returnedObject.id = <string>returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const Job = mongoose.model("User", JobSchema);
export default Job;
