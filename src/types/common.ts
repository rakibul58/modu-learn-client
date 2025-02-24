import { USER_ROLE } from "../constants/role";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type UserRole = keyof typeof USER_ROLE;

export type ResponseSuccessType = {
  data: {
    result: any;
    meta?: IMeta;
  };
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  success: boolean;
  errorMessages?: string;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
