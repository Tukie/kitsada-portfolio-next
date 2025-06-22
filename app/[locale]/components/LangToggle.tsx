import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LangToggle() {
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const changeLang = () => {
    router.replace(
      `/${locale === "en" ? "th" : "en"}${window?.location?.hash || ""}`
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={changeLang}
      className="transition-colors duration-200 bg-primary px-6 text-white"
      variant="ghost"
      size={"icon"}
    >
      {locale === "en" ? "EN" : "TH"}
    </Button>
  );
}
