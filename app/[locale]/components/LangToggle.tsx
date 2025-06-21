"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LangToggle() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState("en");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => {
        setLang(lang === "en" ? "th" : "en");
        router.replace(`/${lang}${window?.location?.hash || ''}`);
      }}
      className="transition-colors duration-200 bg-primary px-6 text-white"
      variant="ghost"
      size={"icon"}
    >
      {lang === "en" ? "EN" : "TH"}
    </Button>
  );
}
