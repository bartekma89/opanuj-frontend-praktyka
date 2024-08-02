import { ChangeEvent, useState } from 'react';
import { ZodError, ZodSchema } from 'zod';

type FormInputType = HTMLInputElement & HTMLTextAreaElement;

export const useForm = <T>(schema: ZodSchema, initialState: T) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<FormInputType>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleValidation = () => {
    return new Promise<T>((resolve, reject) => {
      try {
        console.log(formData);
        const as = schema.parse(formData);
        console.log(as);
        setErrors([]);
        resolve(formData);
      } catch (error) {
        console.log(error);
        if (error instanceof ZodError) {
          setErrors(error.errors.map((error) => error.message));
        }

        reject(error);
      }
    });
  };

  return {
    errors,
    handleChange,
    handleValidation,
    formData,
  };
};
