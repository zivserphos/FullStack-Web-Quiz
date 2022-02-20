/* eslint-disable react/no-danger */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import config from "../utils/config";
import Job from "../components/Job/Job";

// const Jobs = function () {
//   return <>aa</>;
// };

const Jobs = function () {
  const [jobs, setJobs] = useState<JobInt[]>([]);
  const [jobInfo, setJobInfo] = useState();
  useEffect(() => {
    const initialJobs = async () => {
      const { data } = await axios.get(
        `${config.baseUrl}/jobs?jobTitle=fullstack developer"&location=israel,israel&start=0`
      );
      setJobs(data);
      const job = await axios.get(
        "https://www.linkedin.com/jobs/view/fullstack-javascript-developer-at-wix-com-2786331400/?trackingId=CIr%2F%2FxQE9UwJJ77ZECQClg%3D%3D&refId=RsdX0uLOs1Ruero2ir5fqw%3D%3D&pageNum=0&position=1&trk=public_jobs_jserp-result_search-card&originalSubdomain=il"
      );
      setJobInfo(job.data);
    };
    initialJobs();
  }, []);
  // return <Container>heydaa</Container>;
  return (
    <div
      style={{
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
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
