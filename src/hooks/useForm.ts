import React from 'react';

export const useForm = <T,>(callback: any, initialState: T) => {
  const [values, setValues] = React.useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };

  return {onChange, onSubmit, values};
};
