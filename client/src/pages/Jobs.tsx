import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Job from "../components/Job/Job";
import "./styles/jobs.scss";
import PositionedMenu from "../components/DropdownMenu/Dropdown";
import genJobSearchUrl from "../utils/jobs";

const Jobs = function () {
  const [jobs, setJobs] = useState<JobInt[]>([]);
  const [nextJobs, setNextJobs] = useState<JobInt[]>([]);
  const [previousJobs, setPreviousJobs] = useState<JobInt[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [jobTitle, setJobTitle] = useState<string>("");
  useEffect(() => {
    const initialJobs = async () => {
      const { data } = await axios.get(
        genJobSearchUrl(jobTitle, "israel", pageNumber)
      );
      setJobs(data.slice(0, 12));
      setNextJobs(data.slice(12, 24));
    };
    initialJobs();
  }, []);

  const backToLastJobs = async () => {
    setNextJobs(jobs);
    setJobs(previousJobs);
    setPageNumber((prev) => prev - 1);
    const { data } = await axios.get(
      genJobSearchUrl(jobTitle, "israel", pageNumber)
    );
    setPreviousJobs(data.slice(0, 12));
  };

  const updateNextJobs = async () => {
    setPreviousJobs(jobs);
    if (nextJobs.length > 13) {
      setJobs(nextJobs.slice(0, 12));
      setNextJobs((prev) => prev.slice(12, 24));
      return setPageNumber((prev) => prev + 1);
    }
    setJobs(nextJobs);
    setPageNumber((prev) => prev + 1);
    const { data } = await axios.get(
      genJobSearchUrl(jobTitle, "israel", pageNumber)
    );
    return setNextJobs(data);
  };

  useEffect(() => {
    const jobsByTitle = async () => {
      if (!jobTitle) return;

      const { data } = await axios.get(genJobSearchUrl(jobTitle, "israel", 0));
      setJobs(data);
      setPageNumber(0);
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
      <div>
        <div
          className="dropdown-jobs-title"
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
            ? jobs
                .slice(0, 12)
                .map((job) => <Job key={job.companyInfo} job={job} />)
            : "loading"}
        </div>
      </div>
      <div className="next-jobs ">
        <Button
          size="large"
          variant="contained"
          autoCapitalize="none"
          color="secondary"
          onClick={backToLastJobs}
          disabled={!pageNumber}
          style={{
            marginBottom: "1rem",
            marginLeft: "1rem",
            textTransform: "none",
            fontSize: "1.1rem",
          }}
        >
          Previous
        </Button>
        <Button
          size="large"
          variant="contained"
          autoCapitalize="none"
          onClick={updateNextJobs}
          style={{
            marginBottom: "1rem",
            marginLeft: "1rem",
            backgroundColor: "red",
            textTransform: "none",
            fontSize: "1.1rem",
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Jobs;
