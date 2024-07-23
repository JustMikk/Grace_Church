"use server";

import axios from "axios";

const fetcher = axios.create();
fetcher.defaults.baseURL = "http://localhost:8000";
export default fetcher;
