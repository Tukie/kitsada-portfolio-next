"use client";

import Image from "next/image";
import DialogResume from "./DownloadResume";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-evenly min-h-[30rem]">
        <div className="text-center lg:text-left">
          <span className="block text-xl mb-2">
            {t("title")}
          </span>
          <h1 className="text-8xl font-bold mb-10">
            {t("firstName")} <br /> {t("lastName")}
          </h1>

          <DialogResume
            onDownloadResume={(lang) =>
              window.open(`/resume/resume-kitsada-butnam-${lang}.pdf`, "_blank")
            }
          />
        </div>

        <div className="flex flex-col justify-center items-center group">
          <Image
            src="/profile.png"
            alt="hero"
            width={350}
            height={350}
            sizes="100vw sm:50vw lg:400px"
            className="rounded-3xl shadow-lg transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:shadow-blue-500/50 group-hover:shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}
