export type Err<TError> = { type: "Err"; error: TError };

export type Ok<TValue> = { type: "Ok"; value: TValue };

export type Result<TError, TValue> = Err<TError> | Ok<TValue>;

export const Ok = <TValue>(value: TValue): Ok<TValue> => {
  return {
    type: "Ok",
    value,
  };
};

export const Err = <TError>(error: TError): Err<TError> => {
  return {
    type: "Err",
    error,
  };
};
