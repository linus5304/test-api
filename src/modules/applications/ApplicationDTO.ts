import { ApplicationStatus } from "@prisma/client";

export interface Application {
  id: string;
  date: Date;
  resume: string;
  // user: User;
  userId: number;
  // job: Job;
  jobId: number;
  status: ApplicationStatus;
}
