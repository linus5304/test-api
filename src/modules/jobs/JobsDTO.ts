import { Application } from "../applications/ApplicationDTO";
import { User } from "../users/UsersDto";

export interface Job {
  id: string;
  title: string;
  description: string;
  department?: string | null;
  salary?: number | null;
  createdAt: Date;
  updatedAt: Date;
  userId?: string | null | undefined;
  user?: User;
  applications?: Application[];
}
