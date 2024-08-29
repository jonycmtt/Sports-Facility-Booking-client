export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};

export interface ApiError {
  data: {
    message: string;
  };
}
