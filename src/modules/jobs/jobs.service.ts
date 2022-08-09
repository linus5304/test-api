import { Prisma } from "@prisma/client";
import { prisma } from "../..";
import { Job } from "./JobsDTO";

export const createJob = async (data: Job): Promise<Job> => {
    const result = await prisma.job.create({
      data: {
        title: data.title,
        description: data.description,
        userId: data.userId,
      },
    });
    return result;
  };
  export const getJobs = async (where?: Prisma.JobWhereInput): Promise<Job[]> => {
    const result = await prisma.job.findMany({
      where,
    });
    return result;
  };
  
  export const getJobById = async (id: string): Promise<Job | null> => {
    const result = await prisma.job.findUnique({ where: { id } });
    return result;
  };
  
  export const updateJob = async (
    id: string,
    data: Prisma.JobUpdateInput
  ): Promise<Job> => {
    const result = await prisma.job.update({ where: { id }, data: { ...data } });
    return result;
  };
  