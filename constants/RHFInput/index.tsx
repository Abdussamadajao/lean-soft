"use client";
import React, { FC } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type IRHFTextFieldProps = {
  name: string;
  placeholder?: string;
  label: string;
  [otherOptions: string]: unknown;
};

const RHFInput: FC<IRHFTextFieldProps> = ({
  name,
  placeholder,
  label,
  ...other
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              {...other}
              className="h-[40px] shadow-none text-gray-600"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFInput;
