"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconSend2, IconLoader2 } from "@tabler/icons-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <span
      className={`block mt-2 bg-red-600 rounded-full py-1 px-4 text-white w-fit ${
        message ? "" : "hidden"
      }`}
    >
      {message}
    </span>
  );
};

export default function Contact() {

  const t = useTranslations("Contact");

  const schema = z.object({
    name: z.string().min(1, "กรุณากรอกชื่อ"),
    email: z.string().email("กรุณากรอกอีเมล"),
    message: z.string().min(1, "กรุณากรอกข้อความ"),
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const { success, error } = schema.safeParse(form);

    if (!success) {
      const { errors } = error;
      const storedErrors = {
        name: "",
        email: "",
        message: "",
      };
      errors.forEach((error) => {
        storedErrors[error.path[0] as keyof typeof storedErrors] =
          error.message;
      });
      setFormError(storedErrors);
    }

    return success;
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormError({
      name: "",
      email: "",
      message: "",
    });

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/myyqgwbd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const { ok } = response;

      if (!ok) {
        throw new Error("Something went wrong");
      }

      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mb-15 text-white ">
        <h2 className="text-3xl font-semibold mb-2">{t("title")}</h2>
        <p>
          {t("description")}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 max-w-xl mx-auto">
          <div>
            <Label htmlFor="name" className="text-white font-semibold mb-4">
              {t("name")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              className="!bg-white !text-black"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <ErrorMessage message={formError.name} />
          </div>
          <div>
            <Label htmlFor="email" className="text-white font-semibold mb-4">
              {t("email")} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              className="!bg-white !text-black"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <ErrorMessage message={formError.email} />
          </div>
          <div>
            <Label htmlFor="message" className="text-white font-semibold mb-4">
              {t("message")} <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              className="!bg-white !text-black min-h-28"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <ErrorMessage message={formError.message} />
          </div>

          <Button
            type="submit"
            className="w-fit mx-auto font-semibold !bg-white text-primary mt-5 cursor-pointer"
            size="lg"
            disabled={loading}
            variant={"default"}
          >
            {loading ? (
              <IconLoader2 size={24} className="animate-spin" />
            ) : (
              <IconSend2 size={24} />
            )}
            {t("send")}
          </Button>
        </div>
      </form>
    </>
  );
}
