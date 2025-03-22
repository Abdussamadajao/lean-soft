"use client";
import React, { FC } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

type IRHFTextarea = {
  name: string;
  placeholder?: string;
  label: string;
  [otherOptions: string]: unknown;
};

const RHFTextarea: FC<IRHFTextarea> = ({ name, placeholder, label }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              className="h-[100px] shadow-none text-gray-600"
              spellCheck={true}
              autoComplete="on"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextarea;
