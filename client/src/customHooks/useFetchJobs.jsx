/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import config from "../utils/config";

const csrftoken = Cookies.get("csrftoken");

const ACTIONS = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
};

const useFetchJobs = (params, page) => {
  console.log(config.jobs_url);
  const [state, dispatch] = useReducer(reducer, { jobs: [], lodaing: true });
  useEffect(() => {
    const getJobs = async () => {
      try {
        dispatch({ type: ACTIONS.MAKE_REQUEST });
        const res = await axios.get(config.jobs_url, {
          headers: {},
          params: { markdown: true, page, ...params },
        });
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      } catch (err) {
        console.log(err);
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
      }
    };
    getJobs();
  }, [params, page]);
  return {
    jobs: [],
    loading: false,
    error: true,
  };
};

export default useFetchJobs;
