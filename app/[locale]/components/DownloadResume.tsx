"use client";

import { IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

export default function DownloadResume({
  onDownloadResume,
}: {
  onDownloadResume: (lang: "en" | "th") => void;
}) {

  const t = useTranslations("Hero");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="font-semibold p-6 w-fit"
          variant={"default"}
          size={"lg"}
        >
          <IconDownload size={24} />
          <span className="text-lg">{t("resume")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("downloadResume")}</DialogTitle>
          <DialogDescription className="p-5 flex gap-7 items-center justify-center">
            <Button
              className="font-semibold w-1/2 p-7"
              variant={"default"}
              size={"lg"}
              onClick={() => onDownloadResume("en")}
            >
              <IconDownload size={24} />
              <span className="text-lg">EN</span>
            </Button>
            <Button
              className="font-semibold w-1/2 p-7"
              variant={"default"}
              size={"lg"}
              onClick={() => onDownloadResume("th")}
            >
              <IconDownload size={7024} />
              <span className="text-lg">TH</span>
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
