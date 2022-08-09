import { Job } from "../jobs/JobsDTO";

export interface User {
    id?: string;
    firstname: string;
    lastname: string;
    password: string;
    phone: string;
    email: string;
    jobs?: Job[];
  }