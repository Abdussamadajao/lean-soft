"use client";
import { ReactNode } from "react";
// form
import {
  FieldValues,
  FormProvider as Form,
  UseFormReturn,
} from "react-hook-form";

// ----------------------------------------------------------------------
// generics
type IFormProviderProps<T extends FieldValues> = {
  children: ReactNode;
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
};

export default function FormProvider<T extends FieldValues = FieldValues>({
  children,
  onSubmit,
  methods,
}: IFormProviderProps<T>) {
  return (
    <Form {...methods}>
      <form
        data-testid="form-provider"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </Form>
  );
}
