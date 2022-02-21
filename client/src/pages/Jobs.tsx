/* eslint-disable react/no-danger */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../utils/config";
import Job from "../components/Job/Job";
import "./styles/jobs.scss";
import PositionedMenu from "../components/DropdownMenu/Dropdown";

const Jobs = function () {
  const [jobs, setJobs] = useState<JobInt[]>([]);
  // const [jobInfo, setJobInfo] = useState();
  const [jobTitle, setJobTitle] = useState<string>("");
  useEffect(() => {
    const initialJobs = async () => {
      const { data } = await axios.get(
        `${config.baseUrl}/jobs?jobTitle=sales"&location=israel,israel&start=0`
      );
      setJobs(data);
      // const job = await axios.get(
      //   "https://www.linkedin.com/jobs/view/fullstack-javascript-developer-at-wix-com-2786331400/?trackingId=CIr%2F%2FxQE9UwJJ77ZECQClg%3D%3D&refId=RsdX0uLOs1Ruero2ir5fqw%3D%3D&pageNum=0&position=1&trk=public_jobs_jserp-result_search-card&originalSubdomain=il"
      // );
      // setJobInfo(job.data);
    };
    initialJobs();
  }, []);

  useEffect(() => {
    const jobsByTitle = async () => {
      const { data } = await axios.get(
        `${config.baseUrl}/jobs?jobTitle=${jobTitle}"&location=israel,israel&start=0`
      );
      setJobs(data);
    };
    jobsByTitle();
  }, [jobTitle]);

  return (
    <div
      className="jobs"
      style={{
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      {/* <div className="input-mobile"> */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <PositionedMenu setJobTitle={setJobTitle} jobTitle={jobTitle} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {jobs.length
            ? jobs.map((job) => <Job key={job.companyInfo} job={job} />)
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
