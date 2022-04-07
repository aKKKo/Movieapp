import axios from "axios";
import interceptors from "./interceptors";

const instans = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  //params: {
  //apikey: process.env.VUE_APP_API_KEY,
  //plot: "full"
  //}
});

interceptors(instans);

export default instans;
