import axios from "axios";
import { serverPath } from "../helpers/path";

export const $api = axios.create({
  baseURL: serverPath,
});
