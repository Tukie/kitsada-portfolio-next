import { IconCircleFilled } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";

export default function Experiences() {
  const t = useTranslations("Experience");

  const getRange = (startDate: string, endDate: string) => {
    let start = dayjs(startDate);
    const end = dayjs(endDate);

    const years = end.diff(start, "year");
    start = start.add(years, "year");

    const months = end.diff(start, "month");
    start = start.add(months, "month");

    const days = end.diff(start, "day");

    return `${years !== 0 ? `${years} ${t("year")}` : ""} ${months} ${t(
      "month"
    )} ${days} ${t("day")}`;
  };

  const personalData = [
    {
      title: t("jobs.0.period"),
      range: getRange("2023-07-10", dayjs().format("YYYY-MM-DD")),
      company: t("jobs.0.company"),
      position: t("jobs.0.position"),
      description: t("jobs.0.description"),
    },
    {
      title: t("jobs.1.period"),
      range: getRange("2023-04-01", "2023-06-17"),
      company: t("jobs.1.company"),
      position: t("jobs.1.position"),
      description: t("jobs.1.description"),
    },
  ];

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      {/* Stepper */}
      <div className="flex flex-col gap-10 lg:gap-0">
        {personalData.map((data, index) => (
          <div
            className={`flex w-full gap-8 relative ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            key={data.title}
          >
            {/* Content */}
            <div className="w-full">
              <IconCircleFilled
                size={10}
                className="absolute top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary ring-2 ring-primary rounded-full ring-offset-3 
                  hidden lg:block"
              />
              <div
                key={data.title}
                className="rounded-2xl backdrop-blur-lg p-8 border-2 bg-white/5 border-white/10 shadow-lg"
              >
                <div className="flex flex-col xl:flex-row items-center justify-center text-lg font-semibold text-white bg-primary w-full rounded-full p-2 text-center mb-5 gap-x-3 gap-y-2">
                  <p>{data.title}</p>
                  <p>({data.range})</p>
                </div>
                <div>
                  <p className="wrap-anywhere font-semibold mb-1">
                    {data.company}
                  </p>
                  <p className="wrap-anywhere font-semibold mb-5">
                    {data.position}
                  </p>
                  <p className="wrap-anywhere">{data.description}</p>
                </div>
              </div>
            </div>
            {/* Vertical Line */}
            <div className="w-[5px] hidden lg:block">
              <div
                className={`${
                  index === personalData.length - 1 ? "h-0" : "h-full"
                } bg-foreground/10 dark:bg-foreground rounded-full`}
              ></div>
            </div>
            <div className="w-full hidden lg:block"></div>
          </div>
        ))}
      </div>
    </>
  );
}
