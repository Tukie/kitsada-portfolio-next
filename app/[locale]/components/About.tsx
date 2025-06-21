import dayjs from "dayjs";
import {
  IconAt,
  IconUser,
  IconUserScan,
  IconPhone,
  IconMail,
  IconMapPin,
  IconSchool,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const personalData = [
    {
      title: t("name"),
      value: `${t("fullName")}`,
      icon: <IconUser size={24} />,
    },
    {
      title: t("age"),
      value: `${dayjs().diff(dayjs("2000-03-05"), "year")} ปี`,
      icon: <IconUserScan size={24} />,
    },
    {
      title: t("phoneNumber"),
      value: "061 050 1728",
      icon: <IconPhone size={24} />,
    },
    {
      title: t("email"),
      value: "sadawutsunee.2885@gmail.com",
      icon: <IconMail size={24} />,
    },
    {
      title: t("lineId"),
      value: "nookkitsada1",
      icon: <IconAt size={24} />,
    },
    {
      title: t("address"),
      value: t("addressValue"),
      icon: <IconMapPin size={24} />,
    },
    {
      title: t("education"),
      value: t("educationValue"),
      icon: <IconSchool size={24} />,
    },
  ];

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2 text-white">{t("title")}</h2>
        <p className="text-white">{t("description")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5">
        {personalData.map((data) => (
          <div
            key={data.title}
            className="flex items-center gap-5 rounded-2xl bg-white/20 backdrop-blur-lg  p-6 border border-white/10"
          >
            <div className="bg-white p-5 rounded-lg text-primary">
              {data.icon}
            </div>
            <div>
              <p className="text-white/90 mb-1">{data.title}</p>
              <p className="wrap-anywhere font-semibold text-white text-lg">
                {data.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
