import { Request } from 'express';

export type TypedRequest<
  TBody = unknown,
  TParams = Record<string, string>,
  TQuery = Record<string, string>,
> = Request & {
  validatedData: {
    body: TBody;
    params: TParams;
    query: TQuery;
  };
};

export type PaginationQuery = {
  page: number;
  limit: number;
  sort_by?: string;
  sort_order?: 'asc' | 'desc';
};

export type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    pagination: PaginationMeta;
  };
};
