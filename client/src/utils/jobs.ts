import config from "./config";

const genJobSearchUrl = (
  jobTitle: string,
  location: string,
  pageNumber: number
) =>
  `${config.baseUrl}/jobs?jobTitle=${
    jobTitle || "fullstack developer"
  }&location=${location || "israel"}&start=${pageNumber * 12}`;

export default genJobSearchUrl;
