"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, RHFInput, RHFTextarea } from "@/constants";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  subject: z.string().min(1, "Subject is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(phoneRegex, "Invalid phone number format")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onChange",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/send-email", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        form.reset();
      }
    } catch (error) {
      let errorMessage = "Failed to send message. Please try again later.";

      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.message || errorMessage;
      }

      toast.error(errorMessage);
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container-custom py-11">
      <div className="py-20 pb-[70px] rounded-lg">
        <h1 className="text-[28px] capitalize text-black mb-5 font-medium leading-6">
          Let's Start the Conversation.
        </h1>

        <Form methods={form} onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RHFInput name="name" label="Your Name" aria-label="Your Name" />
            <RHFInput
              name="email"
              label="Email"
              type="email"
              aria-label="Email Address"
            />
            <RHFInput
              name="phone"
              label="Phone Number"
              type="tel"
              aria-label="Phone Number"
            />
            <RHFInput
              name="subject"
              label="Subject"
              aria-label="Message Subject"
            />
          </div>

          <div className="col-span-2 mt-4">
            <RHFTextarea
              name="message"
              label="Message"
              rows={5}
              aria-label="Your Message"
            />
          </div>

          <div className="col-span-2 mt-4">
            <Button
              type="submit"
              className="w-full h-[48px] text-xl font-semibold bg-electblue text-white hover:bg-transparent hover:text-electblue cursor-pointer hover:border hover:border-electblue transition-colors duration-300"
              disabled={isSubmitting || !form.formState.isValid}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
