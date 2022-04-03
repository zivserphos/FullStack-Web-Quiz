import SalesModel from "../db/models/jobs/sales";
import BackendDeveloperModel from "../db/models/jobs/baceknd-developer";
import FullStackDeveloperModel from "../db/models/jobs/fullstack-developer";
import FrontendDeveloperModel from "../db/models/jobs/frontend-developer";
import DevopsModel from "../db/models/jobs/devops";
import DataAnalystModel from "../db/models/jobs/data-analyst";

const getCorrectJobs = async (
  jobTitle: string,
  _location: string,
  start: number
) => {
  if (jobTitle === "Sales")
    return SalesModel.find().skip(Number(start)).limit(24);
  if (jobTitle === "Backend Developer")
    return BackendDeveloperModel.find().skip(Number(start)).limit(24);
  if (jobTitle === "Frontend Developer")
    return FrontendDeveloperModel.find().skip(Number(start)).limit(24);
  if (jobTitle === "fullstack developer")
    return FullStackDeveloperModel.find().skip(Number(start)).limit(24);
  if (jobTitle === "Devops Engineer")
    return DevopsModel.find().skip(Number(start)).limit(24);
  if (jobTitle === "Data Analyst")
    return DataAnalystModel.find().skip(Number(start)).limit(24);
  console.log(jobTitle);
  throw Error;
};

export default getCorrectJobs;
