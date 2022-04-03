/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose, { Schema } from "mongoose";

const BackendDeveloperSchema: Schema = new mongoose.Schema({
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

BackendDeveloperSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    returnedObject.id = <string>returnedObject._id.toString();
    delete returnedObject._id;
  },
});

const BackendDeveloper = mongoose.model(
  "jobs-backendDeveloper",
  BackendDeveloperSchema
);
export default BackendDeveloper;
