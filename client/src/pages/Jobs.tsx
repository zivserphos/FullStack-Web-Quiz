/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import React from "react";
import { Container } from "react-bootstrap";
import useFetchJobs from "../customHooks/useFetchJobs";

// const Jobs = function () {
//   return <>aa</>;
// };

const Jobs = function () {
  const { jobs, loading, error } = useFetchJobs();
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
  // return (
  //   <div
  //     style={{
  //       display: "flex",
  //       justifyContent: "center",
  //       height: "90vh",
  //       alignItems: "center",
  //     }}
  //   >
  //     <h1>how can i serve you</h1>
  //   </div>
  // );
};

export default Jobs;
