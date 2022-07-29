import axios from "axios";
import { server } from "../config/env";

export const api = axios.create({
  baseURL: server,
  timeout: 2500,
});
