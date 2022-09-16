export interface ProdError {
  type: string;
  error: string;
  field?: string;
}

export interface DevError extends ProdError {
  errorObj: Error;
  stack?: string;
}

export interface KnexError {
  detail: string;
}
