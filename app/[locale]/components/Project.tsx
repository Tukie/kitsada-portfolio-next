import Image from "next/image";
import { IconEye } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function Project() {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: t("projects1"),
      link: "https://bung-kan-community-learning-center.vercel.app/",
      image: "/project1.png",
    },
    {
      title: t("projects2"),
      link: "https://time-ad-pj.rf.gd/Time-ad-PJ/landing.php",
      image: "/project2.png",
    },
    {
      title: t("projects3"),
      link: "https://movie-app-psi-beryl.vercel.app/browse",
      image: "/project3.png",
    },
  ];

  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">{t("title")}</h2>
        <p>{t("description")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            className="rounded-lg overflow-hidden shadow border bg-white/5 backdrop-blur-lg border-white/10"
            key={project.title}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-80 object-cover overflow-hidden object-center"
              loading="eager"
            />

            <div className="flex flex-col justify-center items-center gap-5 h-48">
              <p className="text-xl font-semibold">{project.title}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-white bg-primary px-4 py-2 rounded-full text-center w-fit flex items-center gap-2 "
              >
                <IconEye size={20} />
                {t("view")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
